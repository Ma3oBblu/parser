import {initDbConnection, initAxios} from './Header';

import {Category, CategorySource} from '../../Module/Common/Models/Category';
import {Product, ProductSourceSimple} from '../../Module/Common/Models/Product';

process.env.TS_NODE_PROJECT = './tsconfig.json';

/**
 * Парсинг доп информации по категории и забор кратких данных по товарам
 *
 * прямой запрос на категорию - получить кол-во товаров - обновить категорию
 * берем товары у текущей категории
 * по кол-ву товаров с шагом 24 перебрать страницы
 * добавить общие сведения по товарам
 */
const run = async () => {
    const sequelize = await initDbConnection(); // подключение БД
    //await sequelize.sync({force: true}); // синхронизация схемы
    const axios = await initAxios(); // подключение axios
    let i:number; // счетчик
    try {
        const allCategories = (await axios.get('main/root-categories', {})).data;
        if (allCategories.payload.length > 0) { // если ответ есть
            for (i = 0; i < allCategories.payload.length; i++) { // перебираем ответ
                let sourceCategory = allCategories.payload[i]; // берем текущую категорию
                const categoryFullData = (await axios.get('category/' + sourceCategory.id +'?&', {})).data; // дергаем гет запросом категорию
                sourceCategory.productAmount = categoryFullData.payload.category.productAmount; // полчим кол-во товаров в категории
                await updateCategoryFullData(sourceCategory); // обновляем в БД категорию
                console.log(`==> update category ${sourceCategory.id}`);
                await addCategoryProducts(axios, sourceCategory.id, sourceCategory.productAmount); // добавляем товары из категории
                let children: any = sourceCategory.children; // берем дочерние
                if (children.length > 0) { // если есть дочерние
                    await updateChildCategoriesFullData(axios, children, sourceCategory.id); // рекурсивно добавляем дочерние с указанием родителя
                }
            }
        }

    } catch (e) {
        console.log('ERROR=>>>', e);
    }
    console.log('Completed');
    process.exit(-1); // завершить программу
};

/**
 * добавление категории из ответа (update or insert)
 * @param sourceCategory
 */
async function updateCategoryFullData(sourceCategory: CategorySource): Promise<boolean>{
    return Category.upsert({
        id: sourceCategory.id,
        title: sourceCategory.title,
        icon: sourceCategory.icon,
        parentId: sourceCategory.parentId,
        productAmount: sourceCategory.productAmount
    });
}

/**
 * добавление дочерних категорий с учетом родителя
 * @param axios
 * @param children
 * @param parentId
 */
async function updateChildCategoriesFullData(axios:any, children:any, parentId:number): Promise<boolean>{
    let i: number; // счетчик
    try {
        for (i=0; i<children.length; i++){ // пройдем массив дочерних категорий
            let sourceCategory = children[i]; // берем текущую категорию
            sourceCategory.parentId = parentId; // проставляем родителя
            const categoryFullData = (await axios.get('category/' + sourceCategory.id +'?&', {})).data; // дергаем гет запросом рутовые категории
            sourceCategory.productAmount = categoryFullData.payload.category.productAmount;
            await updateCategoryFullData(sourceCategory); // добавляем в БД
            await addCategoryProducts(axios, sourceCategory.id, categoryFullData.payload.category.productAmount); // добавляем товары из этой категории
            let moreChildren: any = sourceCategory.children; // берем дочерних у текущей категории
            if (moreChildren.length > 0) { // если есть дочерние
                await updateChildCategoriesFullData(axios, moreChildren, sourceCategory.id); // добаляем дочерние с учетом родителя
            }
        }
        return true;
    } catch (e) {
        console.log('ERROR=>>>', e);
    }
}

/**
 * добавление товаров из заданной категории
 * @param axios
 * @param categoryId
 * @param productAmount
 */
async function addCategoryProducts(axios:any, categoryId:number, productAmount:number){
    let productCount = productAmount; // кол-во товаров в категории
    let pageSize:number = 24; // размер выборки (как на сайте)
    let page:number = 1; // стартовый номер страницы
    let order:string = 'ascending'; // сортировка
    while (productCount > 0){ // пока есть товары в категоии
        // заберем пачку товаров - 24 штуки
        try{
            const products = (await axios.get(`/main/more?categoryId=${categoryId}&size=${pageSize}&page=${page}&sortBy=&order=${order}`)).data;
            let m:number; // счетчик
            for (m = 0; m < products.payload.length; m++){ // переберем товары
                try{
                    await addSimpleProduct(products.payload[m], categoryId); // добавим товар в базу
                } catch (e) {
                    console.log('ERROR adding category products=>>>', e);
                }
            }
            page++; // следующая страница
            productCount = productCount - pageSize; // уменьшаем общее кол-во товаров
            console.log(`===> page ${page}`);
            console.log(`===> productCount ${productCount}`);
        } catch (err) {
            console.log(`error in addCategoryProducts`, err);
        }
    }
}

/**
 * добавление краткой информации по товару
 * @param sourceProduct
 * @param categoryId
 */
async function addSimpleProduct(sourceProduct: ProductSourceSimple, categoryId:number): Promise<boolean>{
    console.log(`==> add category product ${sourceProduct.productId}`);
    return Product.upsert({
        id: sourceProduct.productId,
        title: sourceProduct.title,
        sellPrice: sourceProduct.sellPrice,
        fullPrice: sourceProduct.fullPrice,
        rating: sourceProduct.rating,
        ordersAmount: sourceProduct.ordersQuantity,
        adultCategory: sourceProduct.isAdultCategory,
        isEco: sourceProduct.isEco,
        categoryId: categoryId
    });
}

run(); // запуск команды

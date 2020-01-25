import {initDbConnection, initAxios} from './Header';

import {Category, CategorySource} from '../../Module/Common/Models/Category';

process.env.TS_NODE_PROJECT = './tsconfig.json';

/**
 * Парсинг дерева категорий и сохранение в БД
 */
const run = async () => {
    const sequelize = await initDbConnection(); // подключение БД
    //await sequelize.sync({force: true}); // синхронизация схемы
    const axios = await initAxios(); // подключение axios
    let i:number; // счетчик
    try {
        const data = (await axios.get('main/root-categories', {})).data; // дергаем гет запросом рутовые категории
        if (data.payload.length > 0) { // если ответ есть
            for (i = 0; i < data.payload.length; i++) { // перебираем ответ
                let sourceCategory = data.payload[i]; // берем текущую категорию
                await addCategoryFromTemplate(sourceCategory); // добавляем в БД
                let children: any = sourceCategory.children; // берем дочерние
                if (children.length > 0) { // если есть дочерние
                    await addChildCategories(children, sourceCategory.id); // рекурсивно добавляем дочерние с указанием родителя
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
async function addCategoryFromTemplate(sourceCategory: CategorySource): Promise<boolean>{
    return Category.upsert({
        id: sourceCategory.id,
        title: sourceCategory.title,
        icon: sourceCategory.icon,
        parentId: sourceCategory.parentId
    });
}

/**
 * добавление дочерних категорий с учетом родителя
 * @param children
 * @param parentId
 */
async function addChildCategories(children:any, parentId:number): Promise<boolean>{
    let i: number; // счетчик
    try {
        for (i=0; i<children.length; i++){ // пройдем массив дочерних категорий
            let sourceCategory = children[i]; // берем текущую категорию
            sourceCategory.parentId = parentId; // проставляем родителя
            await addCategoryFromTemplate(sourceCategory); // добавляем в БД
            let moreChildren: any = sourceCategory.children; // берем дочерних у текущей категории
            if (moreChildren.length > 0) { // если есть дочерние
                await addChildCategories(moreChildren, sourceCategory.id); // добаляем дочерние с учетом родителя
            }
        }
        return true;
    } catch (e) {
        console.log('ERROR=>>>', e);
    }
}

run(); // запуск команды

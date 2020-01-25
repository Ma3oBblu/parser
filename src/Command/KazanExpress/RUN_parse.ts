import * as self from './Header';
import { getProduct, saveProduct, saveCategory } from './Action';

process.env.TS_NODE_PROJECT = './tsconfig.json';

/**
 * задержка
 * @param n
 */
function wait(n: number): Promise<boolean> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(true);
        }, n);
    });
}

/**
 * Парсинг товаров и сохранение в БД
 */
const run = async () => {
    await self.runDynamicConfig();
    let i = 0;
    try {
        const product: any = await getProduct();
        if (product.length > 0) {
            await saveProduct();
            await saveCategory();
        }
    } catch (e) {
        console.log('ERROR=>>>', e);
    }
    wait(1000);
    process.exit(-1); // завершить программу
};
run();

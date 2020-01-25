import * as self from './Header';

process.env.TS_NODE_PROJECT = './tsconfig.json';

/**
 * получить продукт
 */
export async function getProduct(): Promise<any> {
    let ok = true;
    try {

    } catch (e) {
        ok = false;
    }
    return ok;
}

/**
 * сохранить продукт в БД
 */
export async function saveProduct(): Promise<any> {
    let ok = true;
    try {

    } catch (e) {
        ok = false;
    }
    return ok;
}

/**
 * сохранить категорию в БД
 */
export async function saveCategory(): Promise<any>{
    let ok = true;
    try {

    } catch (e) {
        ok = false;
    }
    return ok;
}

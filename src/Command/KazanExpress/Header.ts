// Инициализация нужных библиотек
process.env.TS_NODE_PROJECT = './tsconfig.json';

import * as dbConnection from '../../Configs/Connection';
const axios = require('axios').default;

/**
 * Подключение к БД
 */
export async function initDbConnection(): Promise<any> {
    return dbConnection.sequelize;
}

/**
 * Инициализация axios (instance)
 */
export async function initAxios(): Promise<any> {
    const authType: string = 'Basic';
    const authString: string = 'kazanexpress-customer:customerSecretKey';
    let buffer = new Buffer(authString);
    const basicAuthString: string = authType + ' ' + buffer.toString('base64');
    const baseUrl:string = 'https://kazanexpress.ru/api/';
    const timeout: number = 1000;
    return axios.create({
        baseURL: baseUrl,
        timeout: timeout,
        headers: {'Authorization': basicAuthString}
    });
}

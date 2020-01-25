// Подключение системных классов
import * as config from '../../Configs/Config.js';

process.env.TS_NODE_PROJECT = './tsconfig.json';

const Sequelize = require('sequelize');

export const sequelize = new Sequelize(
    config.mysql.database,
    config.mysql.username,
    config.mysql.password,
    {
        host: config.mysql.host,
        dialect: config.mysql.dialect
    }
);

/**
 * Динамическая конфигурация
 */
export async function runDynamicConfig() {
    return sequelize;
}

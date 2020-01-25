// Подключение системных классов

process.env.TS_NODE_PROJECT = './tsconfig.json';

import * as dbConnection from '../../Configs/Connection';

export const sequelize = dbConnection.sequelize;

/**
 * Динамическая конфигурация
 */
export async function runDynamicConfig() {
    console.log(sequelize);
    return sequelize;
}

import * as config from './Config';
const Sequelize = require('sequelize');

export const sequelize = new Sequelize(
    config.mysql.database,
    config.mysql.username,
    config.mysql.password,
    {
        host: config.mysql.host,
        dialect: config.mysql.dialect,
        logging: false
    }
);

import * as express from 'express';

const router = express.Router();
import * as config from '../../../Configs/Config';
const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    config.mysql.database,
    config.mysql.username,
    config.mysql.password,
    {
        host: config.mysql.host,
        dialect: config.mysql.dialect
    }
);

/**
 * Проверка на работоспособность
 */
router.get('/', (req:any, res:any, next:any) => {
    sequelize
        .authenticate()
        .then(() => {
            console.log('Connection has been established successfully.');
        })
        .catch((err: any) => {
            console.error('Unable to connect to the database:', err);
        });
    res.send('Сервер работает');
});

export { router };

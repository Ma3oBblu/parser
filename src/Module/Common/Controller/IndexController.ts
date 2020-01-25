import * as express from 'express';

const router = express.Router();
import * as Config from '../../../Configs/config';
const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    Config.mysql2.database,
    Config.mysql2.username,
    Config.mysql2.password,
    {
        host: Config.mysql2.host,
        dialect: Config.mysql2.dialect
    }
);

/**
 * Проверка на работоспособность
 */
router.get('/', (req, res, next) => {
    sequelize
        .authenticate()
        .then(() => {
            console.log('Connection has been established successfully.');
        })
        .catch(err => {
            console.error('Unable to connect to the database:', err);
        });
    res.send('Сервер работает');
});

export { router };

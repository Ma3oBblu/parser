import * as express from 'express';
import * as dbConnection from '../../../Configs/Connection';
const router = express.Router();

const sequelize = dbConnection.sequelize;

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

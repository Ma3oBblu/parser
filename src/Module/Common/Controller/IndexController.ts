import * as express from 'express';

const router = express.Router();

/**
 * Проверка на работоспособность
 */
router.get('/', (req, res, next) => {
    res.send('Сервер работает');
});

export { router };

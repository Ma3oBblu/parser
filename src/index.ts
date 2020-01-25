import * as express from 'express';

// Базовый модуль
import * as IndexController from './Module/Common/Controller/IndexController';

const port = `3005`;
const url = `http://localhost:${port}`;
const app = express();

app.use((req, res, next) => {
    console.log('');
    console.log(`>:${req.path}`);
    next();
});

app.use(IndexController.router);

console.log(`server start at ${url}`);
app.listen(port);

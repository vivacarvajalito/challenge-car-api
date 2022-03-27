import express from 'express';
import errorHandler from '../middleware/errorHandler';

const createServer = (): express.Application => {
    const app = express();

    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());

    app.disable('x-powered-by');

    app.get('/health', (_req, res) => {
        res.send('UP');
    });

    app.use(errorHandler);

    return app;
};

export { createServer };
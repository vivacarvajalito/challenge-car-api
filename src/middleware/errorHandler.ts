import { Request, Response, NextFunction } from 'express';
import { logger } from '../config/logger';

const errorHandler = (
    error: Error,
    _req: Request,
    res: Response,
    next: NextFunction
) => {
    if (res.headersSent) return next(error);
    logger.error(error.message);
    res.status(500).send(error.message);
};

export default errorHandler;
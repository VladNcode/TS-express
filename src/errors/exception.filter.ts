import { Request, Response, NextFunction } from 'express';
import { inject, injectable } from 'inversify';
import { ILogger } from '../logger/logger.interface';
import { IExceptionFilter } from './exception.filter.interface';
import { TYPES } from '../types';
import { HTTPError } from './http-error.class';

@injectable()
export class ExceptionFilter implements IExceptionFilter {
	constructor(@inject(TYPES.ILogger) private logger: ILogger) {
		this.serviceLog();
	}

	serviceLog(): void {
		this.logger.log('[ExceptionFilter] Exception service started!');
	}

	catch(err: Error | HTTPError, req: Request, res: Response, next: NextFunction): void {
		if (err instanceof HTTPError) {
			this.logger.error(`[${err.context}] Error ${err.statusCode}: ${err.message}`);
			res.status(err.statusCode).json({ error: err.message });
		} else {
			this.logger.error(`${err.message}`);
			res.status(500).json({ error: err.message });
		}
	}
}

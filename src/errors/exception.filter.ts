import { Request, Response } from 'express';
import { LoggerService } from '../logger/logger.service';
import { IExceptionFilter } from './exception.filter.interface';
import { HTTPError } from './http-error.class';

export class ExceptionFilter implements IExceptionFilter {
  logger: LoggerService;
  constructor(logger: LoggerService) {
    this.logger = logger;
    this.serviceLog();
  }

  serviceLog() {
    this.logger.log('Exception service started!');
  }

  catch(err: Error | HTTPError, req: Request, res: Response) {
    if (err instanceof HTTPError) {
      this.logger.error(`[${err.context}] Error ${err.statusCode}: ${err.message}`);
      res.status(err.statusCode).json({ error: err.message });
    } else {
      this.logger.error(`${err.message}`);
      res.status(500).json({ error: err.message });
    }
  }
}

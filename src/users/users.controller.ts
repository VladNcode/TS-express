import { BaseController } from '../common/base.controller';
import { LoggerService } from '../logger/logger.service';
import { NextFunction, Request, Response } from 'express';
import { HTTPError } from '../errors/http-error.class';

export class UserController extends BaseController {
  constructor(logger: LoggerService) {
    super(logger);

    this.bindRouter([
      { path: '/login', method: 'post', func: this.login },
      { path: '/register', method: 'post', func: this.register },
    ]);
  }

  login(req: Request, res: Response, next: NextFunction) {
    next(new HTTPError(401, 'auth error', 'login'));
  }

  register(req: Request, res: Response) {
    // this.send(res, 200, 'Register class');
    this.send(res, 200, 'Register class');
  }
}

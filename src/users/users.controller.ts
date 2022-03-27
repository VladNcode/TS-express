import { BaseController } from '../common/base.controller';
import { LoggerService } from '../logger/logger.service';
import { Request, Response } from 'express';

export class UserController extends BaseController {
  constructor(logger: LoggerService) {
    super(logger);

    this.bindRouter([
      { path: '/login', method: 'post', func: this.login },
      { path: '/register', method: 'post', func: this.register },
    ]);
  }

  login(req: Request, res: Response) {
    this.send(res, 200, 'Login class');
  }

  register(req: Request, res: Response) {
    this.send(res, 200, 'Register class');
  }
}

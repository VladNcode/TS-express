import { Response, Router } from 'express';
import { LoggerService } from '../logger/logger.service';
import { IControllerRoute } from './route.interface';

export abstract class BaseController {
  private readonly _router: Router;
  protected constructor(private logger: LoggerService) {
    this._router = Router();
  }

  get router() {
    return this._router;
  }

  send<T>(res: Response, code: number, message: T) {
    return res.status(code).json(message);
  }

  ok<T>(res: Response, code: number, message: T) {
    return this.send(res, 200, message);
  }

  created(res: Response) {
    return res.status(201);
  }

  protected bindRouter(routes: IControllerRoute[]) {
    for (const route of routes) {
      this.logger.log(`[${route.method}] ${route.path}`);
      const handler = route.func.bind(this);
      this.router[route.method](route.path, handler);
    }
  }
}

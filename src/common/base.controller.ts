import { Response, Router } from 'express';
import { injectable } from 'inversify';
import { ILogger } from '../logger/logger.interface';
import { ExpressReturnType, IControllerRoute } from './route.interface';

@injectable()
export abstract class BaseController {
	private readonly _router: Router;

	constructor(private logger: ILogger) {
		this._router = Router();
	}

	get router(): Router {
		return this._router;
	}

	send<T>(res: Response, code: number, message: T): ExpressReturnType {
		return res.status(code).json(message);
	}

	ok<T>(res: Response, code: number, message: T): ExpressReturnType {
		return this.send(res, 200, message);
	}

	created(res: Response): ExpressReturnType {
		return res.status(201);
	}

	protected bindRouter(routes: IControllerRoute[]): void {
		for (const route of routes) {
			this.logger.log(`[${route.method}] ${route.path}`);
			const handler = route.func.bind(this);
			this.router[route.method](route.path, handler);
		}
	}
}

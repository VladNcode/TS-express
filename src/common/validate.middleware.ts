import { ClassConstructor, plainToClass } from 'class-transformer';
import { validate } from 'class-validator';
import { Request, Response, NextFunction } from 'express';
import { IMiddleware } from './middleware.interface';

export class ValidateMiddleware implements IMiddleware {
	constructor(private classToValidate: ClassConstructor<object>) {}

	execute({ body }: Request, res: Response, next: NextFunction): void {
		const instance = plainToClass(this.classToValidate, body);

		validate(instance).then(errors => {
			const formattedErrors = {};

			errors.forEach(err => {
				Object.assign(formattedErrors, err.constraints);
			});

			errors.length ? res.status(422).json({ error: Object.values(formattedErrors) }) : next();
		});
	}
}

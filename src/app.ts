import express, { Express } from 'express';
import { Server } from 'http';
import { LoggerService } from './logger/logger.service';
import { UserController } from './users/users.controller';
import { ExceptionFilter } from './errors/exception.filter';

export class App {
  app: Express;
  server: Server;
  port: number;
  logger: LoggerService;
  userController: UserController;
  exceptionFiler: ExceptionFilter;

  constructor(
    logger: LoggerService,
    userController: UserController,
    exceptionFiler: ExceptionFilter
  ) {
    this.app = express();
    this.port = 3000;
    this.logger = logger;
    this.userController = userController;
    this.exceptionFiler = exceptionFiler;
  }

  useRoutes() {
    this.app.use('/users', this.userController.router);
  }

  useExceptionFilters() {
    this.app.use(this.exceptionFiler.catch.bind(this.exceptionFiler));
  }

  public async init() {
    this.useRoutes();
    this.useExceptionFilters();
    this.server = this.app.listen(this.port);
    this.logger.log(`Listening on ${this.port}...`);
  }
}

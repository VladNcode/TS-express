"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggerService = void 0;
const tslog_1 = require("tslog");
class LoggerService {
    constructor() {
        this.logger = new tslog_1.Logger({
            displayLoggerName: false,
            displayFilePath: 'hidden',
            displayFunctionName: false,
        });
    }
    log(...args) {
        this.logger.info(...args);
    }
    error(...args) {
        this.logger.info(...args);
    }
    warn(...args) {
        this.logger.info(...args);
    }
}
exports.LoggerService = LoggerService;

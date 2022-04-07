import { PrismaClient } from '@prisma/client';
import { inject, injectable } from 'inversify';
import { ILogger } from '../logger/logger.interface';
import { TYPES } from '../types';

@injectable()
export class PrismaService {
	client: PrismaClient;

	constructor(@inject(TYPES.ILogger) private logger: ILogger) {
		this.client = new PrismaClient();
	}

	async connect(): Promise<void> {
		try {
			await this.client.$connect();
			this.logger.log('[PrismaService] Connected to Prisma!');
		} catch (e) {
			this.logger.error('[PrismaService] Error connecting to Prisma');
			if (e instanceof Error) {
				this.logger.error(e.message);
			}
		}
	}

	async disconnect(): Promise<void> {
		try {
			await this.client.$disconnect();
			this.logger.log('[PrismaService] Disconnected from Prisma!');
		} catch (e) {
			this.logger.error('[PrismaService] Error disconnecting from Prisma');
			if (e instanceof Error) {
				this.logger.error(e.message);
			}
		}
	}
}

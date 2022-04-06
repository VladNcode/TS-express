import { UserModel } from '@prisma/client';
import { inject, injectable } from 'inversify';
import { IConfigService } from '../config/config.service.interface';
import { TYPES } from '../types';
import { UserLoginDto } from './dto/user-login.dto';
import { UserRegisterDto } from './dto/user-register.dto';
import { User } from './user.entity';
import { IUsersRepository } from './users.repository.interface';
import { IUserService } from './users.service.interface';

@injectable()
export class UserService implements IUserService {
	constructor(
		@inject(TYPES.ConfigService) private configService: IConfigService,
		@inject(TYPES.UsersRepository) private usersRepository: IUsersRepository,
	) {}
	async createUser({ email, name, password }: UserRegisterDto): Promise<UserModel | null> {
		const newUser = new User(email, name);
		const salt = this.configService.get('SALT');
		await newUser.setPassword(password, Number(salt));

		// if user exist return null
		const userExists = await this.usersRepository.find(email);
		if (userExists) return null;

		// else create user
		return await this.usersRepository.create(newUser);
	}

	async validateUser({ email, password }: UserLoginDto): Promise<boolean> {
		const userExists = await this.usersRepository.find(email);
		if (!userExists) return false;

		const user = new User(userExists.email, userExists.name, userExists.password);
		return user.comparePassword(password);
	}
}

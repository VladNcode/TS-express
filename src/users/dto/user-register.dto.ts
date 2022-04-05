import { IsEmail, IsString } from 'class-validator';

export class UserRegisterDto {
	@IsEmail({}, { message: 'Please enter a valid email' })
	email: string;

	@IsString({ message: 'Password is missing' })
	password: string;

	@IsString({ message: 'Name is missing' })
	name: string;
}

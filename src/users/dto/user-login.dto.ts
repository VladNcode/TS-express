import { IsEmail, IsString } from 'class-validator';

export class UserLoginDto {
	@IsEmail({}, { message: 'Please enter a valid email' })
	email: string;

	@IsString({ message: 'Password is missing' })
	password: string;
}

import { App } from '../src/app';
import { boot } from '../src/main';
import request from 'supertest';
import { PrismaClient } from '@prisma/client';

let application: App;
const prisma = new PrismaClient();

beforeAll(async () => {
	const { app } = await boot;
	application = app;

	await prisma.userModel.deleteMany();
	await prisma.$executeRaw`UPDATE sqlite_sequence SET seq = 0 WHERE name = 'UserModel';`;
});

describe('Users e2e', () => {
	it('Register - success', async () => {
		const res = await request(application.app)
			.post('/users/register')
			.send({
				name: 'Jorge',
				password: 'x6tnBEr4&i',
				email: 'juancampos@example.net',
			})
			.expect(201);

		expect(res.body).toMatchObject({ email: 'juancampos@example.net', id: 1, name: 'Jorge' });
	});

	it('Register - errors', async () => {
		const res = await request(application.app)
			.post('/users/register')
			.send({
				name: 'Jorge',
				password: 'x6tnBEr4&i',
				email: 'juancampos@example.net',
			})
			.expect(422);

		expect(res.body.error).toEqual('User already exists');
	});

	it('Login - success', async () => {
		const res = await request(application.app)
			.post('/users/login')
			.send({
				password: 'x6tnBEr4&i',
				email: 'juancampos@example.net',
			})
			.expect(200);

		expect(res.body.token).not.toBeNull();
		expect(res.body.user.email).toEqual('juancampos@example.net');
	});

	it('Login - failure email', async () => {
		const res = await request(application.app)
			.post('/users/login')
			.send({
				password: 'x6tnBEr4&i',
				email: 'juancampos@example.nett',
			})
			.expect(401);

		expect(res.body.error).toEqual('auth error');
	});

	it('Login - failure password', async () => {
		const res = await request(application.app)
			.post('/users/login')
			.send({
				password: 'password',
				email: 'juancampos@example.net',
			})
			.expect(401);

		expect(res.body.error).toEqual('auth error');
	});

	it('Info - success', async () => {
		const {
			body: { token },
		} = await request(application.app)
			.post('/users/login')
			.send({
				password: 'x6tnBEr4&i',
				email: 'juancampos@example.net',
			})
			.expect(200);

		const res = await request(application.app)
			.get('/users/info')
			.set('Authorization', `Bearer ${token}`)
			.expect(200);

		expect(res.body).toMatchObject({ email: 'juancampos@example.net', id: 1 });
	});

	it('Info - failure', async () => {
		const {
			body: { error },
		} = await request(application.app).get('/users/info').expect(403);

		expect(error).toEqual('Not authorized!');
	});
});

afterAll(async () => {
	await prisma.userModel.deleteMany();
	application.close();
});

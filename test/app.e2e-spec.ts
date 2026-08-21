import { Test } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { AuthController } from './../src/modules/auth/controllers/auth.controller';
import { AuthService } from './../src/modules/auth/services/auth.service';

describe('AuthController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [
        {
          provide: AuthService,
          useValue: {
            register: jest.fn().mockResolvedValue({
              id: 1,
              username: 'test-user',
              token: 'test-token',
            }),
            login: jest.fn().mockResolvedValue({
              id: 1,
              username: 'test-user',
              token: 'test-token',
            }),
          },
        },
      ],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.setGlobalPrefix('api/v1');
    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
        transform: true,
        forbidNonWhitelisted: true,
      }),
    );
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('permite registrar un usuario', () => {
    return request(app.getHttpServer())
      .post('/api/v1/auth/register')
      .send({
        username: 'test-user',
        email: 'test@example.com',
        password: 'Password123!',
        role: 'user',
      })
      .expect(201)
      .expect(({ body }) => {
        expect(body.token).toBe('test-token');
      });
  });

  it('permite iniciar sesión', () => {
    return request(app.getHttpServer())
      .post('/api/v1/auth/login')
      .send({ username: 'test-user', password: 'Password123!' })
      .expect(201)
      .expect(({ body }) => {
        expect(body.token).toBe('test-token');
      });
  });
});

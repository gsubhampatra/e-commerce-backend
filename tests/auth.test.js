
//write the test cases for the auth routes use (import statements)
import request from 'supertest';
import app from '../app.js';

describe('POST /auth/signup', () => {
    it('should return 201 OK', async () => {
        const response = await request(app).post('/api/auth/signup').send({
        username: 'testuser',
        password: 'password',
        });
        expect(response.status).toBe(201);
    });
    });

    describe('POST /auth/login', () => {
        it('should return 200 OK', async () => {
        const response = await request(app).post('/api/auth/login').send({
        username: 'testuser',
        password: 'password',
        });
        expect(response.status).toBe(200);
    });
    });


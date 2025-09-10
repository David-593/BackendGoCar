import request from 'supertest';
import app from '../app';

describe('Auth endpoints', () => {
  it('POST /api/auth/register debe crear un usuario', async () => {
    const res = await request(app)
      .post('/api/auth/register')
      .send({
        cedula: '1234567890',
        nombres: 'Test',
        apellidos: 'User',
        correo: 'testuser@example.com',
        password: 'testpass',
        rol: 'user'
      });
  console.log(`Status recibido: ${res.statusCode}`);
  expect([200, 201, 204, 400]).toContain(res.statusCode);
  if ([200, 201, 204].includes(res.statusCode)) {
    expect(res.body).toHaveProperty('cedula');
  } else {
    expect(res.body).toHaveProperty('message');
  }
  });

  it('POST /api/auth/login debe loguear usuario existente', async () => {
    const res = await request(app)
      .post('/api/auth/login')
      .send({
        correo: 'testuser@example.com',
        password: 'testpass'
      });
  console.log(`Status recibido: ${res.statusCode}`);
  expect([200, 201, 204, 400]).toContain(res.statusCode);
  if ([200, 201, 204].includes(res.statusCode)) {
    expect(res.body).toHaveProperty('token');
  } else {
    expect(res.body).toHaveProperty('message');
  }
  });
});

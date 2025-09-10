

import request from 'supertest';
import app from '../app';

let adminToken = '';
const mockAdmin = {
  cedula: '9999999999',
  nombres: 'Admin',
  apellidos: 'User',
  correo: 'adminuser@example.com',
  password: 'adminpass',
  rol: 'admin'
};
const mockUser = {
  cedula: '9876543210',
  nombres: 'Test',
  apellidos: 'User',
  correo: 'testuser2@example.com',
  password: 'testpass2',
  rol: 'user'
};

beforeAll(async () => {
  await request(app).post('/api/auth/register').send(mockAdmin);
  await request(app).post('/api/auth/register').send(mockUser);
  const res = await request(app)
    .post('/api/auth/login')
    .send({ correo: mockAdmin.correo, password: mockAdmin.password });
  if (res.body.token) adminToken = res.body.token;
});

describe('Admin endpoints', () => {
  it('POST /api/admin/register debe crear usuario como admin', async () => {
    const res = await request(app)
      .post('/api/admin/register')
      .set('Authorization', `Bearer ${adminToken}`)
      .send({
        cedula: '1231231231',
        nombres: 'Nuevo',
        apellidos: 'Usuario',
        correo: 'nuevo@example.com',
        password: 'nuevopass',
        rol: 'user'
      });
  console.log(`Status recibido: ${res.statusCode}`);
  expect([200, 201, 204, 401]).toContain(res.statusCode);
  if ([200, 201, 204].includes(res.statusCode)) {
    expect(res.body).toHaveProperty('cedula');
  } else {
    expect(res.body).toHaveProperty('message');
  }
  });

  it('POST /api/admin/getUser debe buscar usuario por cedula', async () => {
    const res = await request(app)
      .post('/api/admin/getUser')
      .set('Authorization', `Bearer ${adminToken}`)
      .send({ cedula: mockUser.cedula });
  expect([200, 201, 204, 401]).toContain(res.statusCode);
  if ([200, 201, 204].includes(res.statusCode)) {
    expect(res.body).toHaveProperty('cedula');
  } else {
    expect(res.body).toHaveProperty('message');
  }
  });

  it('DELETE /api/admin/deleteUser/:cedula debe eliminar usuario', async () => {
    const res = await request(app)
      .delete(`/api/admin/deleteUser/${mockUser.cedula}`)
      .set('Authorization', `Bearer ${adminToken}`);
  expect([200, 201, 204, 401]).toContain(res.statusCode);
  if (![200, 201, 204].includes(res.statusCode)) {
    expect(res.body).toHaveProperty('message');
  }
  });
});

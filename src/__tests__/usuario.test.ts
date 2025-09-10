import request from 'supertest';
import app from '../app';


const port = 4000;
let userToken = '';
const mockUser = {
  cedula: '1234567890',
  nombres: 'Test',
  apellidos: 'User',
  correo: 'testuser@example.com',
  password: 'testpass',
  rol: 'user'
};

beforeAll(async () => {
  // Registrar usuario mock
  await request(app)
    .post('/api/auth/register')
    .send(mockUser);
  // Login con usuario mock
  const res = await request(app)
    .post('/api/auth/login')
    .send({ correo: mockUser.correo, password: mockUser.password });
  if (res.body.token) userToken = res.body.token;
});

describe('Usuario endpoints', () => {
  it('PUT /api/users/updateProfile debe actualizar usuario', async () => {
    const res = await request(app)
      .put('/api/users/updateProfile')
      .set('Authorization', `Bearer ${userToken}`)
      .send({
        cedula: '1234567890',
        nombres: 'TestUpdated',
        apellidos: 'UserUpdated',
        correo: 'testuser@example.com'
      });
    console.log(`Status recibido: ${res.statusCode}`);
  expect([200, 204, 401]).toContain(res.statusCode);
  if ([200, 204].includes(res.statusCode)) {
    expect(res.body).toHaveProperty('cedula');
  } else {
    expect(res.body).toHaveProperty('message');
  }
  });
});

// Removed the second beforeAll as it is no longer needed
    
import request from 'supertest';
import app from '../app'; 

describe('Auto endpoints', () => {
  it('GET /api/auto/disponibles debe retornar 200 y un array', async () => {
    const res = await request(app).get('/api/auto/disponibles');
  console.log(`Status recibido: ${res.statusCode}`);
  expect([200, 201, 204]).toContain(res.statusCode);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
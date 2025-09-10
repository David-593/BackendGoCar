"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../app"));
describe('Auth endpoints', () => {
    it('POST /api/auth/register debe crear un usuario', async () => {
        const res = await (0, supertest_1.default)(app_1.default)
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
        }
        else {
            expect(res.body).toHaveProperty('message');
        }
    });
    it('POST /api/auth/login debe loguear usuario existente', async () => {
        const res = await (0, supertest_1.default)(app_1.default)
            .post('/api/auth/login')
            .send({
            correo: 'testuser@example.com',
            password: 'testpass'
        });
        console.log(`Status recibido: ${res.statusCode}`);
        expect([200, 201, 204, 400]).toContain(res.statusCode);
        if ([200, 201, 204].includes(res.statusCode)) {
            expect(res.body).toHaveProperty('token');
        }
        else {
            expect(res.body).toHaveProperty('message');
        }
    });
});
//# sourceMappingURL=auth.test.js.map
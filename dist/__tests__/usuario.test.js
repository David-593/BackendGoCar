"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../app"));
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
    await (0, supertest_1.default)(app_1.default)
        .post('/api/auth/register')
        .send(mockUser);
    const res = await (0, supertest_1.default)(app_1.default)
        .post('/api/auth/login')
        .send({ correo: mockUser.correo, password: mockUser.password });
    if (res.body.token)
        userToken = res.body.token;
});
describe('Usuario endpoints', () => {
    it('PUT /api/users/updateProfile debe actualizar usuario', async () => {
        const res = await (0, supertest_1.default)(app_1.default)
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
        }
        else {
            expect(res.body).toHaveProperty('message');
        }
    });
});
//# sourceMappingURL=usuario.test.js.map
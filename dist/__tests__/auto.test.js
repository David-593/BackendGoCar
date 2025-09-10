"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../app"));
describe('Auto endpoints', () => {
    it('GET /api/auto/disponibles debe retornar 200 y un array', async () => {
        const res = await (0, supertest_1.default)(app_1.default).get('/api/auto/disponibles');
        console.log(`Status recibido: ${res.statusCode}`);
        expect([200, 201, 204]).toContain(res.statusCode);
        expect(Array.isArray(res.body)).toBe(true);
    });
});
//# sourceMappingURL=auto.test.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutoService = void 0;
const client_1 = require("../../generated/prisma/client");
const prisma = new client_1.PrismaClient();
class AutoService {
    async addAuto(data) {
        const autoData = {
            marca: data.marca,
            modelo: data.modelo,
            año: data.año,
            precio: data.precio,
            kilometraje: data.kilometraje,
            color: data.color,
            descripcion: data.descripcion,
            imagenUrl: data.imagenUrl,
            contacto: data.contacto,
            estado: data.estado || 'DISPONIBLE',
            vendedor: { connect: { cedula: data.vendedorCedula } }
        };
        return await prisma.auto.create({ data: autoData });
    }
    async findAutosByUsuario(cedula) {
        return await prisma.auto.findMany({
            where: {
                vendedorCedula: cedula,
                estado: 'DISPONIBLE',
            },
        });
    }
    async marcarAutoComoVendido(id) {
        return await prisma.auto.update({
            where: { id },
            data: { estado: 'VENDIDO' },
        });
    }
    async eliminarAuto(id) {
        return await prisma.auto.delete({
            where: { id },
        });
    }
    async findAutosDisponibles() {
        return await prisma.auto.findMany({
            where: { estado: 'DISPONIBLE' },
        });
    }
}
exports.AutoService = AutoService;
//# sourceMappingURL=AutoService.js.map
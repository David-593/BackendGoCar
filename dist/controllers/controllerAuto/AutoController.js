"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutoController = void 0;
const AutoService_1 = require("../../service/serviceAuto/AutoService");
const autoService = new AutoService_1.AutoService();
class AutoController {
    async getAllAutos(req, res) {
        try {
            const autos = await autoService.getAllAutos();
            res.json(autos);
        }
        catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
    async getAutoById(req, res) {
        try {
            const { id } = req.params;
            const auto = await autoService.getAutoById(Number(id));
            if (!auto) {
                return res.status(404).json({ message: 'Auto no encontrado' });
            }
            res.json(auto);
        }
        catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
    async addAuto(req, res) {
        try {
            const data = req.body;
            const file = req.file;
            if (file) {
                const fileName = file.filename || file.path.split(/[/\\]/).pop();
                data.imagenUrl = fileName;
            }
            const auto = await autoService.addAuto(data);
            res.status(201).json({ message: 'Auto agregado', auto });
        }
        catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
    async findAutosByUsuario(req, res) {
        try {
            const cedula = req.user?.cedula;
            if (!cedula) {
                return res.status(401).json({ message: 'No se encontró la cédula en el token' });
            }
            const autos = await autoService.findAutosByUsuario(cedula);
            res.json(autos);
        }
        catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
    async marcarAutoComoVendido(req, res) {
        try {
            const { id } = req.params;
            const auto = await autoService.marcarAutoComoVendido(Number(id));
            res.json({ message: 'Auto marcado como vendido', auto });
        }
        catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
    async findAutosDisponibles(req, res) {
        try {
            const autos = await autoService.findAutosDisponibles();
            res.json(autos);
        }
        catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
}
exports.AutoController = AutoController;
//# sourceMappingURL=AutoController.js.map
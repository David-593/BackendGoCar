"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const AutoController_1 = require("../../controllers/controllerAuto/AutoController");
const multer_1 = __importDefault(require("multer"));
const AuthMiddleware_1 = require("../../middleware/AuthMiddleware");
const router = (0, express_1.Router)();
const autoController = new AutoController_1.AutoController();
const storage = multer_1.default.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads/");
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname);
    }
});
const upload = (0, multer_1.default)({ storage: storage });
router.post("/add", AuthMiddleware_1.authMiddleware, upload.single("imagen"), async (req, res) => {
    await autoController.addAuto(req, res);
});
router.get("/mis-autos/:cedula", AuthMiddleware_1.authMiddleware, async (req, res) => {
    await autoController.findAutosByUsuario(req, res);
});
router.patch("/vender/:id", AuthMiddleware_1.authMiddleware, async (req, res) => {
    await autoController.marcarAutoComoVendido(req, res);
});
router.get("/disponibles", async (req, res) => {
    await autoController.findAutosDisponibles(req, res);
});
exports.default = router;
//# sourceMappingURL=AutoRoute.js.map
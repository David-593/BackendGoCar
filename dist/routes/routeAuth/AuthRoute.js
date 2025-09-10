"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AuthController_1 = require("../../controllers/controllerAuth/AuthController");
const express_1 = require("express");
const router = (0, express_1.Router)();
const authController = new AuthController_1.AuthController();
router.post("/register", (req, res) => authController.register(req, res));
router.post("/login", (req, res) => authController.login(req, res));
exports.default = router;
//# sourceMappingURL=AuthRoute.js.map
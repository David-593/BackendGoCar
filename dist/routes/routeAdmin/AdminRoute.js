"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const AdminController_1 = require("../../controllers/controllerAdmin/AdminController");
const router = (0, express_1.Router)();
const adminController = new AdminController_1.AdminController();
router.post("/register", (req, res) => adminController.register(req, res));
exports.default = router;
//# sourceMappingURL=AdminRoute.js.map
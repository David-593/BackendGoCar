"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const AdminController_1 = require("../../controllers/controllerAdmin/AdminController");
const RoleMiddleware_1 = require("../../middleware/RoleMiddleware");
const router = (0, express_1.Router)();
const adminController = new AdminController_1.AdminController();
router.post("/register", (0, RoleMiddleware_1.authorizeRoles)("admin"), async (req, res) => {
    await adminController.register(req, res);
});
router.get("/getUser", (0, RoleMiddleware_1.authorizeRoles)("admin"), async (req, res) => {
    await adminController.findUserByCedula(req, res);
});
router.delete("/deleteUser", (0, RoleMiddleware_1.authorizeRoles)("admin"), async (req, res) => {
    await adminController.deleteUser(req, res);
});
exports.default = router;
//# sourceMappingURL=AdminRoute.js.map
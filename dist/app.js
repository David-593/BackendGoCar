"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const UsuarioRoute_1 = __importDefault(require("./routes/routeUsuario/UsuarioRoute"));
const AuthMiddleware_1 = require("./middleware/AuthMiddleware");
const AuthRoute_1 = __importDefault(require("./routes/routeAuth/AuthRoute"));
const AdminRoute_1 = __importDefault(require("./routes/routeAdmin/AdminRoute"));
const app = (0, express_1.default)();
const port = process.env.PORT;
app.use((0, cors_1.default)({
    origin: "http://localhost:4200",
    credentials: true
}));
app.use(express_1.default.json());
app.use("/api/users", AuthMiddleware_1.authMiddleware, UsuarioRoute_1.default);
app.use("/api/auth", AuthRoute_1.default);
app.use("/api/admin", AdminRoute_1.default);
app.listen(port, () => {
    console.log(`Server on port ${port}`);
});
//# sourceMappingURL=app.js.map
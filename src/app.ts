import express from "express";
import cors from "cors"; 
import usuarioRoutes from "./routes/routeUsuario/UsuarioRoute";
import autoRoutes from "./routes/routeAuto/AutoRoute";
import { authMiddleware } from "./middleware/AuthMiddleware";
import authRoute from "./routes/routeAuth/AuthRoute";
import adminRoute from "./routes/routeAdmin/AdminRoute";

const app = express();
const port = process.env.PORT;

app.use(cors({
  origin: "http://localhost:4200",
  credentials: true
}));

app.use(express.json());

app.use("/api/users", authMiddleware, usuarioRoutes);
app.use("/api/auto", autoRoutes);
app.use("/api/auth", authRoute);
app.use("/api/admin", authMiddleware, adminRoute);

// app.listen(port, () => {
//   console.log(`Server on port ${port}`);
// });

export default app;
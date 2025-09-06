import express from "express";
import cors from "cors"; 
import usuarioRoutes from "./routes/routeUsuario/UsuarioRoute";
import authRoute from "./routes/routeAuth/AuthRoute";
import adminRoute from "./routes/routeAdmin/AdminRoute";

const app = express();
const port = process.env.PORT;

app.use(cors({
  origin: "http://localhost:4200",
  credentials: true
}));

app.use(express.json());

app.use("/api/users", usuarioRoutes);
app.use("/api/auth", authRoute);
app.use("/api/admin", adminRoute);

app.listen(port, () => {
  console.log(`Server on port ${port}`);
});
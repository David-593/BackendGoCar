import { AuthLoginDto } from "dto/dtoAuth/AuthDto";
import { Request, Response } from "express";
import { AuthUserService } from "../../service/serviceAuth/AuthService";

const authService = new AuthUserService();

export class AuthController {
  // Registro de usuario
  async register(req: Request, res: Response) {
    try {
      const { cedula, nombres, apellidos, email, password, telefono, redSocial } = req.body;

      const user = await authService.register({
        cedula,
        nombres,
        apellidos,
        email,
        password,
        telefono,
        redSocial,
      });

      res.status(201).json({ message: "Usuario registrado", user });
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }

  // Login de usuario
  async login(req: Request, res: Response) {
    try {
      const authDto: AuthLoginDto = req.body;
      const result = await authService.login(authDto);
      res.status(200).json({ message: "Login exitoso", ...result });
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }
}

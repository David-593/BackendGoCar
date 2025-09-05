import { Request, Response } from "express";
import { AdminService } from "service/serviceAdmin/AdminService";

const adminService = new AdminService();
export class AdminController {
    // Registro de usuario
    async register(req: Request, res: Response) {
        try {
          const { cedula, nombres, apellidos, email, password, rol, telefono, redSocial } = req.body;
    
          const user = await adminService.register({
            cedula,
            nombres,
            apellidos,
            email,
            password,
            rol,
            telefono,
            redSocial,
          });
    
          res.status(201).json({ message: "Usuario registrado", user });
        } catch (error: any) {
          res.status(400).json({ message: error.message });
        }
      }
}
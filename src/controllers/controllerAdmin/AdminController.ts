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

    async findUserByCedula(req: Request, res: Response) {
        try {
            const { cedula } = req.body;
            if (typeof cedula !== 'string') {
                return res.status(400).json({ message: "Cédula inválida" });
            }
            const user = await adminService.findUserByCedula(cedula);
            if (!user) {
                return res.status(404).json({ message: "Usuario no encontrado" });
            }
            res.status(200).json(user);
        } catch (error: any) {
            res.status(500).json({ message: error.message });
        }
    }

    async deleteUser(req: Request, res: Response) {
        try {
            const { cedula } = req.body;
            if (typeof cedula !== 'string') {
                return res.status(400).json({ message: "Cédula inválida" });
            }
            const result = await adminService.deleteUser(cedula);
            if (!result) {
                return res.status(404).json({ message: "Usuario no encontrado" });
            }
            res.status(200).json({ message: "Usuario eliminado" });
        } catch (error: any) {
            res.status(500).json({ message: error.message });
        }
    }
}
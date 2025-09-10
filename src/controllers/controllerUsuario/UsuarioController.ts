import { Request, Response } from "express";
import { UsuarioService } from "../../service/serviceUsuario/UsuarioService";
import { CreateUserDto } from "dto/dtoUsuario/UsuarioDto";

const userService = new UsuarioService();

export class UsuarioController {
  updateUserByCedula = async (req: Request, res: Response) => {
    try {
      const cedula = (req as any).cedula; 
      const data: Partial<CreateUserDto> = req.body; 

      const user = await userService.updateUserByCedula(cedula, data);

      return res.json(user);
    } catch (error: any) {
      return res.status(400).json({ message: error.message });
    }
  }
}


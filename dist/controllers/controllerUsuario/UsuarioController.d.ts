import { Request, Response } from "express";
export declare class UsuarioController {
    updateUserByCedula: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
}

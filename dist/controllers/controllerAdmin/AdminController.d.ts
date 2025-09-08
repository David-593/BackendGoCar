import { Request, Response } from "express";
export declare class AdminController {
    register(req: Request, res: Response): Promise<void>;
    findUserByCedula(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    deleteUser(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
}

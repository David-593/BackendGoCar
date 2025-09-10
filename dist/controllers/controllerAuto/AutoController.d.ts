import { Request, Response } from 'express';
export declare class AutoController {
    addAuto(req: Request, res: Response): Promise<void>;
    findAutosByUsuario(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    marcarAutoComoVendido(req: Request, res: Response): Promise<void>;
    findAutosDisponibles(req: Request, res: Response): Promise<void>;
}

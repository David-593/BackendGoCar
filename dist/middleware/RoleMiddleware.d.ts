import { NextFunction, Request, Response } from "express";
export declare function authorizeRoles(...roles: string[]): (req: Request, res: Response, next: NextFunction) => void;

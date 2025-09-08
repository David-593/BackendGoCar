import { NextFunction, Request, Response } from "express";

export function authorizeRoles(...roles: string[]) {
  return (req: Request, res: Response, next: NextFunction): void => {
    const userRole = (req as any).user?.rol || (req as any).rol;
    if (!userRole || !roles.includes(userRole)) {
      res.status(403).json({ message: "Acceso denegado. Rol insuficiente" });
      return;
    }
    next();
  };
}
import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

interface JwtPayload {
  cedula: string;
  email: string;
}

export const authMiddleware = (req: Request, res: Response, next: NextFunction): void => {
  try {
    const authHeader = req.headers["authorization"];

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      res.status(401).json({ message: "Acceso denegado. Token requerido" });
      return;
    }

    const token = authHeader.split(" ")[1]; 
    const secret = process.env.JWT_SECRET;
    if (!secret) {
      throw new Error("JWT_SECRET no está configurado en .env");
    }

  const decoded = jwt.verify(token, secret) as any;
  (req as any).cedula = decoded.cedula;
  (req as any).rol = decoded.rol;
  (req as any).user = decoded;

  next();
  } catch (error) {
  res.status(401).json({ message: "Token inválido o expirado" });
  return;
  }
};

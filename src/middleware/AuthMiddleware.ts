import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

interface JwtPayload {
  cedula: string;
  email: string;
}

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  try {
    const authHeader = req.headers["authorization"];

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "Acceso denegado. Token requerido" });
    }

    const token = authHeader.split(" ")[1]; 
    const secret = process.env.JWT_SECRET;
    if (!secret) {
      throw new Error("JWT_SECRET no está configurado en .env");
    }

    const decoded = jwt.verify(token, secret) as JwtPayload;
    (req as any).user = decoded;

    next(); 
  } catch (error) {
    return res.status(401).json({ message: "Token inválido o expirado" });
  }
};

import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { InfoToken } from "../app/login/model/InfoToken";

export const verificarToken = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const token = req.cookies?.Authorization || req.headers["Authorization"];
  if (!token) {
    res.status(401).json({ message: "Token no proporcionado" });
    return;
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || "clave") as InfoToken;
    req.user = decoded;
    next();
  } catch (error) {
    console.error("Token inválido:", error);
    res.status(401).json({ message: "Token inválido o expirado" });
  }
};

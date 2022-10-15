import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const ensureauthToken = (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.headers.authorization?.split(" ")[1]

        if (!token) {
            return res.status(401).json({ message: "Missing Authorization Token." })
        }

        jwt.verify(token as string, String(process.env.JWT_SECRET) as string, (err: any, decoded: any) => {
            req.user = {
                isAdm: decoded.isAdm,
                isActive: decoded.isActive,
                id: decoded.id
            }
            return next()
        })
    } catch (error) {
        return res.status(401).json({ message: "Invalid Token" })
    }
}

export default ensureauthToken
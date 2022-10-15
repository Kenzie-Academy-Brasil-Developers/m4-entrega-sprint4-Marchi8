import { Request, Response, NextFunction } from "express";

const ensureIsAdm = async (req: Request, res: Response, next: NextFunction) => {
    if (!req.user.isAdm) {
        return res.status(403).json({
            message: "User is not admin"
        })
    }
    return next()
}

export default ensureIsAdm
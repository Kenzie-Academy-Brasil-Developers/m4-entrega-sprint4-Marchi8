import { Request, Response, NextFunction } from "express";

const ensureUpdate = async (req: Request, res: Response, next: NextFunction) => {
    const requestBody = Object.keys(req.body)

    if (requestBody.includes("isAdm")
        || requestBody.includes("isActive")
        || requestBody.includes("id")) {

        return res.status(401).json({
            message: "Can`t update those fields"
        })
    }

    return next()
}

export default ensureUpdate
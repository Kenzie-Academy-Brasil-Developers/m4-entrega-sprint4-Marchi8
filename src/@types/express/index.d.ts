import * as express from "express"

declare global {
    namespace Express {
        interface Request {
            user: {
                isActive: boolean
                id: string
                isAdm: boolean
            }
        }
    }
}
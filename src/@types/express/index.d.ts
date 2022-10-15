import * as express from "express"

declare global {
    namespace Express {
        interface Request {
            user: {
                isActive: any
                id: string
                isAdm: boolean
            }
        }
    }
}
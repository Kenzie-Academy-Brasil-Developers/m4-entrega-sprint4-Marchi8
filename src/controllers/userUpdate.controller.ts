import { Request, Response } from "express";
import updateUserService from "../services/userUpdate.service";

const updateUserController = async (req: Request, res: Response) => {
    try {
        const update = req.body
        const { id } = req.params

        const user = await updateUserService(update, id)

        return res.status(user[1] as number).json({
            message: user[0]
        })
    } catch (error) {
        if (error instanceof Error) {
            return res.status(404).json({
                error: error.name,
                message: error.message,
            })
        }
    }
}

export default updateUserController
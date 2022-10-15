import { Request, Response } from "express";
import deleteUserService from "../services/deleteUser.service";

const deleteUserController = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const user = await deleteUserService(id)

        return res.status(204).send(user)
    } catch (error) {
        if (error instanceof Error) {
            return res.status(400).send({
                error: error.name,
                message: error.message
            })
        }
    }
}

export default deleteUserController
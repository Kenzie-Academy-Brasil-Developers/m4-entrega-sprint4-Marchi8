import { IUserLogin } from "../interfaces/users";
import AppDataSource from "../data-source";
import { User } from "../entities/user.entity";
import { compare } from "bcrypt"
import jwt from "jsonwebtoken";
import "dotenv/config";

const userLoginService = async ({ email, password }: IUserLogin): Promise<String> => {
    const userRepository = AppDataSource.getRepository(User)
    const users = await userRepository.findOneBy({ email: email })

    if (!users) {
        throw new Error("Invalid user or password")
    }
    const passwordMatch = await compare(password, users.password)

    if (!passwordMatch) {
        throw new Error("Invalid user or password")
    }

    const token = jwt.sign({ isAdm: users.isAdm }, String(process.env.JWT_SECRET) as string, {
        expiresIn: "1d"
    })

    return token
}

export default userLoginService
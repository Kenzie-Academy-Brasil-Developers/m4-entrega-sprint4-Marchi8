import AppDataSource from "../data-source";
import { User } from "../entities/user.entity";

const deleteUserService = async (id: string) => { 
    const userRepository = AppDataSource.getRepository(User)
    const users = await userRepository.findOneBy({ id: id })

    if (!users?.isActive) {
        throw new Error("User not found")
    }

    await userRepository.update(id, { isActive: false })

    return true
}

export default deleteUserService


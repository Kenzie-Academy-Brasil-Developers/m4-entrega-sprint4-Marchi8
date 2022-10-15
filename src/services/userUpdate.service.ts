import AppDataSource from "../data-source";
import { User } from "../entities/user.entity";

const updateUserService = async (update: Partial<User>, id: string): Promise<Array<object | number>> => {
    const userRepository = AppDataSource.getRepository(User)
    const user = await userRepository.findOneBy({ id: id })

    await userRepository.update(user!.id, {
        ...update,
        updatedAt: new Date(),
    })

    return [{ message: "User updated" }, 200]
}

export default updateUserService
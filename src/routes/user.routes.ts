import { Router } from "express";
import createUserController from "../controllers/createUser.controller";
import deleteUserController from "../controllers/deleteUser.controller";
import listUsersController from "../controllers/listUsers.controller";
import updateUserController from "../controllers/userUpdate.controller";
import ensureAuthToken from "../middlewares/ensureAuthToken.middleware";
import ensureIsActive from "../middlewares/ensureIsActive.middleware";
import ensureIsAdm from "../middlewares/ensureIsAdm.middleawre";
import ensureUpdate from "../middlewares/ensureUpdate.middleware";

const routes = Router()

routes.post("", createUserController)
routes.get("", ensureAuthToken, ensureIsAdm, listUsersController)
routes.delete("/:id", ensureAuthToken, ensureIsAdm, ensureIsActive, deleteUserController)
routes.patch("/:id", ensureAuthToken, ensureIsActive, ensureUpdate, updateUserController)

export default routes
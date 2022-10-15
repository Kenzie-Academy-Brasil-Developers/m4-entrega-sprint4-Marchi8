import { Router } from "express";
import userLoginController from "../controllers/userLogin.controller";

const routes = Router()

routes.post("", userLoginController)

export default routes

import "reflect-metadata"
import express from "express"
import userRoutes from "./routes/user.routes"
import logRoutes from "./routes/log.routes"

const app = express()
app.use(express.json())

app.use("/users", userRoutes)
app.use("/login", logRoutes)

export default app
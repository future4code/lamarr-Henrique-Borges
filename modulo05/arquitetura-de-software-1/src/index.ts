import { app } from "./app";
import { UserController } from "./controller/UserController";

const userController = new UserController()

app.get("/allUsers", userController.getAllUsers)
app.post("/createUser", userController.registerUser)
app.delete("/users/:id", userController.deleteUser)

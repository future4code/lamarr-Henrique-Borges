import express from 'express'
import { UserController } from '../controller/UserController'

export const userRouter = express.Router()

const userController = new UserController()

userRouter.get("/getAll", userController.getAllUsers)
userRouter.post("/create", userController.create)

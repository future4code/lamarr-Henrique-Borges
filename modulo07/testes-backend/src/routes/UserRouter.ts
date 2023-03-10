import express from "express";
import { UserController } from './../controller/UserController';
import { UserBusiness } from '../business/UserBusiness';
import { UserDatabase } from '../data/UserDatabase';

export const userRouter = express.Router()

const userDatabase = new UserDatabase()
const userBusiness = new UserBusiness(userDatabase)
const userController = new UserController(userBusiness)

userRouter.get("/profile/:id", (req, res)=> userController.profile(req, res))

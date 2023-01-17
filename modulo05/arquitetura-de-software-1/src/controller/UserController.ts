import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";

export class UserController {
    registerUser = async (req:Request, res:Response): Promise<void> => {
        let errorCode = 400

        try {
            const input: any = {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            }

            const userBusiness = new UserBusiness()
            await userBusiness.registerUser(input)

            res.status(201).send("Novo usuário cadastrado com sucesso!")

        } catch (err: any) {
            res.status(errorCode).send(err.message);
        }
    }
}

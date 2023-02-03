import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { UserInputDTO } from "../model/User";

export class UserController {
    signup = async ( req: Request, res: Response ) => {
        try {
            const { email, password } = req.body;

            const input: UserInputDTO = {
                email,
                password
            }

            const userBusiness = new UserBusiness()
            const token = await userBusiness.signup(input)

            res.status(201).send({ message: "Usuário cadastrado com sucesso!", token })
            
        } catch (err: any) {
            res.status(err.statusCode || 400).send(err.message || err.sqlMessage)
        }
    }

    login = async ( req: Request, res: Response ) => {
        try {
            const { email, password } = req.body;

            const input: UserInputDTO = {
                email,
                password
            }

            const userBusiness = new UserBusiness()
            const token = await userBusiness.login(input)

            res.status(201).send({ message: "Login feito com sucesso!", token })
            
        } catch (err: any) {
            res.status(err.statusCode || 400).send(err.message || err.sqlMessage)
        }
    }

    profile = async ( req: Request, res: Response ) => {
        try {
            const token = req.headers.authorization as string

            const userBusiness = new UserBusiness()
            const user = await userBusiness.profile(token) 
            console.log(user);
            

            res.status(200).send(user)
            
        } catch (err: any) {
            res.status(err.statusCode || 400).send(err.message || err.sqlMessage)
        }
    }
}

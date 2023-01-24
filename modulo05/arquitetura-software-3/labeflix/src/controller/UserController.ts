import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { UserInputDTO } from "../models/UserDTO";

export class UserController {
  async create(req: Request, res: Response):Promise<void> {
    try {
      const input: UserInputDTO = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      }

      const userBusiness = new UserBusiness();
      await userBusiness.create(input);

      res.status(201).send({ message: "Usuário cadastrado com sucesso" });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  }


    getAllUsers = async (req:Request, res:Response): Promise<void> => {
        let errorCode = 400

        try {
            const userBusiness = new UserBusiness()
            const users = await userBusiness.getAllUsers()
            res.status(200).send(users)

        } catch (err: any) {
            res.status(errorCode).send(err.message);
        }
    }
}

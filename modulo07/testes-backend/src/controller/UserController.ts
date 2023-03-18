import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";

export class UserController {
    constructor(private userBusiness: UserBusiness){}

    public profile = async ( req: Request, res: Response ): Promise<void> => {
        try {
            const id = req.params.id as string

            const user = await this.userBusiness.profile(id)
            res.status(200).send(user)

        } catch (err: any) {
            res.status(err.statusCode || 400).send(err.message || err.sqlMessage)
        }
    }
}

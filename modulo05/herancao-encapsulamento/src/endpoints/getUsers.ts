import { Request, Response } from "express"
import connection from "../database/connection"
import { TABLE_USERS } from "../database/tableNames"
import { UserDatabase } from "../database/UserDatabase"

export const getUsers = async (req: Request, res: Response) => {
    
    let errorCode = 400
    try {
        const users = new UserDatabase()
        res.status(200).send(users.getAllUsers())
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}
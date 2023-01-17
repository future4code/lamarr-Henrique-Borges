import { BaseDatabase } from "./BaseDatabase";
import { User } from "../models/User";

export class UserDatabase extends BaseDatabase {
    registerUser = async (user:User): Promise<void> => {
        let errorCode = 400

        try {
            const result = await UserDatabase.connection.raw(`
                SELECT email FROM User_Arq
                WHERE email LIKE "%${user.email.trim()}"
            `)

            const registeredEmail = result[0]
        
            if (registeredEmail.length > 0) {
                errorCode = 409
                throw new Error("Já existe um usuário cadastrado com o email informado!")
            }

            await UserDatabase.connection.raw(`
                INSERT INTO User_Arq (id, name, email, password)
                VALUES(
                    "${user.id}", 
                    "${user.name}", 
                    "${user.email.trim()}", 
                    "${user.password}" 
                );
            `)
        } catch (err: any) {
            throw new Error(err.message)
        }
    }
}

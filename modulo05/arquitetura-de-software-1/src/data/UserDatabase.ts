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

    getAllUsers = async (): Promise<User[]> => {
        let errorCode = 400

        try {
            const result = await UserDatabase.connection.raw(`
                SELECT * FROM User_Arq;
            `)

            const allUsers = result[0]
        
            if (allUsers.length <1) {
                errorCode = 500
                throw new Error("Erro inesperado no servidor. Requisição indisponível no momento!")
            }

            return allUsers

        } catch (err: any) {
            throw new Error(err.message)
        }
    }

    deleteUser = async (id:string): Promise<void> => {
        let errorCode = 400

        try {
            const result = await UserDatabase.connection.raw(`
                SELECT id FROM User_Arq
                WHERE id LIKE "%${id}"
            `)

            const registeredUser = result[0]
        
            if (registeredUser.length <1) {
                errorCode = 500
                throw new Error("Usuário não encontrado no banco de dados, por favor adicione um id de Usuário válido.")
            }

            await UserDatabase.connection.raw(`
                DELETE FROM User_Arq
                WHERE id LIKE "%${id}"
            `)

        } catch (err: any) {
            throw new Error(err.message)
        }
    }
}

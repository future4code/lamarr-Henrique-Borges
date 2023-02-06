import { BaseDatabase } from "./BaseDatabase";
import { User } from "../models/User";

export class UserDatabase extends BaseDatabase {
    private static TABLE_NAME = "LABEFLIX_USER";

    async create({ id, name, email, password }: User): Promise<void> {
        await UserDatabase.connection
        .insert({
            id,
            name,
            email,
            password,
        })
        .into(UserDatabase.TABLE_NAME);
    }

    getAllUsers = async (): Promise<User[]> => {
        let errorCode = 400

        try {
            const result = await UserDatabase.connection.raw(`
                SELECT * FROM LABEFLIX_USER;
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
}

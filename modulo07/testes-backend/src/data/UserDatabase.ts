import { BaseDatabase } from "./BaseDatabase";
import { CustomError } from "../error/CustomError";
import { User } from "../model/User";
import { UserRepository } from "../business/UserRepository";

export class UserDatabase extends BaseDatabase implements UserRepository {
    
    private toModel(dbModel?: any): User | undefined {
        return (
            dbModel &&
            new User(
                dbModel.id,
                dbModel.name,
                dbModel.email,
                dbModel.password,
                dbModel.role
            )
        )
    }

    public getUserById = async ( id: string ): Promise<User | undefined> => {
        try {

            const result = await UserDatabase.connection.raw(`
                SELECT * FROM User_Arq_Test
                WHERE id LIKE "%${id}";
            `)

            return this.toModel(result[0][0])
            
        } catch (err: any) {
            throw new CustomError(err.statusCode, err.message)
        }
    }
}

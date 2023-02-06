import { User } from "../model/User";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
    signup = async ( user: User): Promise<void> => {
        try {

            await UserDatabase.connection.raw(`
                INSERT INTO authenticated_users (id, email, password)
                VALUES(
                    "${user.id}", 
                    "${user.email.trim()}", 
                    "${user.password}" 
                );
            `)
            
        } catch (err: any) {
            throw new err   
        }
    }

    getUserByEmail = async (email:string):Promise<User>=> {
        try {
            const result = await UserDatabase.connection.raw(`
                SELECT * FROM authenticated_users
                WHERE email LIKE "%${email}";
            `)

            return result[0][0]

        } catch (err: any) {
            throw new Error(err.message)
        }
    }

    getUserById = async (id:string):Promise<User>=> {
        try {
            const result = await UserDatabase.connection.raw(`
                SELECT * FROM authenticated_users
                WHERE id LIKE "%${id}";
            `)

            return result[0][0]

        } catch (err: any) {
            throw new Error(err.message)
        }
    }
}

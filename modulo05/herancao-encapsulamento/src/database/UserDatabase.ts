import { BaseDatabase } from "./BaseDatabase"

export class UserDatabase extends BaseDatabase {
    public static TABLE_USERS = "Labe_Users"
    
    public async getAllUsers() {
        const result = await BaseDatabase.connection.raw(`
            SELECT * FROM ${UserDatabase.TABLE_USERS}; 
        `)
        const allUsers = result[0]
        return allUsers
    }

}

//  e getUserById.
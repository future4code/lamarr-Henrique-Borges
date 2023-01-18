import { UserDatabase } from "../data/UserDatabase";
import { User } from "../models/User";

export class UserBusiness {
    registerUser = async (input:any): Promise<void> => {
        let errorCode = 400

        try {
            const id: string = Date.now().toString()
            const { name, email, password } = input

            if (!name) {
                errorCode = 422
                throw new Error(
                    `Por favor, insira todos os parâmetros corretamente. 
                    Parâmetro 'name' não foi informado ou está incorreto!`
                )
            }

            if (!email) {
                errorCode = 422
                throw new Error(
                    `Por favor, insira todos os parâmetros corretamente. 
                    Parâmetro 'email' não foi informado ou está incorreto!`
                )
            }

            if (!password) {
                errorCode = 422
                throw new Error(
                    `Por favor, insira todos os parâmetros corretamente. 
                    Parâmetro 'password' não foi informado ou está incorreto!`
                )
            }

            if (typeof name !== "string") {
                errorCode = 422
                throw new Error("O valor do parâmetro 'name' deve ser do tipo string!")
            }

            if (typeof email !== "string") {
                errorCode = 422
                throw new Error("O valor do parâmetro 'email' deve ser do tipo string!")
            }

            if (typeof password !== "string") {
                errorCode = 422
                throw new Error("O valor do parâmetro 'password' deve ser do tipo string!")
            }

            if (password.includes(" ") === true) {
                errorCode = 422
                throw new Error("O valor do parâmetro 'password' não pode conter espaços!")
            }

            if (password.length < 8) {
                errorCode = 422
                throw new Error("O valor do parâmetro 'password' deve ter 8 caracteres ou mais!")
            }

            const userDatabase = new UserDatabase()
            await userDatabase.registerUser({
                id,
                name,
                email,
                password,
            })

        } catch (err:any) {
            throw new Error(err.message)
        }
    }

    getAllUsers = async (): Promise<User[]> => {
        try {
            const userDatabase = new UserDatabase()
            return await userDatabase.getAllUsers()
        } catch (err:any) {
            throw new Error(err.message)
        }
    }

    deleteUser = async (id:string): Promise<void> => {
        let errorCode = 400

        try {

            if (!id) {
                errorCode = 422
                throw new Error(
                    "Por favor, insira o id do Usuário que deseja deletar do banco de dados."
                )
            }
            const userDatabase = new UserDatabase()
            await userDatabase.deleteUser(id)

        } catch (err:any) {
            throw new Error(err.message)
        }
    }
}

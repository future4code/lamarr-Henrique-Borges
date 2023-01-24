import { UserDatabase } from "../data/UserDatabase"
import { v4 as generateId } from 'uuid'
import { User } from "../models/User";
import { UserInputDTO } from "../models/UserDTO";
import { InvalidDatas } from "../error/Usererrors";

export class UserBusiness {
  async create({ email, name, password }: UserInputDTO):Promise<void> {
    if (!email || !name || !password) {
      throw new InvalidDatas()
    }

    const id = generateId()

    const userDatabase = new UserDatabase()
    await userDatabase.create({
      id,
      name,
      email,
      password
    })
  }

    getAllUsers = async (): Promise<User[]> => {
        try {
            const userDatabase = new UserDatabase()
            return await userDatabase.getAllUsers()
        } catch (err:any) {
            throw new Error(err.message)
        }
    }
}

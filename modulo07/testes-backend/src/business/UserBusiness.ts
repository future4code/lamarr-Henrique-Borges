import { CustomError } from "../error/CustomError";
import { UserRepository } from "./UserRepository";

export class UserBusiness {
    constructor(
        private userDatabase: UserRepository
    ) {}

    public profile = async ( id: string ) => {
        try {

            if (!id) {
                throw new CustomError(422, "Missing input");
            }

            const userOutput = await this.userDatabase.getUserById(id)

            if (!userOutput) {
                throw new CustomError(401, "Usuário não encontrado.");
            }

            const user = {
                id: userOutput.getId(), 
                name: userOutput.getName(), 
                email: userOutput.getEmail(),
                role: userOutput.getRole()
            }

            return user 

        } catch (error: any) {
            throw new CustomError(error.statusCode, error.message)
        }
    }
}

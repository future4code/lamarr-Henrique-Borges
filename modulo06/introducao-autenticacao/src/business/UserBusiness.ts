import { UserDatabase } from "../data/UserDatabase";
import { CustomError } from "../error/CustomError";
import { User, UserInputDTO } from "../model/User";
import { generateId } from "../services/idGenerator";
import {NotBody, InvalidEmail, InvalidPassword, UserNotFound} from "../error/UserErrors";
import { Authenticator } from "../services/Authenticator";

export class UserBusiness {
    signup = async ( input: UserInputDTO ) => {
        try {
            const id: string = generateId()
            const { email, password } = input
            
            if ( !email && !password ) {
               throw new NotBody() 
            }

            if(!email.includes("@")) {
                throw new InvalidEmail()
            }

            if(password.length < 8) {
                throw new InvalidPassword()
            }
    
            const user: User = {
                id,
                email,
                password
            }

            const userDatabase = new UserDatabase()
            await userDatabase.signup(user)

            const authenticator = new Authenticator()
            const token =  authenticator.generateToken({id})

            return token
  
        } catch (error: any) {
            throw new CustomError(error.statusCode, error.message)
        }
    }

    login = async ( input: UserInputDTO ) => {
        try {
            const { email, password } = input
            
            if ( !email && !password ) {
               throw new NotBody() 
            }

            if(!email.includes("@")) {
                throw new InvalidEmail()
            }

            if(password.length < 8) {
                throw new InvalidPassword()
            }

            const userDatabase = new UserDatabase()
            const user = await userDatabase.getUserByEmail(email)

            if(!user) {
              throw new UserNotFound()
            }
      
            if(user.password !== password) {
              throw new InvalidPassword()
            }

            const authenticator = new Authenticator()
            const token =  authenticator.generateToken({id: user.id})

            return token

        } catch (error: any) {
            throw new CustomError(error.statusCode, error.message)
        }
    }

    profile = async ( token: string ) => {
        try {
            const authenticator = new Authenticator()
            const  { id } = authenticator.getTokenData(token)
            
            const userDatabase = new UserDatabase();
            const user = await userDatabase.getUserById(id)
            return user

        } catch (error: any) {
            throw new CustomError(error.statusCode, error.message)
        }
    }
}

import * as jwt from "jsonwebtoken"
import { Unauthorized } from "../error/UserErrors"
import { AuthenticationData } from "../model/AuthenticationData"

export class Authenticator {
    public generateToken = ({id}: AuthenticationData): string => {
        const token = jwt.sign(
            { id },
            process.env.JWT_KEY as string,
            { expiresIn: "1min" }
        )
        return token
    }

    getTokenData = (token: string): AuthenticationData=> {
        try {
            const payload = jwt.verify(token, process.env.JWT_KEY as string) as AuthenticationData
            return payload

        } catch (error:any) {
            console.log(error.message)
            throw new Unauthorized()
        }
    }
}

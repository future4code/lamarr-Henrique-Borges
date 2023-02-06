import { CustomError } from "./CustomError";

export class NotBody extends CustomError {
    constructor(){
        super(
            422, 
            `Por favor, insira todos os parâmetros corretamente. 
            Parâmetros 'email' e 'password' não foram informados ou estão incorretos!`
        )
    }
}

export class InvalidEmail extends CustomError {
    constructor(){
        super(422, "Email inválido, ex: emailexemplo@email.com")
    }
}

export class InvalidPassword extends CustomError {
    constructor(){
        super(422, "Senha inválida!")
    }
}

export class UserNotFound extends CustomError{ 
    constructor(){
        super(404, "Usuário não encontrado")
    }
}

export class Unauthorized extends CustomError{ 
    constructor(){
        super(401, "Usuário não autorizado")
    }
}
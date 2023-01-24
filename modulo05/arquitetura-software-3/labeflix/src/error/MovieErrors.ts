import { CustomError } from "./CustomError";

export class InvalidDatas extends CustomError {
    constructor(){
        super(400, "Dados inválidos (title, description, durationInMinutes, yearOfRelease)")
    }
}
import { Request, Response } from "express";
import { infoEndereco } from "../services/infoEnderecos";
import { connection } from "../data/connection";

export const cadastrarEndereco = async ( req: Request, res: Response): Promise<void> => {
    let errorCode = 400
    
    try {
        const { cep, numero, complemento } = req.body

        if (!cep || !numero || !complemento) {
            errorCode = 422
            throw new Error("'cep', 'numero' e 'complemento' são obrigatórios.")
        }

        const endereco = await infoEndereco(cep)

        await connection.raw(`
            INSERT INTO Endereco (CEP, Logradouro, Numero, Complemento, Bairro, Cidade, Estado)
            VALUES(
                "${cep}", 
                "${endereco.logradouro}", 
                "${numero}", 
                "${complemento}", 
                "${endereco.bairro}", 
                "${endereco.localidade}", 
                "${endereco.uf}"
            );
        `)

        res.status(201).send("Usuário criado!")

    } catch (err: any) {
        res.status(errorCode).send(err.message)
    }
}
import express, { Request, Response } from "express"
import cors from "cors"
import { connection } from "./dataBase/connection"

const app = express()

app.use( express.json() )
app.use( cors() )

// Função que busca um ator pelo nome:
const buscarAtor = async (nome: string): Promise<any> => {
    const resultado = await connection.raw(`
      SELECT * FROM Actor WHERE nome = "${nome}"
    `)
    console.table(resultado[0])
}

buscarAtor("Carol Burnett")

// Função que retorna a quantidade de atores pelo gênero:
const contarAtores = async (gender: string): Promise<any> => {
    const resultado = await connection.raw(`
      SELECT COUNT(*) as Quantidade, gender FROM Actor WHERE gender = "${gender}"
    `);
    console.table(resultado[0])    
};

contarAtores("female")
contarAtores("male")

// Função que atualiza o salário de um ator específico através do id:
const atualizarSalarioAtor = async (id: string, salary: number): Promise<any> => {
    await connection("Actor").update(
        {salary: salary}
    ).where(
        {id: id}
    )
    console.log("Salário atualizado com sucesso!");
}

atualizarSalarioAtor("005", 10000)

// Função que deleta um ator específico através do id.
// const deletarAtor = async (id: string): Promise<void> => {
//     await connection("Actor").delete().where( {id: id} );
//     console.log("Usuário deletado com sucesso");
// }; 

// deletarAtor("001")

// Função que retorna a média dos salários dos atores por gênero:
const mediaSalario = async (gender: string): Promise<any> => {
    const resultado = await connection("Actor").avg(
        `salary as Media salarial: ${gender}`
    ).where(
        {gender: gender} 
    )
    console.table( resultado[0])
}

mediaSalario("female")
mediaSalario("male")


// Endpoint que pega um ator específico pelo id:
app.get("/ator/:id", async (req: Request, res: Response):Promise<void> => {
    let errorCode = 400

    try {
        const id = req.params.id

        const ator = await connection.raw(`
            SELECT * FROM Actor WHERE id = "${id}"
        `)

        if (ator[0].length <=0){
            errorCode = 422
            throw new Error("Ator não encontrado.");
        }

        res.status(200).send(ator[0][0])

    } catch (err: any) {
        res.status(errorCode).send(err.message)
    }
})

// Endpoint que pega a quantidade de atores/atrizes por gênero:
app.get("/ator", async (req: Request, res: Response):Promise<void> => {
    let errorCode = 400

    try {
        const genero = req.query.gender as string

        const qtdAtores = await connection.raw(`
            SELECT COUNT(*) as Quantidade, gender FROM Actor WHERE gender = "${genero}"
        `)

        if (qtdAtores[0][0].gender === null){
            errorCode = 422
            throw new Error("Parâmetro inválido. escolha entre female/male");
        }

        res.status(200).send(qtdAtores[0][0])

    } catch (err: any) {
        res.status(errorCode).send(err.message)
    }
})

// endpoint para criar um novo ator.
app.post("/ator", async(req :Request, res:Response):Promise<void> => {

    let errorCode = 400
   
    try{
        const {id, nome, salary, birth_date, gender } = req.body

        if (!id || !nome || !salary || !birth_date || !gender){
            errorCode = 422
            throw new Error("dataProductNotFound");
        }

        await connection.raw(`
            INSERT INTO Actor (id, nome, salary, birth_date, gender)
            VALUES (
                "${ id }", 
                "${ nome }", 
                ${ salary }, 
                "${ birth_date }", 
                "${ gender }"
            )
        `)

        res.status(201).send("novo Ator/Atriz adicionado(a) com sucesso!")
    }catch(err:any){
        res.status(errorCode).send(err.message)
    }
})

// Endpoint para atualizar salário com id
app.put("/ator", async(req :Request, res:Response):Promise<void> => {

    let errorCode = 400
   
    try{
        const {id, salary } = req.body

        if (!id || !salary){
            errorCode = 422
            throw new Error("dataProductNotFound");
        }

        await connection.raw(
            `UPDATE Actor
            SET salary = ${salary} 
            WHERE id=${id}
            `
        )

        res.status(201).send("Salário alerado com sucesso!")
    }catch(err:any){
        res.status(errorCode).send(err.message)
    }
})

// endpoint para apagar um ator:
app.delete("/ator/:id", async (req: Request, res: Response):Promise<void> => {

    let errorCode = 400

    try {
        const id = req.params.id

        if (!id){
            errorCode = 422
            throw new Error("id inválido");
        }

        await connection.raw(`
        SET foreign_key_checks = 0;
        DELETE FROM Actor WHERE id = ${id}
        `)
        res.status(200).send("ator deletado com sucesso!")

    } catch (err:any) {
        res.status(errorCode).send(err.message)
    }
  });

app.listen(3003, () => {
    console.log("Servidor rodando na porta http://localhost:3003")
})
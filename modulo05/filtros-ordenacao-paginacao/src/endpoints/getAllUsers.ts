import { Request, Response } from "express"
import { connection } from "../data/connection"


export const getAllUsers = async (req: Request, res: Response): Promise<void> => {
   let errorCode = 400
   
   try {
      let nome = req.query.nome as string
      let tipo = req.query.tipo as string
      let ordenarPor = req.query.ordenarPor as string
      let deForma = req.query.deForma as string
      let qtdItens = Number(req.query.qtdItens)
      let pagina = Number(req.query.pagina)

      if (!nome) {
         nome = "%"
      }

      if (!tipo) {
         tipo = "%"
      }

      if (!deForma) {
         deForma = "ASC"
      }

      if (!ordenarPor) {
         ordenarPor = "email"
      }

      if (!qtdItens) {
         qtdItens = 5
      }

      if (!pagina) {
         pagina = 1
      }

      if (ordenarPor === "nome") {
         ordenarPor = "nome"
      }

      if (ordenarPor === "tipo") {
         ordenarPor = "tipo"
      }

      if (ordenarPor !== "nome" && ordenarPor !== "tipo" && ordenarPor !== "email") {
         ordenarPor = "email"
      }

      if (deForma && deForma.toUpperCase() !== "ASC" && deForma.toUpperCase() !== "DESC") {
         deForma = "ASC"
      }

      if ( typeof qtdItens !== "number" || qtdItens < 1) {
         qtdItens = 5
      }

      if (typeof pagina !== "number" || pagina < 1) {
         pagina = 1
      }

      let offset = qtdItens * (pagina - 1)

      const resultado = await connection.raw(`
         SELECT * FROM Usuarios WHERE nome LIKE "%${nome}" AND tipo LIKE "%${tipo}"
         ORDER BY ${ordenarPor} ${deForma}
         LIMIT ${qtdItens} 
         OFFSET ${offset}
      `)

      if (resultado[0].length < 1) {
         errorCode = 404
         throw new Error("Nenhum usuário encontrado")
      }

      res.status(200).send(resultado[0]) 
   } catch (err: any) {
      res.status(errorCode).send(err.message)
   }
}

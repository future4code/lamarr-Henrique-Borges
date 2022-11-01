import express, { Request, Response } from "express";
import cors from "cors"
import { afazeres } from "./data";

const app = express()
app.use(express.json())
app.use(cors())

app.get("/ping", (req: Request, res: Response) => {
  res.send("Pong")
})

app.get("/afazeresconcluidos", (req: Request, res: Response) => {
  const afazeresFiltrados = afazeres.filter((afazer) => {
    return afazer.completed === true
  })

  res.status(200).send(afazeresFiltrados)
})

app.get("/afazeresemandamento", (req: Request, res: Response) => {
  const afazeresFiltrados = afazeres.filter((afazer) => {
    return afazer.completed === false
  })

  res.status(200).send(afazeresFiltrados)
})

app.post("/afazeres/post", (req: Request, res: Response) => {
  const afazer = req.body
  afazeres.push(afazer)
  
  res.status(200).send(afazeres)
})

app.delete("/afazeres", (req: Request, res: Response) => {
  const id = Number(req.query.id)
  const afazeresFiltrados = afazeres.filter((afazer) => {
    return afazer.id !== id
  })

  res.status(200).send(afazeresFiltrados)
})

app.get("/afazeres", (req: Request, res: Response) => {
  const idUsuario = Number(req.query.idusuario)
  const afazeresFiltrados = afazeres.filter((afazer) => {
    return afazer.userId === idUsuario
  })

  res.status(200).send(afazeresFiltrados)
})

app.listen(3003, () => {
  console.log("servidor rodando na url http://localhost:3003");
})
import express, { Request, Response } from "express";
import cors from "cors"
import { posts, usuarios } from "./data";

const app = express()

app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {
  res.send("Bem vindo(a) a minha API de teste")
})

app.get("/usuarios", (req: Request, res: Response) => {
  res.status(200).send(usuarios)
})

app.get("/posts", (req: Request, res: Response) => {

  const idUsuario: number = Number(req.query.userid)

  const usuariofiltrado = posts.filter((post) => {
    return post.userId === idUsuario
  })

  res.status(200).send(usuariofiltrado)
})

app.get("/posts", (req: Request, res: Response) => {
  res.status(200).send(posts)
})

app.listen(3003, () => {
  console.log("servidor rodando na url http://localhost:3003");
})

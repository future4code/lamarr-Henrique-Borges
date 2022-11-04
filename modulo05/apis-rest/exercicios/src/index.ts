import express, { Request, Response } from "express"
import cors from "cors"
import { users } from "./data"

const app = express()

app.use(express.json())
app.use(cors())

app.get("/users", (req: Request, res: Response) => {
  let errorCode = 400

  try {
    const userType = req.query.type as string

    if (!userType) {
      errorCode = 422
      throw new Error("Falta passar parametro type");
    }

    if (userType.toUpperCase() !== "NORMAL" && userType.toUpperCase() !== "ADMIN") {
      errorCode = 422
      throw new Error("Insira um tipo de usuário válido, ADMIN ou NORMAL ");
    }

    const usersTypeFilters = users.filter((user) => {
      return user.type.toUpperCase() === userType.toUpperCase()
    })

    res.status(200).send(usersTypeFilters)

  } catch (error: any) {
    res.status(errorCode).send(error.message)
  }

})

app.get("/users", (req: Request, res: Response) => {
  res.status(200).send(users)
})

app.listen(3003, () => {
  console.log("servidor rodando na url http://localhost:3003");
})
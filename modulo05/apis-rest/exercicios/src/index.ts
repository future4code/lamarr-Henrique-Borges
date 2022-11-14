import express, { Request, Response } from "express"
import cors from "cors"
import { users } from "./data"

const app = express()

app.use(express.json())
app.use(cors())

// Exibir usuários por Tipo
app.get("/userstype", (req: Request, res: Response) => {
  let errorCode = 400

  try {
    const userType = req.query.type as string

    if (!userType) {
      errorCode = 422
      throw new Error("O parametro 'type' não foi informado");
    }

    if (userType.toUpperCase() !== "NORMAL" && userType.toUpperCase() !== "ADMIN") {
      errorCode = 422
      throw new Error("Insira um tipo de usuário válido, ADMIN ou NORMAL ");
    }

    const usersTypeFilters = users.filter((user) => {
      return user.type.toUpperCase() === userType.toUpperCase()
    })

    res.status(200).send(usersTypeFilters)

  } catch (err: any) {
    res.status(errorCode).send(err.message)
  }

})

// Exibir todos os usuários 
app.get("/users", (req: Request, res: Response) => {
  res.status(200).send(users)
})

// Exibir usuário por Nome
app.get("/users/:name", (req: Request, res: Response) => {
  let errorCode = 400

  try {
    const userName = req.params.name as string

    const userNameFilter = users.find((user) => {
      return user.name.toLowerCase() === userName.toLowerCase()
    })

    if (!userNameFilter) {
      errorCode = 400
      throw new Error("Usuário não encontrado");
    }

    res.status(200).send(userNameFilter)

  } catch (err: any) {
    res.status(errorCode).send(err.message)
  }

})

// Adicionar Usuário
app.post("/users", (req: Request, res: Response) => {
  let errorCode = 400

  try {
    const { name, email, type, age } = req.body

    if (!name) {
      errorCode = 422
      throw new Error("O nome do usuário não foi informado!");
    }

    if (!email) {
      errorCode = 422
      throw new Error("O email do usuario não foi informado!");
    }

    if (!type) {
      errorCode = 422
      throw new Error("O tipo do usuario não foi informado!");
    }

    if (!age) {
      errorCode = 422
      throw new Error("A idade do usuário não foi informada!");
    }

    if (typeof name !== "string") {
      errorCode = 422
      throw new Error("O nome do usuário deve ser do tipo string!");
    }

    if (typeof email !== "string") {
      errorCode = 422
      throw new Error("O email do usuário deve ser do tipo string!");
    }

    if (type.toUpperCase() !== "NORMAL" && type.toUpperCase() !== "ADMIN") {
      errorCode = 422
      throw new Error("Insira um tipo de usuário válido, ADMIN ou NORMAL ");
    }

    if (typeof age !== "number") {
      errorCode = 422
      throw new Error("A idade do usuário deve ser do tipo number!");
    }

    if (age <= 0) {
      errorCode = 422
      throw new Error("A idade do usuário deve ser maior que 0!");
    }

    users.push({
      id: Date.now(),
      name: name,
      email: email,
      type: type.toUpperCase(),
      age: age
    })

    res.status(201).send(users)

  } catch (err: any) {
    res.status(errorCode).send(err.message)
  }
})

// Adicionar novo item ao conjunto de usuários
app.put("/users/user", (req: Request, res: Response) => {
  let errorCode = 400

  try {
    const { escola } = req.body

    if (!escola) {
      errorCode = 422
      throw new Error("O o novo item do usuário não foi informado!");
    }

    if (typeof escola !== "string") {
      errorCode = 422
      throw new Error("O novo item do usuário deve ser do tipo string!");
    }

    const usersAtt = users.map((user) => {
      user.escola = escola
      return user
    })

    res.status(201).send(usersAtt)

  } catch (err: any) {
    res.status(errorCode).send(err.message)
  }
})

app.listen(3003, () => {
  console.log("servidor rodando na url http://localhost:3003");
})
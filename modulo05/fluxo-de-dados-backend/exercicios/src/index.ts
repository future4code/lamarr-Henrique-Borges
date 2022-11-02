import express, { Request, Response } from "express"
import cors from "cors"
import { produtos } from "./data"

const app = express()

app.use(express.json())
app.use(cors())

// Teste
app.get("/test", (req: Request, res: Response) => {
  res.status(200).send("Servidor rodando na porta 3003!")
})

// Excluir produto
app.delete("/produtos", (req: Request, res: Response) => {
  try {
    const id = req.query.id

    const productById = produtos.find((product) => {
      return product.id === id
    })

    if (!productById) {
      const erro = new Error("Produto não encontrado!");
      erro.name = "AuthotizationError";
      throw erro;
    }

    const produtosFiltrados = produtos.filter((produto) => {
      return produto.id !== id
    })

    res.status(200).send(produtosFiltrados)

  } catch (err: any) {
    if (err.name === "AuthotizationError") {
      res.status(401).send(err.message)
    } else {
      res.status(500).send(err.message);
    }
  }
})

// Adicionar Produto
app.post("/produtos/post", (req: Request, res: Response) => {
  try {
    const { name, price } = req.body

    if (!name) {
      const erro = new Error("O nome do produto não foi informado!");
      erro.name = "dataProductNotFound";
      throw erro;
    }

    if (!price) {
      const erro = new Error("O preço do produto não foi informado!");
      erro.name = "dataProductNotFound";
      throw erro;
    }

    if (typeof name !== "string") {
      const erro = new Error("O nome do produto deve ser do tipo string!");
      erro.name = "dataProductNotFound";
      throw erro;
    }

    if (typeof price !== "number") {
      const erro = new Error("O preço do produto deve ser do tipo number!");
      erro.name = "dataProductNotFound";
      throw erro;
    }

    if (price <= 0) {
      const erro = new Error("O preço do produto deve ser maior que 0!");
      erro.name = "dataProductNotFound";
      throw erro;
    }

    produtos.push({
      id: Date.now().toString(),
      name: name,
      price: price
    })

    res.status(201).send(produtos)

  } catch (err: any) {
    if (err.name === "dataProductNotFound") {
      res.status(422).send(err.message);
    } else {
      res.status(500).send(err.message);
    }
  }
})

// Atualizar preço do produto
app.put("/produtos", (req: Request, res: Response) => {
  try {
    const { newPrice, nameProduct } = req.body

    if (!newPrice) {
      const erro = new Error("O novo preço do produto não foi informado!");
      erro.name = "dataProductNotFound";
      throw erro;
    }

    if (typeof newPrice !== "number") {
      const erro = new Error("O preço do produto deve ser do tipo number!");
      erro.name = "dataProductNotFound";
      throw erro;
    }

    if (newPrice <= 0) {
      const erro = new Error("O preço do produto deve ser maior que 0!");
      erro.name = "dataProductNotFound";
      throw erro;
    }

    if (!nameProduct) {
      const erro = new Error("Nome do produto não informado!");
      erro.name = "dataProductNotFound";
      throw erro;
    }

    const productByName = produtos.find((product) => {
      return product.name === nameProduct
    })

    if (!productByName) {
      const erro = new Error("Produto não encontrado!");
      erro.name = "AuthotizationError";
      throw erro;
    }

    const produtosPrecoAtt = produtos.map((produto) => {
      if (produto.name === nameProduct) {
        produto.price = newPrice
      }

      return produto
    })

    res.status(201).send(produtosPrecoAtt)

  } catch (err: any) {
    if (err.name === "dataProductNotFound") {
      res.status(422).send(err.message);
    } else if (err.name === "AuthotizationError") {
      res.status(401).send(err.message)
    } else {
      res.status(500).send(err.message);
    }
  }
})

// Exibir todos os produtps
app.get("/produtos", (req: Request, res: Response) => {
  res.status(200).send(produtos)
})

app.listen(3003, () => {
  console.log("servidor rodando na url http://localhost:3003");
})
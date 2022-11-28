import express from "express"
import cors from "cors"
import { cadastrarEndereco } from "./endpoints/cadastrarEndereco"

const app = express()

app.use(express.json())
app.use(cors())

app.post("/enderecos/criar", cadastrarEndereco)

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
})
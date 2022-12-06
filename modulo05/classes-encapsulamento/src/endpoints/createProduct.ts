import { Request, Response } from "express"
import connection from "../database/connection"
import { TABLE_PRODUCTS } from "../database/tableNames"
import { Product } from "../models/Product"
import { ProductClass } from "../class/ProductClass"

export const createProduct = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const name = req.body.name
        const price = req.body.price
        const id = Date.now().toString()

        if (!name || !price) {
            throw new Error("Body inválido.")
        }

        // const newProduct: Product = {
        //     id: Date.now().toString(),
        //     name,
        //     price
        // }

        // await connection(TABLE_PRODUCTS).insert({
        //     id: newProduct.id,
        //     name: newProduct.name,
        //     price: newProduct.price
        // })

        const newProduct = new ProductClass(id, name, price)
        await connection(TABLE_PRODUCTS).insert(newProduct)
        
        res.status(201).send({ message: "Produto criado", product: newProduct })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}
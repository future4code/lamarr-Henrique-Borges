import { performPurchase } from "../src/funcs/performPurchase";
import { User } from "../src/model/User";

describe("Testes para funções de compra", ()=> {

    const clientTest: User = { 
        name: "Pedro",
        balance: 100
    }

    test( "teste com um usuário com o saldo maior do que o valor", () => {
        const result = performPurchase(clientTest, 50)

        expect(result).toEqual({
            name: "Pedro",
            balance: 50
        })
    })

    test( "teste com um usuário com o saldo igual ao valor de compra", () => {
        const result = performPurchase(clientTest, 100)

        expect(result).toEqual({
            name: "Pedro",
            balance: 0
        })
    })

    test( "teste com um usuário com o saldo menor do que o valor de compra", () => {
        const result = performPurchase(clientTest, 200)

        expect(result).not.toBeDefined()
    })
})

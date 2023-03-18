import { UserBusiness } from "../../src/business/UserBusiness"
import { UserDatabaseMock } from "../mocks/UserDatabaseMock"

const userBusiness = new UserBusiness(
    new UserDatabaseMock()
)

describe("getUserById", () => {

    test("Deve capturar o erro quando o id não está registrado", async () => {
        expect.assertions(2)

        try {
            await userBusiness.profile("abc")
        } catch (error: any) {
            expect(error.statusCode).toBe(401)
            expect(error.message).toBe("Usuário não encontrado.")
        }
    })
    
    test("Deve retornar o respectivo usuário quando o id for registrado", async () => {
        expect.assertions(2)

        try {

            const getUserById = jest.fn(
                (id: string) => userBusiness.profile(id)
            )

            const result = await getUserById("03")
            
            expect(getUserById).toHaveBeenCalledWith("03")
            expect(result).toEqual({
                id: "03",
                name: "Predo",
                email: "predo@email.com",
                role: "ADMIN"
            })
        } catch (error: any) {
            console.log(error.message)
        }
    })
})

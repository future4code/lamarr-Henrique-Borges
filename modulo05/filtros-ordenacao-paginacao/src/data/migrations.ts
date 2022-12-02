import { connection } from "./connection"
import { usuarios } from "./usuarios"

const criarTababela = async (): Promise<any> => {
    await connection.raw(`
        CREATE TABLE Usuarios(
            id INT PRIMARY KEY,
            nome VARCHAR(255) NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            tipo VARCHAR(255) NOT NULL
        );
    `)
    console.table("Tabela criada com sucesso")
}

criarTababela()

const inserirUsuarios = async (): Promise<any> => {
    await connection("Usuarios")
    .insert(usuarios)
    console.log("Usuários inseridos com sucesso")
}

inserirUsuarios()

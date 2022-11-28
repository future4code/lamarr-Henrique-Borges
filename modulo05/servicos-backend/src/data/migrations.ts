import { connection } from "./connection"

const criarTababela = async (): Promise<any> => {
    await connection.raw(`
        CREATE TABLE Endereco(
            CEP VARCHAR(255) NOT NULL,
            Logradouro VARCHAR(255) NOT NULL,
            Numero VARCHAR(255) NOT NULL,
            Complemento VARCHAR(255),
            Bairro VARCHAR(255) NOT NULL,
            Cidade VARCHAR(255) NOT NULL,
            Estado VARCHAR(255) NOT NULL
        );
    `)
    console.table("Tabela criada com sucesso")
}

criarTababela()
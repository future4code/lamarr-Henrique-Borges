// EXERCICIO 01:

// Para acessar os parâmetros passados na linha de comando para o Node, podemos 
// ultilizar o  process.argv[].

const nome = process.argv[2]
const idade = Number(process.argv[3])

const Pessoa = (nomePessoa, idadePessoa) => {
  console.log(`Olá, ${nomePessoa}! Você tem ${idadePessoa} anos. Em sete anos você terá ${idadePessoa + 7} anos.`)
}

Pessoa(nome, idade)



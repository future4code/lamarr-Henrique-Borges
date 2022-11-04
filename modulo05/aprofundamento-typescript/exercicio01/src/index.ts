// exercicio 01:

// A) 
// let minhaString:string 
// minhaString = 12

// Ao tentar atribuir um valor numérico em uma variável do tipo string, o typescript nos retorna
// o seguinte aviso: O tipo 'number' não pode ser atribuído ao tipo 'string'

// B) 
// let meuNumero:number | string
// meuNumero = 12
// meuNumero = "vasco"

// Para criar uma variável que aceite tanto valores do tipo number quanto valores do tipo string,
// podemos usar o union type |.

// C) // D)
const pessoa01:{nome:string, idade:number, corFavorita:string} = {
  nome: "h Douglas",
  idade: 23,
  corFavorita: "Verde"
}

enum arcoIris {
  VERMELHO = "vermelho",
  LARANJA = "laranja", 
  AMARELO = "amarelo", 
  VERDE = "verde",
  AZUL = "azul",
  ANIL = "anil",
  VIOLETA = "violeta"
}

type pessoa = {
  nome:string,
  idade:number, 
  corFavorita:arcoIris
}

const pessoa02:pessoa = {
  nome: "Araújo",
  idade: 29,
  corFavorita: arcoIris.AMARELO
}

const pessoa03:pessoa = {
  nome: "Chaves",
  idade: 45,
  corFavorita: arcoIris.AZUL
}

const pessoa04:pessoa = {
  nome: "Fábregas",
  idade: 80,
  corFavorita: arcoIris.LARANJA
}



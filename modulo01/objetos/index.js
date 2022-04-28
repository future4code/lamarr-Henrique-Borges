// Exercícios de interpretação de código:

// Questão 1:

// a)
// 1º console: Vai imprimir o primeiro valor do array elenco: "Matheus Nachtergaele";
// 2º console: O último valor do array elenco: "Virginia Cavendish";
// 3º console: O Terceiro valor do array transmissoesHoje: {canal: "Globo", horario: "14h"}.

// Questão 2:

// a) 
// 1º console: vai imprimir os valores do objeto cachorro;
// 2º console: vai trocar o nome do animal. De "Juca" para juba;
// 3º console: vai trocar a letra "a" de "juba" para "o", transformando-o em "jubo".

// b)  Realizar uma cópia do array inteiro, feita essa cópia, podemos manipular ela da maneira
// que quisermos. Essa sintaxe é chamada de espalhamento ou spread.

// Questão 3:

// a)
// 1º console: false;
// 2º console: undefined.

// b) O 1º console vai imprimir o valor atribuído a backender: (false)
// O 2º imprime undefined, pois não foi criada a propriedade "altura" no objeto "pessoa".

// ...........................................................................................................

// Exercícios de escrita de código: 

// Questão 1:

// a)

// let pessoa = {

//     nome: "James McGill",
//     apelidos: ["Jimmy", "Saul", "Goodman"]

// }

// function pessoaObjeto(objeto) {

//     return `Eu sou ${objeto.nome}, mas pode me chamar de: ${objeto.apelidos[0]}, 
//     ${objeto.apelidos[1]} ou ${objeto.apelidos[2]}`

// }

// console.log(pessoaObjeto(pessoa))

// // b)

// let novaPessoa = {

//     ...pessoa,
//     apelidos: ["Advogado", "Lalo Friend", "Nacho Friend"]

// }

// function pessoaObjeto(objeto) {

//     return `Eu sou ${objeto.nome}, mas pode me chamar de: ${objeto.apelidos[0]}, 
//     ${objeto.apelidos[1]} ou ${objeto.apelidos[2]}`

// }

// console.log(pessoaObjeto(novaPessoa))

// Questão 2:

// a)

// let pessoa01 = {

//     nome: "Walter White",
//     idade:52 ,
//     profissao: "Professor de Química"

// }

// let pessoa02 = {

//     nome: "Gustavo Fring",
//     idade: 51 ,
//     profissao: "Empresário"

// }

// b)

// function pessoas(objeto01, objeto02) {

//     let array1 = [objeto01.nome, objeto01.nome.length, objeto01.idade, objeto01.profissao, 
//         objeto01.profissao.length]

//     let array2 = [objeto02.nome, objeto02.nome.length, objeto02.idade, objeto02.profissao, 
//         objeto02.profissao.length]

//     return [array1, array2]
// }

// console.log(pessoas(pessoa01, pessoa02))

// Questão 3:

// a)

let carrinho = []

// b)

let fruta01 = {
    
    nome: "Melancia",
    disponibilidade: true
}

let fruta02 = {
  
    nome: "Melão",
    disponibilidade: true
}

let fruta03 = {
   
    nome: "Banana",
    disponibilidade: true
}

// c)

function frutas(objeto01, objeto02, objeto03) {

    return [objeto01, objeto02, objeto03]

}

carrinho.push(frutas(fruta01, fruta02, fruta03))

// d)

console.log(carrinho)

// ...........................................................................................................

// Desafios:


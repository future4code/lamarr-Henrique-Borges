// Exercícios de interpretação de código:

// Questão 1: O código está acrescentando mais 1 a váriavel i, enquanto ela for menor que 5, 
// e somando-a com seu valor anterior. resultado final: 10.

// Questão 2:

// a) Vai imprimir todos os números de dentro do array que são maiores que 18. 
// [19, 21, 23, 25, 27, 30].

// b) Sim, poderia o fazer, removendo o código de if do bloco. 
// assim o loop passaria por todos os valores(índice) do array.

// Questão 3: O código vai imprimir uma quantidade de asterios até o valor inserido pelo usuáro, 
// no exemplo valor (4).

// .............................................................................................................

// Exercícios de escrita de código:

// Questão 1: 

// let qtdBichinhos = Number(prompt("Quantos bichinhos de estimação você tem?"))
// let bichinhos = []

// if (qtdBichinhos === 0) {
//     console.log("Que pena! Você pode adotar um pet!")

// }else{ 

//     for (i = 0; i < qtdBichinhos; i++) {
//         nomes = prompt("Qual o nome dele(s)?")
//         bichinhos.push(nomes)

//     }
    
//     console.log(bichinhos)
// }

// Questão 2:

// let arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

// a)

// function arrayValores(parametro) {

//     for (let i = 0; i < parametro.length; i++) {
//         valor = parametro[i]
//         console.log(valor)
//     }
    
// }
// arrayValores(arrayOriginal)

// b) 

// function arrayValores(parametro) {

//     for (let i = 0; i < parametro.length; i++) {
//         valor = parametro[i] / 10
//         console.log(valor)
//     }
    
// }
// arrayValores(arrayOriginal)

// c)

// let novoArray = []

// function arrayValores(parametro) {

//     for (let i = 0; i < parametro.length; i++) {
        
//         valor = parametro[i]
//         if (valor % 2 === 0){
//             novoArray.push(valor)
//         }
        
//     }

//     console.log(novoArray)
    
// }
// arrayValores(arrayOriginal)

// d)

// let novoArray = []

// function arrayValores(parametro) {

//     for (let i = 0; i < parametro.length; i++) {
        
//         valor = parametro[i]
//         mensagem = `O elemento do índex ${i} é: `     
//         arrayString = mensagem + valor
//         novoArray.push(arrayString)
//     }
//     console.log(novoArray)
// }
// arrayValores(arrayOriginal)

// e)

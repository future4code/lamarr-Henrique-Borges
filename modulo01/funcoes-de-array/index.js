// Exercícios de interpretação de código:

// Questão 01: Vai imprimir todos os ítens do array em questão, o índice e também o array como um todo.

// Questão 02: Vai imprimir todos os nome do array em questão:
// ['Amanda Rangel', 'Laís Petra', 'Letícia Chijo'].

// Questão 03: Vai imprimir os itens do array que tiverem apelidos diferentes de "Chijo".
//  No caso: {nome: 'Amanda Rangel', apelido: 'Mandi'} e {nome: 'Laís Petra', apelido: 'Laura'}.

// ..............................................................................................................

// Exercícios de escrita de código:

// Questão 01:

// const pets = [
//     { nome: "Lupin", raca: "Salsicha"},
//     { nome: "Polly", raca: "Lhasa Apso"},
//     { nome: "Madame", raca: "Poodle"},
//     { nome: "Quentinho", raca: "Salsicha"},
//     { nome: "Fluffy", raca: "Poodle"},
//     { nome: "Caramelo", raca: "Vira-lata"},
//  ]

//  a) 

// function nomes (valorAtual) {

//    return valorAtual.nome

// }

// let nomePets = pets.map(nomes)
// console.log(nomePets)

// b) 

// function raca (valorAtual) {

//    return valorAtual.raca === "Salsicha"

// }

// let porRaca = pets.filter(raca)
// console.log(porRaca)

// Questão 02:

// const produtos = [
//     { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
//     { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
//     { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
//     { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
//     { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
//     { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
//     { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
//     { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
//     { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
//     { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
//  ]

//  a)

// function nomes (valorAtual) {

//    return valorAtual.nome

// }

// let nomeProdutos = produtos.map(nomes)
// console.log(nomeProdutos)

// b)

// c)

// function categoria (valorAtual) {

//    return valorAtual.categoria === "Bebidas"
// }

// let categoriaBeb = produtos.filter(categoria)
// console.log(categoriaBeb)

// d)

// function categoria (valorAtual) {

//    return valorAtual.nome.includes("Ypê")
// }

// let categoriaBeb = produtos.filter(categoria)
// console.log(categoriaBeb)

// e)






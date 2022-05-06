/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

console.log("Boas vindas ao jogo de Blackjack!")

let usuarioCarta1 = comprarCarta()
let usuarioCarta2 = comprarCarta()

let computadorCarta1 = comprarCarta()
let computadorCarta2 = comprarCarta()

let jogador01 = {
   nome: "Usuário",
   carta1: usuarioCarta1.texto,
   carta2: usuarioCarta2.texto,
   pontuacao: usuarioCarta1.valor + usuarioCarta2.valor
}

let jogador02 = {
   nome: "Computador",
   carta1: computadorCarta1.texto,
   carta2: computadorCarta2.texto,
   pontuacao: computadorCarta1.valor + computadorCarta2.valor
}

if( confirm("Quer iniciar uma nova rodada?") ) {

   console.log(`${jogador01.nome} - cartas: ${jogador01.carta1}, ${jogador01.carta2}.
   - pontuação ${jogador01.pontuacao}.`)

   console.log(`${jogador02.nome} - cartas: ${jogador02.carta1}, ${jogador02.carta2}.
   - pontuação ${jogador02.pontuacao}.`)

   console.log( resultado() )

} else {
   console.log("O jogo acabou.")
}

function resultado() {
   
   if (jogador01.pontuacao > jogador02.pontuacao) {
      return "O Usuário ganhou!" 
   }else if (jogador01.pontuacao < jogador02.pontuacao) {
      return "O Computador ganhou!"
   } else {
      return "Empate!"
   }

}

// ...........................................................................................................

// Desafio:


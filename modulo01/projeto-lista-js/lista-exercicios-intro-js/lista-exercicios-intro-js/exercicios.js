// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  let altura = prompt("Qual a altura do retângulo?")
  let largura = prompt("Qual a largura do retângulo?")
  let area = (altura * largura)

  console.log(area)
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  let anoAtual = prompt("Qual seu ano atual?")
  let anoNascimento = prompt("Qual seu ano de nascimento?")
  let idade = anoAtual - anoNascimento

  console.log(idade)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  let imc = peso / (altura * altura)

  return imc
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  let nome = prompt("Qual é o seu nome?")
  let idade = prompt("Qual sua idade?")
  let email = prompt("Qual seu email?")

  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  let cor1 = prompt("digite uma cor favorita")
  let cor2 = prompt("digite sua segunda cor favorita")
  let cor3 = prompt("digite sua terceira favorita")

  let cores = [cor1, cor2, cor3]

  console.log(cores)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  return string.toUpperCase()
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  return custo / valorIngresso
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  let tamanho1 = string1.length
  let tamanho2 = string2.length

  return tamanho1 === tamanho2
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  let ultimo = array.pop()
  return ultimo
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  let valor1 = string1.toLowerCase()
  let valor2 = string2.toLowerCase()
  return valor1 === valor2
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}
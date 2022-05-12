// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length
   
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array.reverse()
  
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
   
    let numeros = array.sort(function ordenados(a, b) {return a - b;})
    return numeros 
  
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    
    let pares = array.filter((item) => {
        return item % 2 === 0
    })
    
    return pares
    
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {

    let pares = array.filter((item) => {
        return item % 2 === 0
    })

    let paresElevados = pares.map((elevado) => {
        return Math.pow(elevado, 2)
    })

    return paresElevados
 
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
   
    let numerosOrdenados = array.sort(function ordenados(a, b) {return a - b;})
    return numerosOrdenados[numerosOrdenados.length-1]
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {

    let maior = Math.max(num1, num2)
    let menor = Math.min(num1, num2) 
   
    let objeto01 = {

        maiorNumero: maior,
        maiorDivisivelPorMenor: (maior % menor) === 0,
        diferenca: maior - menor

    }

    return objeto01

}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {

    let numerosPares = []

    for(let i = 0; numerosPares.length < n; i++){
        if (i % 2 === 0) {
            numerosPares.push(i)
        }
    }
    return numerosPares
}  

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

    if (ladoA === ladoB && ladoB === ladoC) {
        return "Equilátero"
    }

    if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
        return "Isósceles"
    }

    if (ladoA !== ladoB && ladoB !== ladoC){
        return "Escaleno"
    }

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    let numerosOrdenados = array.sort(function ordenados(a, b) {return a - b;})
    return [numerosOrdenados[numerosOrdenados.length-2], numerosOrdenados[1]]

}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}
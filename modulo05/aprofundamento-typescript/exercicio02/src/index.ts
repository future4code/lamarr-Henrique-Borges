// exercicio 02

// A) // B)

type estatistica = {
  maior:number,
  menor:number,
  media:number
}

const obterEstatisticas = (numeros:number[]):estatistica => {

  const numerosOrdenados = numeros.sort(
    (a:number, b:number) => a - b
  )

  let soma:number = 0

  for (let num of numeros) {
    soma += num
  }

  const estatisticas:estatistica = {
    maior: numerosOrdenados[numeros.length - 1],
    menor: numerosOrdenados[0],
    media: soma / numeros.length
  }

  return estatisticas
}

console.log(obterEstatisticas([8,2,5]));

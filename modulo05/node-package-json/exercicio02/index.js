// EXERCICIO 02:

const calcula = process.argv[2]
const n1=Number(process.argv[3])
const n2=Number(process.argv[4])

const tabuada = (operacao, valor1, valor2) => {
  switch (operacao) {
    case "add":
      console.log(`Resultado: ${valor1 + valor2}`)
      break
    case "sub":
      console.log(`Resultado ${valor1 - valor2}`)
      break
    case "mult":
      console.log(`Resultado ${valor1 * valor2}`)
      break
    case "div":
      console.log(`Resultado ${valor1 / valor2}`)
      break
    default:
      console.log("Insira valores válidos")
  }   
}

tabuada(calcula, n1, n2)
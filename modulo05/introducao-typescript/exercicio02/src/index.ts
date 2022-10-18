const imprimeTresCoresFavoritas = (cor1:string, cor2:string, cor3:string):void => {
  const cores:string[] = [cor1, cor2, cor3]
  console.log(`Suas 3 cores favoritas são ${cores[0]}, ${cores[1]}, ${cores[2]}`)
}

imprimeTresCoresFavoritas("Azul", "Verde", "Amarelo")

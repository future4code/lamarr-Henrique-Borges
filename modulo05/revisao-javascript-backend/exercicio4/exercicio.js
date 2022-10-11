// Gerador de itens únicos:

  const lista01 = [{nome:"Pietro"}, {nome:"Natasha"}, {nome:"Fernandes"}]
  const lista02 = [{nome:"Pietro"}, {nome:"Natasha"}, {nome: "Frederico"}, {nome: "Seu Madruga"}]
  const lista03 = lista01.concat(lista02)

  const listaUnica = []

  const unica = lista03.filter((elemento) => {
    if (listaUnica.includes(elemento.nome) === false) {
      listaUnica.push(elemento.nome)
      return listaUnica
    }
    
  })
  console.log(unica)
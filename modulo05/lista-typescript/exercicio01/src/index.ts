const pessoa = ( nome:string, dataNasc:string ):string => {
  const data:string[] = dataNasc.split("/")

  return `Olá me chamo ${nome}, nasci no dia ${data[0]} do mês ${data[1]} do ano de ${data[2]}.`
}

console.log(pessoa("Gus", "26/04/1958"));



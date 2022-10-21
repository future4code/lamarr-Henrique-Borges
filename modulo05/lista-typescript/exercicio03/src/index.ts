enum Genero {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}

type Filme = {
  nome:string,
  anoLancamento:number,
  genero:Genero, 
  pontucao?:number
}

const catalogo = (nome:string, anoLancamento:number, genero:Genero, pontucao?:number):Filme => {
  const filme:Filme = {
    nome, 
    anoLancamento,
    genero,
    pontucao
  }

  return filme
}

console.table(catalogo("Scarface", 1983, Genero.ACAO, 8.3 ));

type Produto = {
  nome: string,
  quantidade: number,
  valorUnitario: any
}

const ordenar = (produtos: Produto[]) => {

  const produtosOrdenados = produtos.sort((produtoA, produtoB) => {
    if (produtoA.quantidade < produtoB.quantidade) return -1;
    if (produtoA.quantidade > produtoB.quantidade) return 1;
    return 0;
  })

  return produtosOrdenados
}

console.log(ordenar([
  { nome: "MacMugffin", quantidade: 37, valorUnitario: 51.040 },
  { nome: "Vassoura voadora", quantidade: 56, valorUnitario: 210.0 },
  { nome: "Laço da verdade", quantidade: 32, valorUnitario: 571.5 },
  { nome: "O precioso", quantidade: 1, valorUnitario: 9181.923 },
  { nome: "Caneta de 250 cores", quantidade: 123, valorUnitario: 17 },
  { nome: "Plumbus", quantidade: 13, valorUnitario: 140.44 },
  { nome: "Pokebola", quantidade: 200, valorUnitario: 99.9915 }
]));

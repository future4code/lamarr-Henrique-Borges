// Cadastro de cliente:

const clientes = [
	{ id: 1, nome: "Fulano" },
	{ id: 2, nome: "Ciclano" },
	{ id: 3, nome: "Beltrano" },
	{ id: 4, nome: "Fulana" }
]

const insereClientes = (idCliente, nomeCliente) => {
  if ((typeof idCliente === "number" && idCliente > clientes.length) && (typeof nomeCliente === "string")) {
    clientes.push({id: idCliente, nome: nomeCliente})
    console.log(clientes);
  } else {
    console.log("Erro. Parâmetro inválido. ID já existente e/ou nome Inválido.");
  }
}

insereClientes(5, "Vasco")


// Geração de tabuada:

const gerarTabuada = (numero) => {
  const tabuada = [
    numero *0,
    numero *1,
    numero *2,
    numero *3,
    numero *4,
    numero *5,
    numero *6,
    numero *7,
    numero *8,
    numero *9,
    numero *10
  ]

  if(typeof numero === "number" && numero < 11) {
    resultado = tabuada.map((valor, i) =>{
      return (`${numero} x ${i} = ${valor}`)
    })
    console.log(resultado)
  } else {
    console.log(" “Erro. Parâmetro inválido. Insira um número entre 1 e 10.")
  }
}

gerarTabuada(5)
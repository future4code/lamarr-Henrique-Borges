// EXERCICIO 03:

const listaTarefas = ["Lavar a louça"]

const inserirTarefa = (novaTarefa) => {
  if(novaTarefa != undefined) {
    listaTarefas.push(novaTarefa) 
    console.log("Tarefa Adicionada com sucesso!")
  } 
  console.log(listaTarefas)
}

const tarefa = process.argv[2]
inserirTarefa(tarefa)

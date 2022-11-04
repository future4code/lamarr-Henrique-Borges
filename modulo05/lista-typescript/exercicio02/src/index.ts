const imprimeTipo = ( variavel:any ):void => {

  if (typeof variavel === "string") {
    console.log("Variável do tipo String")
  } else if (typeof variavel === "number") {
    console.log("Variável do tipo  Number")
  } else if (typeof variavel === "boolean") {
    console.log("Variável do tipo  Boolean")
  } else {
    console.log("Variável de tipo não identificado");
  }
}

imprimeTipo("Vasco")
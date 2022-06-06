```
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  let qtdNumeros = 0
  
  for(i = 0; i < arrayDeNumeros.length; i++){
    if (arrayDeNumeros[i] === numeroEscolhido){
      qtdNumeros++
    }
  }
  
  if(qtdNumeros === 0){
    return "Número não encontrado"
  }else{
    return `O número ${numeroEscolhido} aparece ${qtdNumeros}x`
  }
}
```


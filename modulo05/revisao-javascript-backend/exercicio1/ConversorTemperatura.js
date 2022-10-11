const Converter = (valor, string) => {
  if ((typeof valor === "number") && (string === "F" || string === "K")) {
    console.log(`${valor}° Celsius é equivalente a ${(valor * 1.8) + 32}° Farenheit.`);
    console.log(`${valor}° Celsius é equivalente a ${(valor + 273.15) + 32}° Kelvin.`);
  } else {
    console.log("Erro. Parâmetro inválido, Por favor insira um valor numérico no primeiro parâmetro e/ou a string 'K' ou 'F' no segundo.")
  }
}

Converter(30, "K")
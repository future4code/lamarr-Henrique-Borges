
``` function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
 
   	salarioFixo = 2000
   	comissaoPorCarroVendido = (qtdeCarrosVendidos *100)
   	comissaoPorPorcentagem = (5/100) * valorTotalVendas
   	comissaTotal = comissaoPorCarroVendido + comissaoPorPorcentagem
   	salarioFinal = salarioFixo + comissaTotal
  
  	return salarioFinal

    } ```




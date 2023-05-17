function calcula(value)
{
    por = 0;
    value = parseFloat(value);    
		if (value <=280)
    {
    	por = 20;
    }
    else if (value > 280 && value <= 700)
    {
    	por = 15;
    }
    else if (value > 700 && value <= 1500)
    {
    	por = 10;
    }
    else if (value > 1500)
    {
    	por = 5;
    }
    resp = value + ((value * por) / 100);
    document.getElementById("valor").innerHTML = "Valor digitado: " + value;
    document.getElementById("calculo").innerHTML = "Cálculo de aumento: " + ((value * por) / 100);
    document.getElementById("porcetagem").innerHTML = "Porcentagem: " + por + "%";    
    document.getElementById("novo_salario").innerHTML = "Salário Final: " + resp;
    
    return resp;
}
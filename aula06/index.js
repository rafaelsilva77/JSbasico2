function soma(valor1, valor2){
    return valor1 + valor2;
}

/* document.getElementById("texto").innerHTML = soma(10, 20); */

function realParaDolar(real, cotacaoDolar){
    return real * cotacaoDolar;
}

var valorReal = 7.89;
var cotacao = 5.42;

var total = realParaDolar(valorReal, cotacao);
alert(`O valor em real é R$ ${valorReal} e em dolar é $ ${total.toFixed(2)}`);

function alertHello(){
    alert("Hello");
}

function paraCelsius(valorFahrenheit){
    return (5/9) * (valorFahrenheit - 32);
}

var x  = paraCelsius(77);

alert(`A temperatura em Celsius é ${x.toFixed(2)} °C`);
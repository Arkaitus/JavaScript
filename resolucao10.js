/*
Neste problema, deve-se ler o código de uma peça 1, o número de peças 1, 
o valor unitário de cada peça 1, o código de uma peça 2, o número de peças 2 e 
o valor unitário de cada peça 2. Após, calcule e mostre o valor a ser pago.

Entrada
O arquivo de entrada contém duas linhas de dados. Em cada linha haverá 3 valores, 
respectivamente dois inteiros e um valor com 2 casas decimais.

Saída
A saída deverá ser uma mensagem conforme o exemplo fornecido abaixo, 
lembrando de deixar um espaço após os dois pontos e um espaço após o "R$". 
O valor deverá ser apresentado com 2 casas após o ponto.
*/



var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
//destruração, converti as variaveis repetidas em 1 vetor.
var [idItem1, qtdItem1, valueUnitaryItem1] = lines.shift().split(" ");
var [idItem2, qtdItem2, valueUnitaryItem2] = lines.shift().split(" ");

var valueUnitaryItem1 =  qtdItem1 * valueUnitaryItem1;
var valueUnitaryItem2 =  qtdItem2 * valueUnitaryItem2;


var totalAmountToBuy = valueUnitaryItem1 + valueUnitaryItem2;

console.log(`VALOR TOTAL A PAGAR = R$ ${totalAmountToBuy.toFixed(2)}`);
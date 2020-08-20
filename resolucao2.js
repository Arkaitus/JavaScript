/*1- A fórmula para calcular a área de uma circunferência é: area = π . raio2. Considerando para este problema que π = 3.14159:
- Efetue o cálculo da área, elevando o valor de raio ao quadrado e multiplicando por π.
2- Entrada / A entrada contém um valor de ponto flutuante (dupla precisão), no caso, a variável raio.
3- Saída / Apresentar a mensagem "A=" seguido pelo valor da variável area, conforme exemplo abaixo, com 4 casas após o ponto decimal. 
Utilize variáveis de dupla precisão (double). Como todos os problemas, não esqueça de imprimir o fim de linha após o resultado, 
caso contrário, você receberá "Presentation Error".*/

function calculo(n1) {
    const area = 3.14159;
    var raio = n1;
    var resultado = Math.pow(raio, 2) * area; 
    console.log(resultado);
}

calculo(5);

//Ou

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var n = 3.14159;
raio = parseFloat(lines.shift());
var area = (Math.pow(raio,2) * n).toFixed(4);

console.log('A='+area);




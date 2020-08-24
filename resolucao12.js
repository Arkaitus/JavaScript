/*
Escreva um programa que leia três valores com ponto flutuante de dupla precisão: A, B e C. 
Em seguida, calcule e mostre:
a- a área do triângulo retângulo que tem A por base e C por altura.
b- a área do círculo de raio C. (pi = 3.14159)
c- a área do trapézio que tem A e B por bases e C por altura.
d- a área do quadrado que tem lado B.
e- a área do retângulo que tem lados A e B.
Entrada
O arquivo de entrada contém três valores com um dígito após o ponto decimal.

Saída
O arquivo de saída deverá conter 5 linhas de dados. Cada linha corresponde a uma das 
áreas descritas acima, sempre com mensagem correspondente e um espaço entre os dois pontos e o valor. 
O valor calculado deve ser apresentado com 3 dígitos após o ponto decimal.
*/

var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var valor = lines.shift().split(' ');

var A = parseFloat(valor[0]); 
var B = parseFloat(valor[1]); 
var C = parseFloat(valor[2]);

console.log("TRIANGULO: " + parseFloat((A * C)/2).toFixed(3)); 
console.log("CIRCULO: " + parseFloat(3.14159 * Math.pow(C,2)).toFixed(3)); 
console.log("TRAPEZIO: " + parseFloat(((A + B)/2) * C).toFixed(3)); 
console.log("QUADRADO: " + parseFloat(Math.pow(B,2)).toFixed(3)); 
console.log("RETANGULO: " + parseFloat(A * B).toFixed(3));






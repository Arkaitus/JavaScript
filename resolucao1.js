/*Leia 2 valores inteiros e armazene-os nas variáveis A e B. 
1- Efetue a soma de A e B atribuindo o seu resultado na variável X. 
2- Imprima X conforme exemplo apresentado abaixo. Não apresente mensagem alguma 
além daquilo que está sendo especificado e não esqueça de imprimir o fim de linha 
após o resultado, caso contrário, você receberá "Presentation Error".
3- Entrada: A entrada contém 2 valores inteiros.
4-Saída: Imprima a mensagem "X = " (letra X maiúscula) seguido 
pelo valor da variável X e pelo final de linha. Cuide para que tenha um espaço 
antes e depois do sinal de igualdade, conforme o exemplo abaixo.*/

var input = require("fs").readFileSync("stdin", "utf-8");

var valores = input.split("\n");

var a = parseInt(valores.shift());
var b = parseInt(valores.shift());

var x = a + b;

console.log("X = " + x);
const prompt = require('prompt-sync')();

//Faça um programa, com uma função que necessite de três argumentos: dois números e um sinal de operador matemático (+, -, * ou /). 
//Ela deve fazer o cálculo indicado pelo operador usando os dois número passados.

function calculo(num1, num2, res){

    let operacoes = [[num1 + num2], [num1 - num2], [num1 * num2], [num1 / num2]];
    return operacoes[res];
}

let a = +prompt("Digite um número: ");
let b = +prompt("Digite outro número: ");

console.log(`Digite:
0 para soma;
1 para subtração;
2 para multiplicação;
3 para divisão` );

let c = +prompt();

console.log(calculo(a, b, c))

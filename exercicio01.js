const prompt = require('prompt-sync')();

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

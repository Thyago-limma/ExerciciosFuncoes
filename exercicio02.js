const prompt = require("prompt-sync")();

//Construa uma função que receba uma data no formato DD/MM/AAAA e devolva uma string no formato 'D de mesPorExtenso de AAAA'.
//Valide a data e retorne NULL caso a data seja inválida.

function datas(d, m, a){

    let mes = ["0","Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
        "Julho", "Agosto,", "Setembro", "Outubro", "Novembro", "Dezembro"];
   
    if (isNaN(d) || isNaN(m) || isNaN(a)) {
        return null;
    }

    return `Dia ${d} de ${mes[m]}, de ${a}`;
};


let dia = +prompt("Digite um dia: ");
let mes = +prompt("Dite um mês em número: ");
let ano = +prompt("Digite um ano: ");

console.log();
console.log(datas(dia, mes, ano));

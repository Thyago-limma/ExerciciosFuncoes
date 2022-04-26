const prompt = require("prompt-sync")();

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
/***************************************************************
 * Objetivo: calcular e printar fatorial
 * Data: 13/09/2023
 * Autor: Emily Crepaldi
 * Versão: 1.0
 **************************************************************/

var calcularFatorial = require('./modulo/calcularFator.js');


var readline = require('readline');

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

entradaDados.question('Número: ', function(valorDigitado){

    let numero = valorDigitado.replace(',','.');

    console.log(calcularFatorial.calcularFatorial(numero))

    console.log('')
      entradaDados.close();
})
/***************************************************************
 * Objetivo: calcular o img
 * Data: 11/09/2023
 * Autor: Emily Crepaldi
 * Versão: 1.0
 **************************************************************/

var IMC = require('./modulo/calculo.js');


var readline = require('readline');

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('')

entradaDados.question('Qual seu peso: ', function(pesoPessoa){

    let peso  = pesoPessoa.replace(',','.');


//entrada de dados do tipo de pagamento
entradaDados.question('Qual sua altura: ', function(alturaPessoa){

    let altura = alturaPessoa.replace(',','.');

    console.log('------------------')
        console.log('')

        //chama a função pra calcular a tabuada
    console.log(IMC.calcularIMC(peso, altura))

    console.log('')
      entradaDados.close();
})
})
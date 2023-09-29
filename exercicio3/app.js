/***************************************************************
 * Objetivo: calcular e printar tabuada
 * Data: 11/09/2023
 * Autor: Emily Crepaldi
 * Versão: 1.0
 **************************************************************/

var tabuadas = require('./modulo/calcularTabuada.js');

var readline = require('readline');

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('')
console.log('------------------')


entradaDados.question('Tabuada Inicial: ', function(tabuada1){

    let tabuadaValor  = tabuada1.replace(',','.');

    console.log('------------------')

    entradaDados.question('Tabuada Final: ', function(tabuada2){

        let tabuada2Valor  = tabuada2.replace(',','.');
    
        console.log('------------------')
    


entradaDados.question('Valor inicial: ', function(primeiroValor){

    let valorInicial = primeiroValor.replace(',','.');

    console.log('------------------')

    entradaDados.question('Valor final: ', function(ultimoValor){

        let valorFinal = ultimoValor.replace(',','.');

        console.log('------------------')

       
    console.log(tabuadas.gerarTabuada(tabuadaValor,tabuada2Valor, valorInicial, valorFinal))

    

    console.log('')
    entradaDados.close();
})
})
})
})
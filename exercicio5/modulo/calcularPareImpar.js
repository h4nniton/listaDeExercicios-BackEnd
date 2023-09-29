/***************************************************************
 * Objetivo: calcular e printar numeros par ou impar
 * Data: 13/09/2023
 * Autor: Emily Crepaldi
 * Versão: 1.0
 **************************************************************/

function paresImpares(valorInicial, valorFinal, escolherSeparacao) {
    let numeroInicial = Number(valorInicial);
    let numeroFinal = Number(valorFinal);
    let escolha = Number(escolherSeparacao);

    if (numeroInicial < 0 || numeroInicial > 500) {
        console.log('>°< ERRO: O valor inicial precisa estar entre 0 e 500 !')
    } else if (numeroFinal < 100 || numeroFinal > 1000) {
        console.log('>°< ERRO: O valor final precisa estar entre 100 e 1000 !')
    } else if (numeroInicial == '' || numeroFinal == '') {
        console.log('>°< ERRO: Os campos não podem estar vazios !')
    } else if (numeroInicial > numeroFinal) {
        console.log('>°< ERRO: O valor inicial não pode ser maior que o final !')
    } else if (numeroInicial == numeroFinal) {
        console.log('>°< ERRO: Os valores não podem ser iguais !')
    } else if (isNaN(numeroInicial) || isNaN(numeroFinal)) {
        console.log('>°< ERRO: Não é aceito o uso de letras e caracteres !')
    } else if (escolha > 3) {
        console.log('>°< ERRO: A escolha vai somente de 1 a 3 !')
    } else {

        console.log('')

        let contadorPar = 0;
        let contadorImpar = 0;

        if (escolha == 1 || escolha == 3) {
            console.log('Lista de números Pares:')
            for (; numeroInicial <= numeroFinal; numeroInicial++) {
                if (numeroInicial % 2 == 0) {
                    console.log(numeroInicial)
                    contadorPar++;
                }
            }
            console.log('')
            console.log('Qtde de números pares encontrados: ' + contadorPar)
            console.log('')
        }

        numeroInicial = Number(valorInicial);
        console.log('')

        if (escolha == 2 || escolha == 3) {
            console.log('Lista de números Impares:')
            for (; numeroInicial <= numeroFinal; numeroInicial++) {
                if (numeroInicial % 2 != 0) {
                    console.log(numeroInicial)
                    contadorImpar++
                }
            }
            console.log('')
            console.log('Qtde de números impares encontrados: ' + contadorImpar)
            console.log('')
        }
    }
}
module.exports = {
    paresImpares
}

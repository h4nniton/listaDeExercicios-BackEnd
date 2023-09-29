/***************************************************************
 * Objetivo: calcular e printar fatorial
 * Data: 13/09/2023
 * Autor: Emily Crepaldi
 * Versão: 1.0
 **************************************************************/

const calcularFatorial = function (valorFatorial) {
    let valorDigitado = valorFatorial;
    let contador = 1;
    let resultado;

    let fatorial = valorFatorial

    if (valorDigitado == '') {
        console.log('>°< ERRO: É obrigatório todos os campos estarem preenchidos !')
    } else if (isNaN(valorDigitado)) {
        console.log('>°< ERRO: Não é possível gerar calculo com a entrada de caracteres!')
    } else if (valorDigitado == 0) {
        console.log('>°< ERRO: Não existe fatorial de 0 !')
    } else if (valorDigitado == 1) {
        console.log('>°< ERRO: O número digitado precisa ser maior do que 1 !')
    } else {

        console.log('')

        valorDigitado = Number(valorDigitado)
        contador = Number(contador)

        resultado = valorDigitado

        for (; contador < valorDigitado; contador++) {
            resultado = resultado * (valorDigitado - contador)
            fatorial += `x${valorDigitado - contador}`
        }

        console.log('Fatorial de ' + valorDigitado + ' é ' + fatorial + ' = ' + resultado)
    }
}

module.exports = {
    calcularFatorial
}
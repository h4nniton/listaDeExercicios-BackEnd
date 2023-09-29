/***************************************************************
 * Objetivo: calcular o img
 * Data: 11/09/2023
 * Autor: Emily Crepaldi
 * Versão: 1.0
 **************************************************************/

const calcularIMC = function(pesoPessoa, alturaPessoa){
    let peso = pesoPessoa
    let altura = alturaPessoa

    let resultado
    let status = false
    
    if(peso == '' || altura == ''){
    console.log('ERRO: É necessário preencher todos os campos!')
    }

    else if(isNaN(peso) || isNaN(altura))
    console.log('ERRO: Não é possível calcular o IMC com a entrada de caracteres!')
    else{
        peso = Number(peso)
        altura = Number(altura)

        resultado = peso / altura * altura

        if(resultado <= 18.5){
            console.log()
            console.log('=> IMC: '+resultado)
            console.log('=> Você está abaixo do peso !')
        } else if(resultado > 18.5 && resultado <= 24.9){
            console.log()
            console.log('=> IMC: '+resultado)
            console.log('=> Seu peso está normal !')
        }else if(resultado >= 25 && resultado <= 29.9){
            console.log()
            console.log('=> IMC: '+resultado)
            console.log('=> Acima do peso (sobrepeso) !')
        }else if(resultado >= 30 && resultado <= 34.9){
            console.log()
            console.log('=> IMC: '+resultado)
            console.log('=> Você está com obsesidade 1 !')
        }else if(resultado >= 35 && resultado <= 39.9){
            console.log()
            console.log('=> IMC: '+resultado)
            console.log('=> Você está com obsesidade 2 !')
        }else{
            console.log()
            console.log('=> IMC: '+resultado)
            console.log('=> Você está com obsesidade 3 !')
        }
    }
    return status
}

module.exports = {
    calcularIMC
}
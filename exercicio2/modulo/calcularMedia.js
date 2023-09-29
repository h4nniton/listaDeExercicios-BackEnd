/***************************************************************
 * Objetivo: printar e calcular média
 * Data: 11/09/2023
 * Autor: Emily Crepaldi
 * Versão: 1.0
 **************************************************************/

const calcularMedia = function (primeiraNota, segundaNota, terceiraNota, quartaNota) {

    let nota1 = Number(primeiraNota.replace(',', '.'))
    let nota2 = Number(segundaNota.replace(',', '.'))
    let nota3 = Number(terceiraNota.replace(',', '.'))
    let nota4 = Number(quartaNota.replace(',', '.'))
    let mediaRelatorio

    if (nota1 == '' || nota2 == '' || nota3 == '' || nota4 == '') {
        console.log('>°< ERRO: Todas as notas devem ser preenchidas')
    } else if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4)) {
        console.log('>°< ERRO: Todas as notas devem ser preenchidas com números')
    } else if (nota1 > 100 || nota1 < 0 || nota2 > 100 || nota2 < 0 || nota3 > 100 || nota3 < 0 || nota4 > 100 || nota4 < 0) {
        console.log('>°< ERRO: As notas devem estar entre 0 e 100')
    } else {

        mediaRelatorio = (nota1 + nota2 + nota3 + nota4) / 4

        return mediaRelatorio;

    }
}

const mostrarStatus = function (media) {

    let mediaFinal = media
    let status

    if (mediaFinal > 69) {
        status = 'aprovado(a)'
    } else if (mediaFinal > 49) {
        status = 'em exame'
    } else {
        status = 'reprovado(a)'
    }
    return status
}

const statusFinal = function (mediaNota5) {

    let mediaExame = mediaNota5
    let statusFinal

    if (mediaExame >= 60) {
        statusFinal = 'Aprovado'
    } else {
        statusFinal = 'Reprovado'
    }
    console.log(`Média após o exame: ${mediaExame} ---> ${statusFinal}`)
}

const exameCalculo = function (mediaRelatorio, notaExame) {

    let media = Number(mediaRelatorio)
    let exame = Number(notaExame)
    let resultadoFinal

    resultadoFinal = (media + exame) / 2

    return resultadoFinal;

}


const relatorioAluno = function (nomeAluno, nomeProfessor, sexoDoAluno, sexoDoProfessor, nomeCurso, nomeDisciplina, mediaFinal, statusFinal) {

    let aluno = nomeAluno
    let professor = nomeProfessor
    let sexoAluno = sexoDoAluno.toLowerCase()
    let sexoProfessor = sexoDoProfessor.toLowerCase()
    let curso = nomeCurso
    let disciplina = nomeDisciplina
    let media = mediaFinal
    let status = statusFinal

    let alunoFouM

    if (sexoAluno == 'f') {
        alunoFouM = 'A aluna'
    } else {
        alunoFouM = 'O aluno'
    }

    let professorFouM

    if (sexoProfessor == 'f')
        professorFouM = 'a professora'
    else
        professorFouM = 'o professor'

    console.log('Relatório do aluno: ')
    console.log(`${alunoFouM} ${aluno} foi ${status} na disciplina ${disciplina} no curso ${curso} com ${professorFouM} ${professor}`)
    console.log(`Média: ${media}`)
}

module.exports = {
    calcularMedia,
    relatorioAluno,
    mostrarStatus,
    exameCalculo,
    statusFinal
}
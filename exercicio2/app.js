/***************************************************************
 * Objetivo: printar e calcular média escolar
 * Data: 11/09/2023
 * Autor: Emily Crepaldi
 * Versão: 1.0
 **************************************************************/

var media = require('./modulo/calcularMedia')

var readline = require('readline')
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


entradaDados.question('Nome do aluno: ', function (nomeAluno) {

    let aluno = nomeAluno

    entradaDados.question('Nome do professor: ', function (nomeProfessor) {

        let professor = nomeProfessor

        entradaDados.question('Sexo do aluno (F/M): ', function (sexoDoAluno) {

            let sexoAluno = sexoDoAluno

            entradaDados.question('Sexo do professor (F/M): ', function (sexoDoProfessor) {

                let sexoProfessor = sexoDoProfessor

                entradaDados.question('Nome do curso: ', function (nomeCurso) {

                    let curso = nomeCurso

                    entradaDados.question('Nome da disciplina: ', function (nomeDisciplina) {

                        let disciplina = nomeDisciplina

                        entradaDados.question('Nota 1: ', function (primeiraNota) {

                            let nota1 = primeiraNota

                            entradaDados.question('Nota 2: ', function (segundaNota) {

                                let nota2 = segundaNota

                                entradaDados.question('Nota 3: ', function (terceiraNota) {

                                    let nota3 = terceiraNota

                                    entradaDados.question('Nota 4: ', function (quartaNota) {

                                        let nota4 = quartaNota

                                        let mediaFinal = media.calcularMedia(nota1, nota2, nota3, nota4)

                                        if (mediaFinal != undefined) {
                                            let status = media.mostrarStatus(mediaFinal)
                                            console.log('')

                                            media.relatorioAluno(aluno, professor, sexoAluno, sexoProfessor, curso, disciplina, mediaFinal, status)
                                            if (status == 'em exame') {
                                                console.log()

                                                entradaDados.question('Nota do exame: ', function (notaExame) {

                                                    let nota5 = notaExame
                                                    let mediaNota5 = media.exameCalculo(mediaFinal, nota5)
                                                    media.statusFinal(mediaNota5)

                                                    entradaDados.close();

                                                })
                                            } else {
                                                console.log('')
                                                entradaDados.close();

                                            }

                                        }


                                    })

                                })
                            })

                        })

                    })
                })

            })
        })
    })

})
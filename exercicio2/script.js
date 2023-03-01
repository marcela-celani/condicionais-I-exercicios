// EXERCICIOS CONDICIONAIS II

function checaInformacoes(idade, ensinoMedio, cursandoFacul) {
    if (idade >= 18) {
        const frase = 'O usuário é maior de idade'
        console.log(frase)
    } else {
        const frase = 'O usuário não é maior de idade'
        console.log(frase)
    }

    if (ensinoMedio) {
        const frase = 'O usuário concluiu o ensino médio!'
        console.log(frase)
    } else {
        const frase = 'O usuário não concluiu o ensino médio!'
        console.log(frase)
    }

    if (cursandoFacul) {
        const frase = 'O usuário está cursando faculdade!'
        console.log(frase)
    } else {
        const frase = 'O usuário não está cursando faculdade!'
        console.log(frase)
    }
    
}

const idadeUsuario = 25 
const ensinoMedioUsuario = true
const cursandoFaculUsuario = false

console.log(checaInformacoes(idadeUsuario, ensinoMedioUsuario, cursandoFaculUsuario))
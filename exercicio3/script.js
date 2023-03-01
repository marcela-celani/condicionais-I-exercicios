// EXERCICIOS CONDICIONAIS III

function seletorNacionalidade(resposta) {
    if (resposta === 'brasileira') {
        console.log('Brasileira')
    } else if (resposta === 'argentina') {
        console.log('Argentina')
    } else if (resposta === 'uruguaia') {
        console.log('Uruguaia')
    } else if (resposta === 'chilena') {
        console.log('Chilena')
    } else if (resposta === 'colombiana') {
        console.log('Colombiana')
    } else {
        console.log('Nacionalidade não encontrada')
    } 
}

const nacionalidade = prompt('Escreva aqui sua nacionalidade: ').toLowerCase()

seletorNacionalidade(nacionalidade)
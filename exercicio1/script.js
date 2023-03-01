// EXERCICIOS CONDICIONAIS I

function verificaPar(numero) {
    let frase = ' '
    if(numero % 2 === 0){
        frase = 'O número é par!'
        return frase
    } else {
        frase = 'O número é impar!'
        return frase
    }
}

const numeroUsuario = Number(prompt('Digite um numero: '))
console.log(verificaPar(numeroUsuario))

// outra forma de fazer!
/* const verificaNumero = (numero) => {
    if(numero % 2 === 0){ 
        console.log('é par')
    }
    return 'é impar'
}
console.log(verificaNumero(2))*/
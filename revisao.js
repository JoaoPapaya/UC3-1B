/*
criar variáveis de diferentes tipos primitivos e compará - los
*/
const prompt = require("prompt-sync")();

const NumOrStr = Math.floor(Math.random() * 2)
var acertou = false
var tipoDeVar = false

if (NumOrStr == 1){
    const varToGuess = Math.floor(Math.random() * 26)
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    const letra = alfabeto[varToGuess]
}
else{
    const varToGuess = Math.floor(Math.random() * 100) + 1
}

while (acertou == false)
{
    let guess = prompt("descubra a letra ou o número de 1 a 100! ")
    var pos = alfabeto.indexOf(guess.toLowerCase())

    if(tipoDeVar == false){

        if (isNaN(guess) == true && NumOrStr == 1)
        {
            console.log("é uma letra do alfabeto!")
            tipoDeVar = true
        }
        else if (isNaN(guess) == false && NumOrStr == 0)
        {
            console.log("é um número!")
            tipoDeVar = true
        }
        else{
            console.log("tipo de variável errado!")
        }
    }
}

// Ciclo While
// snack 1:
// Crea un array vuoto e chiedi all’utente un numero
//  da inserire nell’array. Continua a chiedere i numeri 
//  all’utente e a inserirli nell’array fino a 
// quando la somma degli elementi è minore di 50

let listaNumeri= []
let somma = 0
let i=0


while (somma < 50) {
    let input= prompt("scrivi un numero minore di 50")
    let numero= parseInt(input)
    listaNumeri.push(numero)
    somma+= listaNumeri[i]
    i++;
}

console.log(`la somma è ${somma}`)
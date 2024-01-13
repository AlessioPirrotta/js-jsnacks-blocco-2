// Ciclo While
// snack 2
// genera un numero casuale tra 1 e 100 e poi chiedi 
// all'utente di indovinare il numero. Il programma poi 
// deve far comparire un messaggio "il numero è troppo alto" 
// oppure "il numero è troppo basso" nel momento in cui il numero 
// detto dall'utente non è perfettamente uguale al numero 
// estratto in modo casuale



let numero= randomNum (1,3)
let risultato = document.getElementById("rs")
const buttonRef= document.getElementById("btn")
let i=0

console.log(numero)


function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min +1) + min); // The maximum is exclusive and the minimum is inclusive
  }

let indovinaNumero;

while (indovinaNumero !== numero) { // Imposto il numero massimo di tentativi a 3

    let indovinaNumero = prompt("Indovina il numero da 1 a 100");

    if (parseInt(indovinaNumero) < numero) {
        alert("Il tuo numero è troppo basso, ritenta.");
    } else if (parseInt(indovinaNumero) > numero) {
        alert("Il tuo numero è troppo alto, ritenta.");
    } else if (parseInt(indovinaNumero) == numero) {
        risultato.innerHTML = "Numero esatto!";
        break; // Esci dal ciclo se il numero è stato indovinato
    }

    i++;
}

buttonRef.addEventListener ("click", function(){
    location.reload()
})






// Ciclo For
// snack 3
// Crea due array che hanno un numero di elementi diversi. 
// Aggiungi elementi all’array che ha meno elementi fino a quando
//  ne avrà tanti quanti l’altro

let frutti = ["Mela", "Banana", "Arancia", "Kiwi", "Uva", "Fragola"]
let colori = ["Rosso", "Blu", "Verde", "Giallo"]
let buttonA= document.getElementById("btn")
let inserisciColore;

for(let i=0 ; frutti.length !== colori.length; i++){
 inserisciColore =  prompt("inserisci un colore")
 colori.push (inserisciColore)
 console.log(colori)
}

buttonA.addEventListener("click", function(){
    location.reload()

})






// Ciclo For
// snack 4
// Inserisci un numero, se è pari stampa il numero, se è 
// dispari stampa il numero successivo.






 let numero= prompt("inserisci un numero")
 let risultato = document.getElementById("rs")
 let i=0
 
 
    
    if (numero % 2 == 0){
        risultato.innerHTML = numero
    }
    else {
        risultato.innerHTML = parseInt(numero) + 1
    }
    










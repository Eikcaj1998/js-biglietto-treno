console.log('JS OK')
/* 
chiedo al viaggiatore quanti kilometri fara
calcolo 0.21 per ogni km che percorrera
inserisco il costo 
chiedo al viaggiatore la sua eta
se è minore di 18 o maggiore di 65 applico uno sconto
se minore di 18 applico lo sconto del 20%
se e mmaggiore di 65 applico lo sconto del 40%
altrimenti se e tra 19 e 64 non applico nulla
calcolo lo sconto se è presente
inserisco il valore dello sconto
faccio la sottrazione
inserisco il costo con lo sconto
 */
    //Km
const kmNumber = parseInt (prompt('Inserisci qui il numero dei chilometri che farai'));
const kmPrice = 0.21;
let ticketPrice = kmNumber * kmPrice;
    //Age
const passengerAge = parseInt(prompt('Inserisci qui il l\'età'));

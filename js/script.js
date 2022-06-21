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
const kmNumber = parseInt ( prompt ('Inserisci qui il numero dei chilometri che farai','20'));
console.log(kmNumber)
const kmPrice = 0.21;
console.log(kmPrice)
let ticketPrice = kmNumber * kmPrice;
console.log(ticketPrice)
    //Age
const passengerAge = parseInt ( prompt ('Inserisci qui il l\'età','25'));
console.log(passengerAge)
let message = `Il costo del biglietto e di `;
let ticketAge =  `sconto di `;
if (passengerAge < 18 || passengerAge > 65){
     //minore di 18 anni
    if(passengerAge < 18){
        //sconto 20%
        let discount = ((ticketPrice * 20) / 100);
        console.log(ticketAge + discount)
        //totale - sconto
        let discountedTicketPrice = ticketPrice - discount;
        let discountedPrice = discountedTicketPrice.toFixed(2);
        console.log(discountedPrice) 
                // prezzo finale
        message = message + discountedPrice
         //minore di 65 anni
    } else if (passengerAge > 65) {
         //sconto 40%
    let discount = ((ticketPrice * 40) / 100);
    console.log(ticketAge + discount)
        //totale - sconto
    let discountedTicketPrice = ticketPrice - discount;
    let discountedPrice = discountedTicketPrice.toFixed(2);
    console.log(discountedPrice)
    // prezzo finale
    message = message + discountedPrice
        }   
        //maggiore di 18 anni ma minore di 65 anni
}else {
    let basePrice = ticketPrice.toFixed(2);
    console.log(basePrice);
    message = message + basePrice
}
console.log(message);

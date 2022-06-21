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
const kmPrice = 0.21;
let ticketPrice = kmNumber * kmPrice;
    //Age
const passengerAge = parseInt ( prompt ('Inserisci qui il l\'età','23'));
let message = `Il costo del biglietto e di `;
if (passengerAge<18 && passengerAge>65){
     //minore di 18 anni
    if(passengerAge < 18){
        //sconto 20%
        let discount = ((ticketPrice * 20) / 100);
        console.log(discount)
        //totale - sconto
        let discountedTicketPrice = ticketPrice - discount;
        console.log(discountedTicketPrice)
        // prezzo finale
        let discountedPrice = discountedTicketPrice.toFixed(2);
        console.log(discountedPrice) 
        message = message + discountedPrice
    }
        //maggiore di 18 anni ma minore di 65 anni
}else {
  console.log (ticketPrice)
  message = message + ticketPrice
}

console.log(message);

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }

  return gifts;
}

wrapGifts(gifts); 

const names = ["Ada", "Brendan", "Ali"];
const eventName = "birthday"
const thankYouCards = []

function writeCards(names, eventName) {

    for (let i = 0; i < names.length; i++) {
        thankYouCards.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
        debugger;
    };
    console.log(thankYouCards);
    return thankYouCards;
}

writeCards(names, eventName);

let posInt = Math.floor(Math.random() *100)

function countDown(posInt) {
    while (posInt >= 0) {
        console.log(posInt--);
    }
    return posInt;
}

countDown(posInt);
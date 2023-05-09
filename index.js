// Code your solutions in this file
for (let age = 30; age <= 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
}
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
    }
}
    ReadableStreamDefaultController
wrapGifts(gifts);

let names = []
function writeCards(names) {
    let cards = []
    for (let i = 0; i < names.length; i++) {
      cards[i] = `Thank you, ${names[i]}, for the wonderful surprise gift!`
    }
    return cards;
}
writeCards(names);

function countDown(n) {
    let count = n
    while (count >=0) {
      console.log(count--);
    }
}
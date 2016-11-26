const hand = require('../lib/hand');

const cardsHigh = [{
  "rank": "6",
  "suit": "hearts"
}, {
  "rank": "Q",
  "suit": "spades"
}, {
  "rank": "K",
  "suit": "hearts"
}];

const cardsPair = [{
  "rank": "6",
  "suit": "hearts"
}, {
  "rank": "Q",
  "suit": "spades"
}, {
  "rank": "K",
  "suit": "hearts"
}, {
  "rank": "K",
  "suit": "spades"
}, {
  "rank": "A",
  "suit": "spades"
}]

console.log(hand(cardsHigh));
console.log(hand(cardsPair));

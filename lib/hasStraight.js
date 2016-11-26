module.exports = hasSequence = (cards = [], quantity = 5) => {

  const cardTypes = {
    '2': 2,
    '3': 3,
    '4': 4,
    '5': 5,
    '6': 6,
    '7': 7,
    '8': 8,
    '9': 9,
    '10': 10,
    'J': 11,
    'Q': 12,
    'K': 13,
    'A': 14
  };

  const ranks = cards.map(card => cardTypes[card.rank]);
  ranks.sort( (a,b) => a - b);

  

  return ranks;
}

const cards = [
  { rank: 'A' },
  { rank: '7' },
  { rank: '3' },
  { rank: 'K' }
];

console.log( hasStraight(cards) );

module.exports = hasPair = (cards) => {
  const ranks = {};

  cards.forEach(card => {
    const quantity = ranks[card.rank];

    if (quantity === undefined) {
      ranks[card.rank] = 1;
    }
    else {
      ranks[card.rank] = quantity + 1;
    }
  });

  console.log(ranks);

  for (let r in ranks) {
    if (ranks[r] > 1)
      return r;
  }

  return null;
}

// const cards = [
//   { rank: 'Q' },
//   { rank: 'A' },
//   { rank: 'K' }
// ];
//
// console.log( hasPair(cards) );

module.exports = hasSameSuits = (cards = [], quantity = 0) => {
  const suits = {
    hearts: 0,
    spades: 0,
    diamonds: 0,
    clubs: 0
  };

  cards.forEach(card => suits[card.suit]++);

  for (s in suits)
    if (suits[s] >= quantity)
      return true;

  return false;
}

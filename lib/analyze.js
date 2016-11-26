const format = require('./format');

const NONE = 'NONE';
const PAIR = 'PAIR';
const THREE = 'THREE';
const FOUR = 'FOUR';
const FIVE = 'FIVE';

const hasSameRanks = cards => {
  const ranks = cards.map(({rank}) => rank);
  const uniques = format.uniq(ranks);

  console.log(ranks.length - uniques.length)

  switch (ranks.length - uniques.length) {
    case 1:
      return PAIR;

    case 2:
      return THREE;

    case 3:
      return FOUR;

    case 4:
      return FIVE;

    default:
      return NONE;
  }
};

module.exports = {
  constants: {NONE, PAIR, THREE, FOUR, FIVE},
  fn: {hasSameRanks}
};

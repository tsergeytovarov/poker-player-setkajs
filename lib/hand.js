const ev = require('poker-evaluator');

const go = cards => {
  try {
    const a = cards.map(({rank, suit}) => `${rank}${suit[0]}`);
    return ev.evalHand(a);
  } catch (err) {
    return 0;
  }
};

module.exports = go;

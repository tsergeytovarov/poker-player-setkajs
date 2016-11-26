const ev = require('latest-poker-evaluator');

const go = cards => {
  try {
    const a = cards.map(({rank, suit}) => `${rank}${suit[0]}`);
    return ev.evalHand(a);
  } catch (err) {
    console.error(err);
    return {handName: 'high card', value: 0};
  }
};

module.exports = go;

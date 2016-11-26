const r = require('sync-request');

const go = cards => {
  try {
    const res = r('GET', 'http://rainman.leanpoker.org/rank', {qs: {cards: JSON.stringify(cards)}});
    return JSON.parse(res.getBody('utf8'));
  } catch (err) {
    return 0;
  }
}

module.exports = go;

const axios = require('axios');

const go = cards =>
  axios.get('http://rainman.leanpoker.org/rank', {params: {cards: JSON.stringify(cards)}})
    .then(res => res.data)
    .catch(err => err);

module.exports = go;

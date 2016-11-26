Array.prototype.getUnique = function(){
   var u = {}, a = [];
   for(var i = 0, l = this.length; i < l; ++i){
      if(u.hasOwnProperty(this[i])) {
         continue;
      }
      a.push(this[i]);
      u[this[i]] = 1;
   }
   return a;
};

const composeCards = (communityCards, holeCards) => communityCards.concat(holeCards);

const hasSameRanks = cards => {
  const ranks = cards.map(({rank}) => rank);
  const uniques = ranks.getUnique();

  return ranks.length !== uniques.length ? true : false;
};

class Player {
  static get VERSION() {
    const version = 1.3;
    return `v${version}`;
  }

  static betRequest(gameState) {
    const { current_buy_in } = gameState;
    const myPlayer = gameState.players[gameState.in_action];
    const cards = composeCards(gameState.community_cards, myPlayer.hole_cards);
    const rand = Math.random();

    let bet;
    console.log(rand);

    console.log('\n\nActive cards:\n', cards, '\n\n')

    if (hasSameRanks(cards)) {
      return (current_buy_in - myPlayer.bet) + gameState.minimum_raise;
    } else {
      return bet = current_buy_in - myPlayer.bet;
    }

    // Call
    // if (rand < 0.5) {
      // bet = current_buy_in - myPlayer.bet;
    // }

    // Raise
    //else {
      // bet = (current_buy_in - myPlayer.bet) + gameState.minimum_raise;
    //}

    // return bet;
  }

  static showdown(gameState) {
  }
}

module.exports = Player;

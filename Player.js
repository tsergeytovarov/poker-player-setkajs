const hasSameSuits = require('./lib/hasSameSuits');
const format = require('./lib/format');
const analyze = require('./lib/analyze');

class Player {
  static get VERSION() {
    const version = 2.1;
    return `v${version}`;
  }

  static betRequest(gameState) {
    const { current_buy_in } = gameState;
    const myPlayer = gameState.players[gameState.in_action];
    const cards = format.compose(gameState.community_cards, myPlayer.hole_cards);
    const round = gameState.round;

    const ranksResult = analyze.fn.hasSameRanks(cards);
    const PAIR = ranksResult === analyze.constants.PAIR;
    const THREE = ranksResult === analyze.constants.THREE;
    const FOUR = ranksResult === analyze.constants.THREE;

    const call = current_buy_in - myPlayer.bet;
    const raise = (current_buy_in - myPlayer.bet) + gameState.minimum_raise;
    const allIn = myPlayer.stack;

    switch (round) {
      case 0: {
        return call;
      }

      case 1:
      case 2:
      case 3: {
        if (PAIR || THREE || hasSameSuits(cards, 4)) {
          return call;
        } else if (FOUR || hasSameSuits(cards, 5)) {
          return allIn;
        } else {
          return 0;
        }
      }

      case 4: {
        if (PAIR || THREE ) {
          return call;
        } else if (FOUR || hasSameSuits(cards, 5)) {
          return allIn;
        } else {
          return 0;
        }
      }

    }

    console.log('\n\nActive cards:\n', cards, '\n\n')
  }

  static showdown(gameState) {
  }
}

module.exports = Player;

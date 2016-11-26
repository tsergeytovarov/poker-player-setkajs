const hasSameSuits = require('./lib/hasSameSuits');
const format = require('./lib/format');
const analyze = require('./lib/analyze');
// const rainman = require('./lib/rainman');
const hand = require('./lib/hand');
const checkAllIn = require('./lib/checkAllIn');

class Player {
  static get VERSION() {
    const version = 4.6;
    return `v${version}`;
  }

  static betRequest(gameState) {
    console.log(gameState);

    const { current_buy_in } = gameState;
    const myPlayer = gameState.players[gameState.in_action];
    const cards = format.compose(gameState.community_cards, myPlayer.hole_cards);
    // const round = gameState.round;

    // Rounds
    let round;
    switch (gameState.community_cards.length) {
      case 0: round = 0; break;
      case 3: round = 1; break;
      case 4: round = 2; break;
      case 5: round = 3; break;
    }

    // Ranks
    // const ranksResult = analyze.fn.hasSameRanks(cards);
    // const PAIR = ranksResult === analyze.constants.PAIR;
    // const THREE = ranksResult === analyze.constants.THREE;
    // const FOUR = ranksResult === analyze.constants.THREE;
    const handResult = hand(cards).handName;
    const HIGH_CARD = handResult === 'high card';
    const PAIR = handResult === 'one pair';
    const TWO = handResult === 'two pairs';
    const THREE = handResult === 'three of a kind';
    const FOUR = handResult === 'four of a kind';
    const STRAIGHT = handResult === 'straight';
    const FLUSH = handResult === 'flush';
    const FULL_HOUSE = handResult === 'full house';

    const call = current_buy_in - myPlayer.bet;
    const raise = (current_buy_in - myPlayer.bet) + gameState.minimum_raise;
    const allIn = myPlayer.stack;

    switch (round) {
      case 0:
        return call;

      case 1:
        return call;

      case 2: {
        // let res = rainman(cards);
        // if (res === 0) {
        //   return call;
        // }
        // else {
        //   const rank = res.rank;
        //   if (rank > 0 && rank <= 3)
        //     return call;
        //   else if (rank > 3 && rank < 7)
        //     return raise;
        //   else
        //     return 0;
        // }
        // return call;
        if (checkAllIn(gameState.players)) {
          return 0;
        }
        else if (PAIR || TWO || THREE || hasSameSuits(cards, 4)) {
          return call;
        }
        else if (FOUR || FLUSH || STRAIGHT || FULL_HOUSE) {
          return call;
        }
        else {
          return 0;
        }
      }

      case 3: {
        // let res = rainman(cards);
        // if (res === 0) {
        //   return call;
        // }
        // else {
        //   const rank = res.rank;
        //   if (rank > 0 && rank <= 3)
        //     return call;
        //   else if (rank > 3 && rank < 7)
        //     return raise;
        //   else
        //     return 0;
        // }
        // return call;
        if (checkAllIn(gameState.players)) {
          return 0;
        }
        else if (PAIR || TWO || THREE) {
          return 0;
        }
        // else if (hasSameSuits(cards, 5)) {
        //   return call;
        // }
        else if (FOUR || FLUSH || STRAIGHT || FULL_HOUSE) {
          return call;
        }
        else {
          return 0;
        }
      }

      default:
        return call;
    }

    console.log('\n\nActive cards:\n', cards, '\n\n')
  }

  static showdown(gameState) {
  }
}

module.exports = Player;

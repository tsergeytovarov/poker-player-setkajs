const hasSameSuits = require('./lib/hasSameSuits');
const format = require('./lib/format');
const analyze = require('./lib/analyze');
const hand = require('./lib/hand');
const checkAllIn = require('./lib/checkAllIn');

class Player {
  static get VERSION() {
    return 'v11';
  }

  static betRequest(gameState) {
    console.log(gameState);

    const { current_buy_in } = gameState;
    const myPlayer = gameState.players[gameState.in_action];
    const cards = format.compose(gameState.community_cards, myPlayer.hole_cards);

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
    const handResult = hand(cards);
    const handName = handResult.handName;
    const handValue = handResult.value;
    console.log(handName);
    const HIGH_CARD = handName === 'high card';
    const PAIR = handName === 'one pair';
    const TWO = handName === 'two pairs';
    const THREE = handName === 'three of a kind';
    const FOUR = handName === 'four of a kind';
    const STRAIGHT = handName === 'straight';
    const FLUSH = handName === 'flush';
    const FULL_HOUSE = handName === 'full house';
    const STRAIGHT_FLUSH = handName === 'straight flush';

    const call = current_buy_in - myPlayer.bet;
    const raise = (current_buy_in - myPlayer.bet) + gameState.minimum_raise;
    const allIn = myPlayer.stack;

    switch (round) {
      case 0:
        return call;

      case 1:
      case 2:
        if (STRAIGHT_FLUSH || FOUR || FULL_HOUSE) {
          return allIn;
        }
        if (THREE || STRAIGHT || FLUSH) {
          return raise;
        }
        if ( (PAIR && handValue > 9600) || TWO || hasSameSuits(cards, 4)) {
          return call;
        }
        return 0;

      case 3:
        if (STRAIGHT_FLUSH || FOUR || FULL_HOUSE) {
          return allIn;
        }
        if (THREE || STRAIGHT || FLUSH) {
          return raise;
        }
        if ( (PAIR && handValue > 9600) || TWO) {
          return call;
        }
        return 0;

      default:
        return call;
    }

    console.log('\n\nActive cards:\n', cards, '\n\n')
  }

  static showdown(gameState) {
    console.log('>>> SHOWDOWN');
    console.log(gameState);
    console.log('<<< SHOWDOWN');
  }
}

module.exports = Player;

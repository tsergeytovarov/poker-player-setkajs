const hasSameSuits = require('./lib/hasSameSuits');
const format = require('./lib/format');
const analyze = require('./lib/format');

class Player {
  static get VERSION() {
    const version = 2;
    return `v${version}`;
  }

  static betRequest(gameState) {
    const { current_buy_in } = gameState;
    const myPlayer = gameState.players[gameState.in_action];
    let bet;

    const round = game_state.round;

switch (round) {
  case 0: {
    // call
    return;
  }

  case 1 {
    if (isPair || isThree || hasFour) {
      // call
    } else if (isFour || Four) {
      // allin
    } else {
      return 0;
    }
    return;
  }

  case 2: {
    if (isPair || isThree || SameSuite(4)) {
      // call
    } else if (isFour || SameSuite(5) ) {
      // allin
    } else {
      return 0;
    }
    return;
  }

  case 3: {
    if (isPair || isThree || SameSuite(4)) {
      // call
    } else if (isFour || SameSuite(5) ) {
      // allin
    } else {
      return 0;
    }
    return;
  }

  case 4: {
    if (isPair || isThree) {
      // call
    } else if (isFour || SameSuite(5) ) {
      // allin
    } else {
      return 0;
    }
  }

}

    // // Call
    // if (rand < 0.5) {
    //   bet = current_buy_in - myPlayer.bet;
    // }
    //
    // // Raise
    // else {
    //   bet = (current_buy_in - myPlayer.bet) + gameState.minimum_raise;
    // }

    return bet;
  }

  static showdown(gameState) {
  }
}

module.exports = Player;

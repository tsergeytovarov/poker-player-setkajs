class Player {
  static get VERSION() {
    return '1';
  }

  static betRequest(gameState) {
    const { current_buy_in } = gameState;
    const myPlayer = gameState.players[gameState.in_action];
    const rand = Math.random();

    let bet;
    console.log(rand);

    // Call
    if (rand < 0.5) {
      bet = current_buy_in - myPlayer.bet;
    }

    // Raise
    else {
      bet = (current_buy_in - myPlayer.bet) + gameState.minimum_raise;
    }

    return bet;
  }

  static showdown(gameState) {
  }
}

module.exports = Player;

module.exports = checkAllIn = (players) => {
  for (var i = 0; i < players.length; i++) {
    let player = players[i];
    if (player.bet == player.stack)
      return true;
  }

  return false;
}

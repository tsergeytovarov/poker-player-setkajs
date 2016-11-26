module.exports = checkAllIn = (players) => {
  for (let i = 0; i < players.length; i++) {
    const player = players[i];
    if (player.bet == player.stack)
      return true;
  }

  return false;
}

// const players = [
//   { bet: 200, stack: 100 },
//   { bet: 100, stack: 100 }
// ];
//
// console.log( checkAllIn(players) );

const players = [
  {
    dhoni: 100,
    kohli: 23,
    rohit: 34,
  },
  {
    dhoni: 23,
    hardik: 39,
    rohit: 23,
  },
  {
    dhoni: 20,
    rohit: 34,
    hardik: 44,
  },
  {
    rohit: 23,
    ishan: 1,
  },
];

const playerSum = players.reduce((acc, currentPlayer) => {
  for (let playerName in currentPlayer) {
    if (acc[playerName]) {
      acc[playerName] += currentPlayer[playerName];
    } else {
      acc[playerName] = currentPlayer[playerName];
    }
  }
  return acc;
}, {});

let highestScorer;
let highestScore = 0;
for (let playerName in playerSum) {
  if (highestScore < playerSum[playerName]) {
    highestScore = playerSum[playerName];
    highestScorer = playerName;
  }
}
console.log(playerSum, highestScorer, highestScore);

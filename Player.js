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

// Create an object to store the sum of runs for each player
const playerSum = {};

// Loop through each object in the players array
players.forEach((player) => {
  // Loop through each property (player name) in the current object
  for (const playerName in player) {
    // Check if the player is already in the playerSum object
    if (playerSum[playerName]) {
      // If yes, add the runs to the existing sum
      playerSum[playerName] += player[playerName];
    } else {
      // If no, initialize the sum with the runs
      playerSum[playerName] = player[playerName];
    }
  }
});

// Now, playerSum object contains the sum of runs for each player
console.log(playerSum);

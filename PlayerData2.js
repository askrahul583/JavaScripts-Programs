const indianPlayers = [
  {
    playerName: "Virat Kohli",
    battingStats: {
      matchesPlayed: 254,
      runsScored: 12169,
      centuries: 43,
      fifties: 62,
      recentMatches: [
        {
          opponent: "Australia",
          runsScored: 89,
          date: "2023-09-15",
        },
        {
          opponent: "England",
          runsScored: 115,
          date: "2023-09-10",
        },
      ],
    },
    bowlingStats: null,
    awards: [
      {
        name: "Sir Garfield Sobers Trophy",
        year: 2017,
      },
      {
        name: "Rajiv Gandhi Khel Ratna",
        year: 2018,
      },
    ],
  },
  {
    playerName: "Rohit Sharma",
    battingStats: {
      matchesPlayed: 227,
      runsScored: 9205,
      centuries: 29,
      fifties: 43,
      recentMatches: [
        {
          opponent: "Pakistan",
          runsScored: 102,
          date: "2023-09-12",
        },
        {
          opponent: "Sri Lanka",
          runsScored: 78,
          date: "2023-09-08",
        },
      ],
    },
    bowlingStats: null,
    awards: [
      {
        name: "Arjuna Award",
        year: 2015,
      },
    ],
  },
  {
    playerName: "Jasprit Bumrah",
    battingStats: null,
    bowlingStats: {
      matchesPlayed: 71,
      wickets: 238,
      bestBowlingFigure: "6/27",
      economyRate: 4.67,
      recentMatches: [
        {
          opponent: "New Zealand",
          wicketsTaken: 4,
          date: "2023-09-14",
        },
        {
          opponent: "South Africa",
          wicketsTaken: 3,
          date: "2023-09-09",
        },
      ],
    },
  },
  {
    playerName: "Ravindra Jadeja",
    battingStats: {
      matchesPlayed: 169,
      runsScored: 2435,
      centuries: 1,
      fifties: 15,
      recentMatches: [
        {
          opponent: "England",
          runsScored: 68,
          date: "2023-09-11",
        },
        {
          opponent: "Australia",
          runsScored: 46,
          date: "2023-09-05",
        },
      ],
    },
    bowlingStats: {
      matchesPlayed: 168,
      wickets: 220,
      bestBowlingFigure: "5/36",
      economyRate: 4.89,
      recentMatches: [
        {
          opponent: "Pakistan",
          wicketsTaken: 2,
          date: "2023-09-13",
        },
        {
          opponent: "Sri Lanka",
          wicketsTaken: 3,
          date: "2023-09-07",
        },
      ],
    },
  },
  {
    playerName: "Shikhar Dhawan",
    battingStats: {
      matchesPlayed: 145,
      runsScored: 5977,
      centuries: 17,
      fifties: 34,
      recentMatches: [
        {
          opponent: "West Indies",
          runsScored: 56,
          date: "2023-09-10",
        },
        {
          opponent: "Bangladesh",
          runsScored: 42,
          date: "2023-09-06",
        },
      ],
    },
    bowlingStats: null,
  },
];

indianPlayers.forEach((player) => {
  if (player.battingStats && player.battingStats.recentMatches) {
    const scores = player.battingStats.recentMatches.map(
      (match) => match.runsScored || 0
    );
    const sum = scores.reduce((acc, score) => acc + score, 0);
    player.battingStats.recentMatchesTotal = sum;
  }
});

console.log(indianPlayers);

let highestScorer = null;
let highestScore = 0;

// Iterate through each player and their recentMatches
indianPlayers.forEach((player) => {
  if (player.battingStats && player.battingStats.recentMatches) {
    player.battingStats.recentMatches.forEach((match) => {
      if (match.runsScored && match.runsScored > highestScore) {
        highestScore = match.runsScored;
        highestScorer = player.playerName;
      }
    });
  }
});

console.log(
  `The highest scorer in recent matches is ${highestScorer} with a score of ${highestScore} runs.`
);

let highestScorerPlayer = null;
let highestTotalRuns = 0;

// Iterate through each player and their recentMatches
indianPlayers.forEach((player) => {
  if (player.battingStats && player.battingStats.recentMatches) {
    const totalRuns = player.battingStats.recentMatches.reduce((sum, match) => {
      return sum + (match.runsScored || 0);
    }, 0);

    if (totalRuns > highestTotalRuns) {
      highestTotalRuns = totalRuns;
      highestScorerPlayer = player.playerName;
    }
  }
});

console.log(
  `The highest scorer in recent matches by total runs scored is ${highestScorerPlayer} with a total of ${highestTotalRuns} runs.`
);

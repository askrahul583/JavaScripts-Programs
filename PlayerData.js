const indianPlayers = [
    {
        playerName: "Virat Kohli",
        strikeRate: 93.17,
        wickets:5,
        scores: [63, 104, 86, 120, 89]
    },
    {
        playerName: "Rohit Sharma",
        strikeRate: 88.92,
        wickets:8,
        scores: [68, 102, 57, 124, 89]
    },
    {
        playerName: "Shikhar Dhawan",
        strikeRate: 93.49,
        wickets:0,
        scores: [76, 98, 45, 112, 68]
    },
    {
        playerName: "Shubhman Gill",
        strikeRate: 87.4,
        wickets: 104,
        scores: [76, 98, 52, 122, 68]
    },
    {
        playerName: "Ravindra Jadeja",
        strikeRate: 86.59,
        scores: [34, 72, 51, 46, 88],
        wickets: 189,
    }
];

const data = indianPlayers.map((player)=>{
    const TotalRuns = player.scores.reduce((acc,cur)=>{
        return acc+cur
    },0)

    let avgScore = TotalRuns / player.scores.length
    return {...player, totalRuns: TotalRuns,avgScore}
})

// console.log(data)

const result1 = data.slice().sort((a,b)=>{
    return b.totalRuns - a.totalRuns
})

const result2 = data.slice().sort((a,b)=>{
    return b.wickets - a.wickets
})

console.log(result2[0].playerName)
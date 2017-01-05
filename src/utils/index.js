const goodAndEvilNumbers = [
    {maxGood: 3, maxEvil: 2},
    {maxGood: 4, maxEvil: 2},
    {maxGood: 4, maxEvil: 3},
    {maxGood: 5, maxEvil: 3},
    {maxGood: 6, maxEvil: 3},
    {maxGood: 6, maxEvil: 4}
]

export const getMaxNumberOfGoodAndEvilPlayers = numPlayers => goodAndEvilNumbers[numPlayers - 5]

const playersPerQuest = [
    [2, 3, 2, 3, 3],
    [2, 3, 4, 3, 4],
    [2, 3, 3, 4, 4],
    [3, 4, 4, 5, 5],
    [3, 4, 4, 5, 5],
    [3, 4, 4, 5, 5]
]

export const getPartySizeForQuest = (numPlayers, questNumber) => playersPerQuest[numPlayers - 5][questNumber - 1]
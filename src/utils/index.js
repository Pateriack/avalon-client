const goodAndEvilNumbers = [
    {maxGood: 3, maxEvil: 2},
    {maxGood: 4, maxEvil: 2},
    {maxGood: 4, maxEvil: 3},
    {maxGood: 5, maxEvil: 3},
    {maxGood: 6, maxEvil: 3},
    {maxGood: 6, maxEvil: 4}
]

export const getMaxNumberOfGoodAndEvilPlayers = numPlayers => goodAndEvilNumbers[numPlayers - 5]
import digipogData from './data/digipogData'

export const getRandomPogs = (pogArr, amountToReturn) => {
  let randomPogs = []
  for (let i = 0; i < amountToReturn; i++) {
    const r = Math.floor(Math.random() * pogArr.length)
    randomPogs.push(pogArr[r])
  }
  return randomPogs
}

export const addToCollection = (pogArr) => {
  let aquiredPogs = {}
  pogArr.forEach((pog) => {
    if (aquiredPogs[pog.id]) {
      aquiredPogs[pog.id] = aquiredPogs[pog.id] + 1
    } else {
      aquiredPogs[pog.id] = 1
    }
  })
  return aquiredPogs
}

export const setOpponentPogOnStack = (pogLevel, chancePercent, chanceLevel) => {
  const pl = parseInt(pogLevel)
  const willSetBetterPog = chancePercent && chancePercent > Math.floor(Math.random() * 100)
  let opponentPogPool = []
  if (willSetBetterPog) {
    const newPogLevel = Math.floor(Math.random() * chanceLevel + 1) + pl
    opponentPogPool = digipogData[newPogLevel]
  } else {
    opponentPogPool = digipogData[pl]
  }
  return opponentPogPool[Math.floor(Math.random() * opponentPogPool.length)]
} 
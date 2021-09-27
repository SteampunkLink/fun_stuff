import digipogData, { slammerData } from './digipogData'

export const convertPogIDtoPogObject = (id) => {
  const pl = parseInt(id.split("-")[0])
  const pi = parseInt(id.split("-")[1])
  return digipogData[pl][pi]
}

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

export const setOpponentSlammer = (slammerLevel) => {
  let slammerResult
  if (slammerLevel === 0) {
    slammerResult = 0
  } else if (slammerLevel > 16) {
    slammerResult = 16
  } else if (slammerLevel > 10) {
    slammerResult = Math.floor(Math.random() * (15 - 11) + 11)
  } else if (slammerLevel > 5) {
    slammerResult = Math.floor(Math.random() * (10 - 6) + 6)
  } else {
    slammerResult = Math.floor(Math.random() * (5 - 1) + 1)
  }
  return slammerResult
}

export const slam = (stack, slammer, bonus) => {
  let strength = slammerData[slammer].strength + bonus
  let power = slammerData[slammer].power
  let pogsKnockedDown = []
  for (let i = stack.length; i > 0; i--) {
    if (strength < 1 || power < 1) {
      break
    }

    const depth = stack.length - i
    const pogLevel = parseInt(stack[i - 1].split('-')[0])
    const rando = Math.floor(Math.random() * (pogLevel - 1) + 1)

    strength = strength - ((5 * (depth * .1)) + (pogLevel + 1) + rando)
    power = power - 1

    const pogToPush = convertPogIDtoPogObject(stack[i - 1])

    pogsKnockedDown.push(pogToPush)
  }

  return pogsKnockedDown
}
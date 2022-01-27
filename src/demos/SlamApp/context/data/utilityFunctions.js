import CoinsMasterList from "./slamCoinMasterList"
import slamPucks from "./slamPucks";

// shuffle function
export const shuffle = (array) => {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

// returns an amount of random Khawgz from a provided array. Khawgz are not removed from array if added to result
export const getRandomCoins = (coinsArr, amountToReturn) => {
  let randomCoins = []
  for (let i = 0; i < amountToReturn; i++) {
    const r = Math.floor(Math.random() * coinsArr.length)
    randomCoins.push(coinsArr[r].id)
  }
  return randomCoins
}

// creates a booster pack from the player with chances to return pogs of any level
export const getBoosterPack = (amountToReturn) => {
  let boosterPack = []
  for (let i = 0; i < amountToReturn; i++) {
    let returnLevel
    const rando = Math.floor(Math.random() * (100 + 1))
    if (rando < 101) returnLevel = 1
    if (rando < 81) returnLevel = 7
    if (rando < 75) returnLevel = 9
    if (rando < 74) returnLevel = 5
    if (rando < 64) returnLevel = 4
    if (rando < 54) returnLevel = 10
    if (rando < 53) returnLevel = 2
    if (rando < 33) returnLevel = 8
    if (rando < 32) returnLevel = 3
    if (rando < 22) returnLevel = 6
    if (rando < 16) returnLevel = 0
    const coinsToAdd = getRandomCoins(CoinsMasterList[returnLevel], 1)
    boosterPack.push(coinsToAdd[0])
  }
  return boosterPack
}

// transform an array of SlamCoins to an array of id and qty
export const flattenCoinArray = (coinArr) => {
  let flattenedArr = []
  coinArr.forEach((coin) => {
    const coinIndex = flattenedArr.findIndex((i) => i.id === coin)
    if (coinIndex > -1) { flattenedArr[coinIndex].qty += 1 }
    else { flattenedArr.push({ id: coin, qty: 1 }) }
  })
  return flattenedArr
}

// return coin from id
export const getCoinFromId = (coinId) => {
  const coinIndex = parseInt(coinId.split("-")[0])
  const coinLevel = parseInt(coinId.split("-")[1])
  return CoinsMasterList[coinLevel][coinIndex]
}

// put opponent coin on the stack
export const addOpponentCoinToStack = (coinId) => {
  const coinLevel = parseInt(coinId.split("-")[1])
  let coinArr = CoinsMasterList[coinLevel]
  if (coinLevel + 1 < CoinsMasterList.length) {
    coinArr = coinArr.concat(CoinsMasterList[coinLevel + 1])
  }
  return getRandomCoins(coinArr, 1)
}

// slam the stack
export const slam = (stack, puckId, bonus) => {
  let resultStack = stack

  const puckIndex = parseInt(puckId.split("-")[1])
  const puckUsed = slamPucks[puckIndex]

  let strength = puckUsed.strength + bonus
  let power = puckUsed.power
  let coinsKnockedDown = []

  // calculate coins knocked down
  for (let i = stack.length; i > 0; i--) {
    if (strength < 1 || power < 1 || !resultStack.length) {
      break
    }
    const depth = resultStack.length - i
    const coinLevel = parseInt(resultStack[i - 1].split('-')[0])
    const rando = Math.floor(Math.random() * (coinLevel - 1) + 1)

    strength = strength - ((5 * (depth * .1)) + (coinLevel + 1) + rando)
    power = power - 1

    const pogToPush = resultStack[i - 1]
    coinsKnockedDown.push(pogToPush)
  }

  return {coinsKnockedDown}
}

// when a turn ends, check if the game should keep going and whose turn it should be
export const checkGameStatusAndUpdatePhase = (phase, stack) => {
  let newPhase = ""
  if (phase === "GameOver") {
    newPhase = "GameOver"
  }

  if (phase === "PlayerResult") {
    newPhase = "OpponentTurn"
  }

  if (phase === "OpponentTurn") {
    newPhase = "PlayerInput"
  }
  
  if (!stack.length) {
    newPhase = "GameOver"
  }

  return newPhase
}
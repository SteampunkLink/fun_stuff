export const slamLevels = [
  {
    level: 0,
    color: "white",
    credits: 0,
    hexCode: "white"
  },
  {
    level: 1,
    color: "blue",
    credits: 6,
    hexCode: "#485cab"
  },
  {
    level: 2,
    color: "green",
    credits: 12,
    hexCode: "#008A64"
  },
  {
    level: 3,
    color: "yellow",
    credits: 18,
    hexCode: "#F9F871"
  },
  {
    level: 4,
    color: "orange",
    credits: 24,
    hexCode: "#FFC163"
  },
  {
    level: 5,
    color: "red",
    credits: 30,
    hexCode: "#A73C48"
  },
  {
    level: 6,
    color: "purple",
    credits: 36,
    hexCode: "#A85FB9"
  },
  {
    level: 7,
    color: "black",
    credits: 42,
    hexCode: "linear-gradient(196deg, rgba(27,24,18,1) 0%, rgba(31,34,38,1) 25%, rgba(58,60,60,1) 58%, rgba(65,69,72,1) 99%)"
  },
  {
    level: 8,
    color: "bronze",
    credits: 48,
    hexCode: "linear-gradient(196deg, rgba(128,74,0,1) 20%, rgba(137,94,26,1) 38%, rgba(156,122,60,1) 70%, rgba(176,141,87,1) 99%)"
  },
  {
    level: 9,
    color: "silver",
    credits: 54,
    hexCode: "linear-gradient(196deg, rgba(113,112,108,1) 26%, rgba(154,154,150,1) 50%, rgba(195,195,193,1) 80%, rgba(216,216,214,1) 99%)"
  },
  {
    level: 10,
    color: "gold",
    credits: 60,
    hexCode: "linear-gradient(196deg, rgba(218,145,0,1) 26%, rgba(235,170,1,1) 50%, rgba(244,182,1,1) 80%, rgba(255,229,144,1) 99%)"
  },
]

// Creates a die from that will be referenced by player Khawgz
class SlamCapDie {
  constructor(idx, level, name, category) {
    this.id = `000${idx}`.slice(-4) + "-" + `0${level}`.slice(-2)
    this.name = name
    this.level = level
    this.category = category
    this.img = name.replace(/\s/g, '').toLowerCase()
  }
}

const baseCapNames = ["Yin Yang", "Skull", "8 Ball", "Pizza", "Roller Blade", "Tubular"]

const createCoinsMasterList = () => {
  let fullList = []
  for (let i = 0; i < slamLevels.length; i++) {
    fullList.push([])
    for (let j = 0; j < baseCapNames.length; j++) {
      const newEntry = new SlamCapDie(j, i, baseCapNames[j], "generic")
      fullList[i].push(newEntry)
    }
  }
  return fullList
}

const CoinsMasterList = createCoinsMasterList()

export default CoinsMasterList

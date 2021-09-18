import digipogWhite from "./digipogWhite"
import digipogBlue from "./digipogBlue"
import digipogGreen from "./digipogGreen"
import digipogYellow from "./digipogYellow"
import digipogOrange from "./digipogOrange"
import digipogRed from "./digipogRed"
import digipogPurple from "./digipogPurple"
import digipogBlack from "./digipogBlack"
import digipogBronze from "./digipogBronze"
import digipogSilver from "./digipogSilver"
import digipogGold from "./digipogGold"

const digipogLevels = [
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

const digipogData = [
  digipogWhite,
  digipogBlue,
  digipogGreen,
  digipogYellow,
  digipogOrange,
  digipogRed,
  digipogPurple,
  digipogBlack,
  digipogBronze,
  digipogSilver,
  digipogGold,
]

const slammerData = [
  {
    name: "Crappy Plastic",
    cost: 0,
    strength: 4,      // attack power
    power: 3,         // max number of targets per slam
    durability: 20,   // number of slams before it breaks
    boost: 3,         // amount of meter for power slam
    luck: 70,         // percent chance pog with flip
    description: "Hey, we all gotta start somewhere.",
    color: "#333",
  },
  {
    name: "Acceptable Plastic",
    cost: 20,
    strength: 10,      
    power: 5,         
    durability: 20,   
    boost: 3,         
    luck: 70,         
    description: "Reliable if unimpressive.",
    color: "#555",
  },
  {
    name: "Wood",
    cost: 40,
    strength: 10,      
    power: 5,         
    durability: 25,   
    boost: 3,         
    luck: 80,         
    description: "A tough slammer that seems lucky.",
    color: "#855e42",
  },
  {
    name: "Clay",
    cost: 60,
    strength: 14,      
    power: 10,         
    durability: 10,   
    boost: 5,         
    luck: 70,         
    description: "Suprisingly strong, but prone to breaking.",
    color: "#c2452d",
  },
  {
    name: "Rubber",
    cost: 80,
    strength: 20,      
    power: 10,         
    durability: 25,   
    boost: 5,         
    luck: 50,         
    description: "A durable slammer that can do anything, roughly half the time.",
    color: "#505072",
  },
  {
    name: "Astonishing Plastic",
    cost: 100,
    strength: 20,      
    power: 10,         
    durability: 25,   
    boost: 5,         
    luck: 70,         
    description: "Now we're talking.",
    color: "#E04481",
  },
  {
    name: "Aluminium",
    cost: 200,
    strength: 25,      
    power: 10,         
    durability: 25,   
    boost: 10,         
    luck: 70,         
    description: "A basic and reliable metal slammer.",
    color: "linear-gradient(196deg, rgba(121,117,117,1) 0%, rgba(235,235,235,1) 46%, rgba(38,37,32,1) 100%)",
  },
  {
    name: "Pewter",
    cost: 400,
    strength: 30,      
    power: 10,         
    durability: 35,   
    boost: 10,         
    luck: 70,         
    description: "A tough slammer that can last awhile.",
    color: "linear-gradient(196deg, rgba(121,117,117,1) 0%, rgba(38,26,26,1) 48%, rgba(89,89,88,1) 100%)",
  },
  {
    name: "Brass",
    cost: 600,
    strength: 35,      
    power: 15,         
    durability: 35,   
    boost: 10,         
    luck: 70,         
    description: "A tough slammer that can last awhile.",
    color: "linear-gradient(196deg, rgba(61,55,11,1) 13%, rgba(153,139,45,1) 67%, rgba(227,211,102,1) 100%)",
  },
  {
    name: "Steel",
    cost: 800,
    strength: 40,      
    power: 15,         
    durability: 40,   
    boost: 20,         
    luck: 70,         
    description: "A very tough and powerful slammer.",
    color: "linear-gradient(196deg, rgba(159,164,196,1) 13%, rgba(179,205,209,1) 100%)",
  },
  {
    name: "Titanium",
    cost: 1000,
    strength: 40,      
    power: 15,         
    durability: 40,   
    boost: 20,         
    luck: 70,         
    description: "A ridiculously strong material to be making slammers out of.",
    color: "linear-gradient(196deg, rgba(135,134,129,1) 0%, rgba(188,187,182,1) 40%, rgba(244,243,238,1) 100%)",
  },
  {
    name: "Saphire",
    cost: 2000,
    strength: 50,      
    power: 20,         
    durability: 40,   
    boost: 25,         
    luck: 70,         
    description: "An extravigant slammer, but quite strong and powerful.",
    color: "linear-gradient(196deg, rgba(115,115,116,1) 0%, rgba(26,48,218,1) 33%, rgba(0,3,28,1) 100%)",
  },
  {
    name: "Emerald",
    cost: 4000,
    strength: 50,      
    power: 20,         
    durability: 40,   
    boost: 25,         
    luck: 80,         
    description: "Another absurdly strong slammer that feels a bit lucky.",
    color: "linear-gradient(196deg, rgba(202,233,199,1) 0%, rgba(26,218,66,1) 29%, rgba(13,77,4,1) 93%)",
  },
  {
    name: "Ruby",
    cost: 6000,
    strength: 60,      
    power: 20,         
    durability: 50,   
    boost: 25,         
    luck: 70,         
    description: "Why are we even making slammers out of this?",
    color: "linear-gradient(196deg, rgba(233,199,199,1) 0%, rgba(218,26,26,1) 29%, rgba(77,4,4,1) 93%)",
  },
  {
    name: "Onyx",
    cost: 8000,
    strength: 65,      
    power: 20,         
    durability: 50,   
    boost: 30,         
    luck: 70,         
    description: "An astonishingly powerful slammer.",
    color: "linear-gradient(196deg, rgba(107,107,107,1) 0%, rgba(28,8,8,1) 29%, rgba(0,0,0,1) 93%)",
  },
  {
    name: "Diamond",
    cost: 10000,
    strength: 70,      
    power: 20,         
    durability: 60,   
    boost: 35,         
    luck: 70,         
    description: "Well, it'll be awhile before you need another one.",
    color: "linear-gradient(196deg, rgba(215,222,222,1) 0%, rgba(148,250,255,1) 29%, rgba(60,191,195,1) 93%)",
  },
  {
    name: "Mithrill",
    cost: 20000,
    strength: 75,      
    power: 20,         
    durability: 50,   
    boost: 35,         
    luck: 70,         
    description: "Where did we get this, anyway?",
    color: "linear-gradient(196deg, rgba(215,222,222,1) 0%, rgba(148,250,255,1) 94%)",
  },
  {
    name: "Unobtainium",
    cost: 40000,
    strength: 80,      
    power: 30,         
    durability: 60,   
    boost: 35,         
    luck: 80,         
    description: "Hope you like it. Apparently it's hard to get.",
    color: "linear-gradient(196deg, rgba(215,222,222,1) 0%, rgba(148,250,255,1) 94%)",
  },
  {
    name: "Adementium",
    cost: 60000,
    strength: 85,      
    power: 30,         
    durability: 70,   
    boost: 40,         
    luck: 80,         
    description: "It's practically unbreakable... practically.",
    color: "linear-gradient(196deg, rgba(215,222,222,1) 0%, rgba(148,250,255,1) 94%)",
  },
  {
    name: "Unbelievabrillium",
    cost: 80000,
    strength: 90,      
    power: 30,         
    durability: 70,   
    boost: 40,         
    luck: 90,         
    description: "It's hard to believe how strong this stuff is.",
    color: "linear-gradient(196deg, rgba(215,222,222,1) 0%, rgba(148,250,255,1) 94%)",
  },
  {
    name: "Dark Matter",
    cost: 100000,
    strength: 200,      
    power: 30,         
    durability: 1,   
    boost: 50,         
    luck: 100,         
    description: "It'll snag everything... once. Should we even be in the same room as this stuff?",
    color: "linear-gradient(196deg, rgba(60,60,60,1) 0%, rgba(0,0,0,1) 100%)",
  },
]

export default digipogData
export { digipogLevels, slammerData }
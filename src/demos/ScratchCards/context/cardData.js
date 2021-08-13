const cardData = [
  // {
  //   id: "lz6",
  //   game: "The Legend of Zelda",
  //   screen: 6,
  //   type: "long",
  //   background: "ZeldaScreen6.jpg",
  //   instructions: "ZeldaInst6.jpg",
  //   groups: [
  //     ["right", "right", "sword", "patras", "patras", "patras", "patras"],
  //     ["sword", "sword", "sword", "patras", "patras", "patras", "patras"],
  //   ],
  //   locations: [
  //     [55, 111, 152, 166, 157, 151, 103, 381, 334, 287, 293, 303, 340, 388],
  //     [67, 20, 5, 8, 11, 12, -12, -237, -270, -285, -276, -273, -284, -323],
  //   ],
  // },
  {
    id: "m1s1",
    game: "Super Mario Bros.",
    title: "vs. Goombas",
    screen: 1,
    type: "long",
    directory: "mario",
    directions: ["Find arrow to advance.", "Squash 3 Goombas.", "You must find three squashed Goombas and one arrow to win.", "Find three unsquished Goombas and you loose."],
    pictures: [
      { squash: "Find 3 to Win" },
      { goomba: "Find 3 and You Lose" },
      { right: "Find 1 to Advance" },
    ],
    groups: [
      ["right", "right", "goomba", "goomba", "goomba"],
      ["goomba", "squash", "squash", "squash"],
    ],
    locations: [
      ["60", "109", "108", "160", "159", "291", "341", "391", "439"],
      ["106", "59", "63", "-33", "-29", "-70", "-119", "-164", "-205"],
    ]
  },
  {
    id: "m1s3",
    game: "Super Mario Bros.",
    title: "vs. Bloopers",
    screen: 3,
    type: "long",
    directory: "mario",
    directions: ["Find 3 arrows to win.", "Uncover 3 Bloopers and you lose."],
    pictures: [
      { blooper: "Find 3 and You Lose" },
      { right: "Find 3 to Advance" },
    ],
    groups: [
      ["right", "right", "blooper", "blooper", "blooper"],
      ["right", "right", "blooper", "blooper", "blooper"],
    ],
    locations: [
      ["93", "137", "147", "142", "100", "304", "304", "304", "304", "304"],
      ["47", "29", "32", "36", "20", "-170", "-167", "-164", "-161", "-158"],
    ]
  },
  {
    id: "m1s4",
    game: "Super Mario Bros.",
    title: "vs Koopa Paratroopas",
    screen: 4,
    type: "long",
    directory: "mario",
    directions: ["Find 3 arrows to win.", "Uncover 3 Koopa Paratroopas and you lose."],
    pictures: [
      { paratroopa: "Find 3 and You Lose" },
      { right: "Find 3 to Advance" },
    ],
    groups: [
      ["right", "right", "paratroopa", "paratroopa", "paratroopa"],
      ["right", "right", "paratroopa", "paratroopa"],
    ],
    locations: [
      ["107", "156", "106", "155", "156", "405", "424", "388", "422"],
      ["32", "-14", "5", "-56", "-53", "-168", "-166", "-163", "-160"],
    ]
  },
  {
    id: "m1s5",
    game: "Super Mario Bros.",
    title: "vs Buzzy Beetles",
    screen: 5,
    type: "long",
    directory: "mario",
    directions: ["Find 3 arrows to win.", "Uncover 3 Buzzy Beetles and you lose."],
    pictures: [
      { beetle: "Find 3 and You Lose" },
      { right: "Find 3 to Advance" },
    ],
    groups: [
      ["right", "right", "beetle", "beetle", "beetle"],
      ["right", "right", "right", "beetle", "beetle", "beetle", "beetle"],
    ],
    locations: [
      ["112", "139", "145", "165", "165", "309", "359", "409", "300", "413", "415", "416"],
      ["30", "27", "30", "28", "31", "-194", "-240", "-280", "-232", "-234", "-231", "-228"],
    ]
  },
  {
    id: "m1s7",
    game: "Super Mario Bros.",
    title: "vs Bullet Bill",
    screen: 7,
    type: "long",
    directory: "mario",
    directions: ["Find arrow in first area to advance.", "Find arrow in second area to win", "Duck = try again.", "Uncover 3 Bullet Bills and you lose."],
    pictures: [
      { duck: "Try Again" },
      { bullet: "Find 3 and You Lose" },
      { right: "Find 2 to Advance" },
    ],
    groups: [
      ["right", "right", "duck", "duck", "bullet", "bullet"],
      ["right", "duck", "duck", "bullet", "bullet"],
    ],
    locations: [
      ["54", "102", "21", "65", "113", "161", "335", "321", "370", "416", "313"],
      ["99", "61", "48", "23", "-22", "-68", "-168", "-163", "-215", "-280", "-244"],
    ]
  },
  {
    id: "m1s8",
    game: "Super Mario Bros.",
    title: "vs Cheep-Cheeps",
    screen: 8,
    type: "long",
    directory: "mario",
    directions: ["Find 2 arrows to advance across the bridge.", "Uncover 3 Cheep-Cheeps and you lose."],
    pictures: [
      { cheepcheep: "Find 3 and You Lose" },
      { right: "Find 3 to Advance" },
    ],
    groups: [
      ["right", "right", "cheepcheep", "cheepcheep"],
      ["right", "right", "cheepcheep", "cheepcheep", "cheepcheep"],
    ],
    locations: [
      ["112", "161", "118", "166", "324", "374", "423", "347", "398"],
      ["84", "28", "46", "-13", "-91", "-134", "-178", "-176", "-220"],
    ]
  },
  {
    id: "m1s9",
    game: "Super Mario Bros.",
    title: "vs Koopa Troopas",
    screen: 9,
    type: "long",
    directory: "mario",
    directions: ["Find 1 arrows on left side to advance to right side.", "Find up arrow in second area to win.", "Uncover 3 Koopa Troopas and you lose."],
    pictures: [
      { right: "Find One and Advance Right" },
      { up: "Find One and Win" },
      { troopa: "Find 3 and You Lose" },
      { shell: "Instant Loss. AVOID!" },
    ],
    groups: [
      ["right", "troopa", "troopa", "troopa", "shell"],
      ["up", "up", "troopa", "troopa", "shell"],
    ],
    locations: [
      ["50", "98", "140", "150", "145", "365", "322", "322", "324", "324"],
      ["103", "62", "41", "44", "47", "-176", "-182", "-179", "-177", "-174"],
    ]
  },
  {
    id: "m1s10",
    game: "Super Mario Bros.",
    title: "vs Bowser",
    screen: 10,
    type: "long",
    directory: "mario",
    directions: ["Scratch off left area until you find an arrow. Then move to right side.", "You win if you find one arrow and two levers."],
    pictures: [
      { right: "Find One and Advance Right" },
      { fireball: "Find 3 and You Lose" },
      { lever: "Find 2 and You Win" },
    ],
    groups: [
      ["right", "right", "fireball", "fireball", "fireball"],
      ["lever", "lever", "lever", "fireball", "fireball", "fireball", "fireball"],
    ],
    locations: [
      ["33", "80", "130", "142", "154", "314", "384", "348", "309", "364", "332", "395"],
      ["87", "22", "-11", "-6", "-3", "-178", "-222", "-231", "-243", "-276", "-284", "-310"],
    ]
  },
  {
    id: "m2s1",
    game: "Super Mario Bros. 2",
    title: "vs Pidget",
    screen: 1,
    type: "long",
    directory: "mario2",
    directions: ["Find 1 arrow to advance to right side of card", "Now find the grab and toss to win.", "You must uncover 1 arrow, 1 grab, and 1 toss to win. Find three falls and you lose."],
    pictures: [
      { fall: "Find 3 and You Lose" },
      { right: "Find 1 to Advance Right" },
      { grab: "Find 1 to Get Pidget" },
      { toss: "Find 1 to Win" },
    ],
    groups: [
      ["right", "right", "fall", "fall", "fall"],
      ["grab", "grab", "toss", "fall", "fall"],
    ],
    locations: [
      ["77", "126", "163", "164", "146", "333", "316", "304", "351", "399"],
      ["90", "34", "24", "27", "27", "-203", "-201", "-199", "-229", "-272"],
    ]
  },
  {
    id: "m2s2",
    game: "Super Mario Bros. 2",
    title: "vs Autobomb",
    screen: 2,
    type: "long",
    directory: "mario2",
    directions: ["Find 3 grabs and one arrow to advance.", "Uncover 3 cannon balls and you lose.", "You must uncover 1 arrow, 3 grabs, and 3 tosses to win."],
    pictures: [
      { grab: "Find 3 to Win" },
      { cannonball: "Find 3 and You Lose" },
      { right: "Find 1 to Advance" },
      { toss: "Find 3 to Win" },
    ],
    groups: [
      ["right", "grab", "grab", "grab", "cannonball", "cannonball"],
      ["toss", "toss", "toss", "toss", "cannonball", "cannonball", "cannonball"],
    ],
    locations: [
      ["66", "114", "154", "150", "143", "141", "325", "321", "275", "309", "279", "327", "351"],
      ["121", "86", "12", "28", "31", "33", "-197", "-190", "-221", "-231", "-238", "-273", "-276"],
    ]
  },
  {
    id: "m2s3",
    game: "Super Mario Bros. 2",
    title: "vs Tryclyde",
    screen: 3,
    type: "long",
    directory: "mario2",
    directions: ["Find 1 arrow and three mushroom blocks to advance.", "Find 3 fireballs and you lose.", "You must uncover 1 arrow, 3 mushroom blocks, and 3 tosses to win."],
    pictures: [
      { right: "Find 1 to Advance" },
      { fireball: "Find 3 and You Lose" },
      { mushroom: "Find 3 to Win" },
      { toss: "Find 3 to Win" },
    ],
    groups: [
      ["right", "right", "mushroom", "mushroom", "mushroom", "fireball", "fireball"],
      ["toss", "toss", "toss", "fireball", "fireball", "fireball"],
    ],
    locations: [
      ["49", "97", "139", "144", "148", "128", "84", "310", "289", "291", "328", "353", "303"],
      ["40", "0", "-21", "-18", "-16", "-18", "-50", "-290", "-292", "-289", "-302", "-303", "-330"],
    ]
  },
  {
    id: "m2s4",
    game: "Super Mario Bros. 2",
    title: "Get the Key",
    screen: 4,
    type: "long",
    directory: "mario2",
    directions: ["Find The Key to win.", "Uncover 3 Phantos and you lose.", "You must uncover 1 arrow and 1 key to win."],
    pictures: [
      { phanto: "Find 3 and You Lose" },
      { right: "Find 1 to Escape" },
      { key: "Must Find to Win" },
    ],
    groups: [
      ["key", "right", "right", "right", "right", "phanto", "phanto", "phanto", "phanto", "phanto", "phanto"],
    ],
    locations: [
      ["101", "159", "303", "360", "72", "119", "168", "168", "314", "363", "406"],
      ["71", "26", "-20", "-64", "-29", "-74", "-118", "-115", "-208", "-253", "-274"],
    ]
  },
  {
    id: "m2s5",
    game: "Super Mario Bros. 2",
    title: "Cross the Waterfall",
    screen: 5,
    type: "long",
    directory: "mario2",
    directions: ["Find 3 arrows to advance.", "Uncover 3 misses and you lose.", "You must uncover 3 arrows to win."],
    pictures: [
      { right: "Find 3 and You Win" },
      { miss: "Find 3 and You Lose" },
    ],
    groups: [
      ["right", "right", "right", "right", "miss", "miss", "miss"],
      ["miss", "miss", "miss"]
    ],
    locations: [
      ["82", "117", "170", "161", "299", "347", "395", "97", "299", "369"],
      ["201", "123", "55", "60", "-98", "-144", "-179", "-30", "-180", "-225"],
    ]
  },
];

export default cardData;

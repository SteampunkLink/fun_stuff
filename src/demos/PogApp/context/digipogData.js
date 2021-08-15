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
  {
    id: "00-0000-ynyg",
    name: "Yin Yang (white)",
    level: 0,
    img: "yinyang",
    directory: "generic",
  },
  {
    id: "00-0001-skll",
    name: "Skull (white)",
    level: 0,
    img: "skull",
    directory: "generic"
  },
  {
    id: "00-0002-ghtb",
    name: "8 Ball (white)",
    level: 0,
    img: "8ball",
    directory: "generic"
  },
  {
    id: "00-0003-pzza",
    name: "Pizza (white)",
    level: 0,
    img: "pizza",
    directory: "generic"
  },
  {
    id: "00-0004-rlbd",
    name: "Roller Blade (white)",
    level: 0,
    img: "rollerblade",
    directory: "generic"
  },
  {
    id: "00-0005-tblr",
    name: "Tubular (white)",
    level: 0,
    img: "tubular",
    directory: "generic"
  },
  {
    id: "01-0006-ynyg",
    name: "Yin Yang (blue)",
    level: 1,
    img: "yinyang",
    directory: "generic",
  },
  {
    id: "01-0007-skll",
    name: "Skull (blue)",
    level: 1,
    img: "skull",
    directory: "generic"
  },
  {
    id: "01-0008-ghtb",
    name: "8 Ball (blue)",
    level: 1,
    img: "8ball",
    directory: "generic"
  },
  {
    id: "01-0009-pzza",
    name: "Pizza (blue)",
    level: 1,
    img: "pizza",
    directory: "generic"
  },
  {
    id: "01-0010-rlbd",
    name: "Roller Blade (blue)",
    level: 1,
    img: "rollerblade",
    directory: "generic"
  },
  {
    id: "01-0011-tblr",
    name: "Tubular (blue)",
    level: 1,
    img: "tubular",
    directory: "generic"
  },
  {
    id: "02-0012-ynyg",
    name: "Yin Yang (green)",
    level: 2,
    img: "yinyang",
    directory: "generic",
  },
  {
    id: "02-0013-skll",
    name: "Skull (green)",
    level: 2,
    img: "skull",
    directory: "generic"
  },
  {
    id: "02-0014-ghtb",
    name: "8 Ball (green)",
    level: 2,
    img: "8ball",
    directory: "generic"
  },
  {
    id: "02-0015-pzza",
    name: "Pizza (green)",
    level: 2,
    img: "pizza",
    directory: "generic"
  },
  {
    id: "02-0016-rlbd",
    name: "Roller Blade (green)",
    level: 2,
    img: "rollerblade",
    directory: "generic"
  },
  {
    id: "02-0017-tblr",
    name: "Tubular (green)",
    level: 2,
    img: "tubular",
    directory: "generic"
  },
  {
    id: "03-0018-ynyg",
    name: "Yin Yang (yellow)",
    level: 3,
    img: "yinyang",
    directory: "generic",
  },
  {
    id: "03-0019-skll",
    name: "Skull (yellow)",
    level: 3,
    img: "skull",
    directory: "generic"
  },
  {
    id: "03-0020-ghtb",
    name: "8 Ball (yellow)",
    level: 3,
    img: "8ball",
    directory: "generic"
  },
  {
    id: "03-0021-pzza",
    name: "Pizza (yellow)",
    level: 3,
    img: "pizza",
    directory: "generic"
  },
  {
    id: "03-0022-rlbd",
    name: "Roller Blade (yellow)",
    level: 3,
    img: "rollerblade",
    directory: "generic"
  },
  {
    id: "03-0023-tblr",
    name: "Tubular (yellow)",
    level: 3,
    img: "tubular",
    directory: "generic"
  },
  {
    id: "04-0024-ynyg",
    name: "Yin Yang (orange)",
    level: 4,
    img: "yinyang",
    directory: "generic",
  },
  {
    id: "04-0025-skll",
    name: "Skull (orange)",
    level: 4,
    img: "skull",
    directory: "generic"
  },
  {
    id: "04-0026-ghtb",
    name: "8 Ball (orange)",
    level: 4,
    img: "8ball",
    directory: "generic"
  },
  {
    id: "04-004-pzza",
    name: "Pizza (orange)",
    level: 4,
    img: "pizza",
    directory: "generic"
  },
  {
    id: "04-0027-rlbd",
    name: "Roller Blade (orange)",
    level: 4,
    img: "rollerblade",
    directory: "generic"
  },
  {
    id: "04-0028-tblr",
    name: "Tubular (orange)",
    level: 4,
    img: "tubular",
    directory: "generic"
  },
  {
    id: "05-0029-ynyg",
    name: "Yin Yang (red)",
    level: 5,
    img: "yinyang",
    directory: "generic",
  },
  {
    id: "05-0030-skll",
    name: "Skull (red)",
    level: 5,
    img: "skull",
    directory: "generic"
  },
  {
    id: "05-0031-ghtb",
    name: "8 Ball (red)",
    level: 5,
    img: "8ball",
    directory: "generic"
  },
  {
    id: "05-0032-pzza",
    name: "Pizza (red)",
    level: 5,
    img: "pizza",
    directory: "generic"
  },
  {
    id: "05-0033-rlbd",
    name: "Roller Blade (red)",
    level: 5,
    img: "rollerblade",
    directory: "generic"
  },
  {
    id: "05-0034-tblr",
    name: "Tubular (red)",
    level: 5,
    img: "tubular",
    directory: "generic"
  },
  {
    id: "06-0035-ynyg",
    name: "Yin Yang (purple)",
    level: 6,
    img: "yinyang",
    directory: "generic",
  },
  {
    id: "06-0036-skll",
    name: "Skull (purple)",
    level: 6,
    img: "skull",
    directory: "generic"
  },
  {
    id: "06-0037-ghtb",
    name: "8 Ball (purple)",
    level: 6,
    img: "8ball",
    directory: "generic"
  },
  {
    id: "06-0038-pzza",
    name: "Pizza (purple)",
    level: 6,
    img: "pizza",
    directory: "generic"
  },
  {
    id: "06-0039-rlbd",
    name: "Roller Blade (purple)",
    level: 6,
    img: "rollerblade",
    directory: "generic"
  },
  {
    id: "06-0040-tblr",
    name: "Tubular (purple)",
    level: 6,
    img: "tubular",
    directory: "generic"
  },
  {
    id: "07-0041-ynyg",
    name: "Yin Yang (black)",
    level: 7,
    img: "yinyang",
    directory: "generic",
  },
  {
    id: "07-0042-skll",
    name: "Skull (black)",
    level: 7,
    img: "skull",
    directory: "generic"
  },
  {
    id: "07-0043-ghtb",
    name: "8 Ball (black)",
    level: 7,
    img: "8ball",
    directory: "generic"
  },
  {
    id: "07-0044-pzza",
    name: "Pizza (black)",
    level: 7,
    img: "pizza",
    directory: "generic"
  },
  {
    id: "07-0045-rlbd",
    name: "Roller Blade (black)",
    level: 7,
    img: "rollerblade",
    directory: "generic"
  },
  {
    id: "07-0046-tblr",
    name: "Tubular (black)",
    level: 7,
    img: "tubular",
    directory: "generic"
  },
  {
    id: "08-0047-ynyg",
    name: "Yin Yang (bronze)",
    level: 8,
    img: "yinyang",
    directory: "generic",
  },
  {
    id: "08-0048-skll",
    name: "Skull (bronze)",
    level: 8,
    img: "skull",
    directory: "generic"
  },
  {
    id: "08-0049-ghtb",
    name: "8 Ball (bronze)",
    level: 8,
    img: "8ball",
    directory: "generic"
  },
  {
    id: "08-0050-pzza",
    name: "Pizza (bronze)",
    level: 8,
    img: "pizza",
    directory: "generic"
  },
  {
    id: "08-0051-rlbd",
    name: "Roller Blade (bronze)",
    level: 8,
    img: "rollerblade",
    directory: "generic"
  },
  {
    id: "08-0052-tblr",
    name: "Tubular (bronze)",
    level: 8,
    img: "tubular",
    directory: "generic"
  },
  {
    id: "09-0053-ynyg",
    name: "Yin Yang (silver)",
    level: 9,
    img: "yinyang",
    directory: "generic",
  },
  {
    id: "09-0054-skll",
    name: "Skull (silver)",
    level: 9,
    img: "skull",
    directory: "generic"
  },
  {
    id: "09-0055-ghtb",
    name: "8 Ball (silver)",
    level: 9,
    img: "8ball",
    directory: "generic"
  },
  {
    id: "09-0056-pzza",
    name: "Pizza (silver)",
    level: 9,
    img: "pizza",
    directory: "generic"
  },
  {
    id: "09-0057-rlbd",
    name: "Roller Blade (silver)",
    level: 9,
    img: "rollerblade",
    directory: "generic"
  },
  {
    id: "09-0058-tblr",
    name: "Tubular (silver)",
    level: 9,
    img: "tubular",
    directory: "generic"
  },
  {
    id: "10-0059-ynyg",
    name: "Yin Yang (gold)",
    level: 10,
    img: "yinyang",
    directory: "generic",
  },
  {
    id: "10-0060-skll",
    name: "Skull (gold)",
    level: 10,
    img: "skull",
    directory: "generic"
  },
  {
    id: "10-0061-ghtb",
    name: "8 Ball (gold)",
    level: 10,
    img: "8ball",
    directory: "generic"
  },
  {
    id: "10-0062-pzza",
    name: "Pizza (gold)",
    level: 10,
    img: "pizza",
    directory: "generic"
  },
  {
    id: "10-0063-rlbd",
    name: "Roller Blade (gold)",
    level: 10,
    img: "rollerblade",
    directory: "generic"
  },
  {
    id: "10-0064-tblr",
    name: "Tubular (gold)",
    level: 10,
    img: "tubular",
    directory: "generic"
  },
]

export default digipogData
export { digipogLevels }
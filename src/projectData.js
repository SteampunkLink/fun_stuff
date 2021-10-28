const projectData = [
  {
    id: 1,
    title: "Retro Weather App",
    imageSrc: "/screenShots/weatherScreen.png",
    imageAlt: "screenshot of retro weather app",
    description:
      "Ever get nastalgic for the old Weather Channel updates? The soothing music, waiting to see the latest weather report. No? Just me, huh? Oh well. Maybe you'll enjoy this anyway.",
    link: "/demo/retroweather",
    moreInfo:
      "I thought it would be fun to recreate the look of the old Local Forecast from the Weather Channel from the early 90s. You can enter your 5-digit zip code in the input field in the bottom right corner to get your local weather, though only US postal codes will work right now. Sorry. You can also use the switch next to the music note to turn on some smooth tunes. Right now it only plays Winelight by Grover Washington Jr. I'll probably change this to some vaporwave later. \n\nWeather data comes from OpenWeatherMap's API. As of this writing, there are only two slides. I'd like to create more, but API calls get to be a bit pricey and I'm worried too many more will cause the site to burn through my allowance at the free tier. I may try to find other, non-weather-related things later. I'd also like to create a toggle to add voice later.",
  },
  {
    id: 2,
    title: "Nintendo Scratch Cards",
    imageSrc: "/screenShots/scratchScreen.png",
    imageAlt: "screenshot of the Nintendo Scratch-off card game app",
    description:
      "Relive the fun of old scratch-off card games from Nintendo digitally and experience what they would have been like. Even better, these are replayable because the scratch-off spaces are randomized.",
    link: "/demo/scratchcard",
    moreInfo:
      "I bought a bunch of these old Nintendo collector's cards that were released in the 80s that had never been opened. Unfortunately, I soon discovered, that the cards no longer worked as they were so old, it was impossible to scratch off the substance concealing the game icons without damaging the card. That's when I had the idea to make this. Not only can you get a sense of how the game played, the solutions get randomized so it's a different experience each time. \n\nThe directions appear under the card when you select one from the menu. The background is created from the stickers that came in the same card packs as the scratch-off game cards.",
  },
  {
    id: 3,
    title: "ToDo App",
    imageSrc: "/screenShots/todoScreen.png",
    imageAlt: "screenshot of the todo app",
    description:
      "Yeah yeah, EVERY entry level coder has a simple todo app in their portfolio. I thought I'd make something a little more interesting that the average todo list.",
    link: "/demo/todo",
    moreInfo:
      'The inspiration for this struck me while working on a project from Brad Traversy in his 50 Projects Udemy course. In the project "Drink Water" the user can keep track of how much water they\'ve drank in a day by clicking on an individual glass for each glass they drink. This empties the small glass and fills up a larger one which dynamically calculates the percentage of overall water the user has drank in relation to how much they should drink. I took that concept and applied it to a to-do list which can store multiple projects. Each project can be populated with a number of tasks which all start out unfinished. The user can move them up to "in progress" and later to "finished" and the meter to the left will fill up with the proper color and give the user a percentage of tasks completed. Be aware that this sample app is a proof-of-concept and will not save data if you leave.',
  },
  {
    id: 4,
    title: "Generic Milk Cap Game",
    imageSrc: "/screenShots/pogScreen.png",
    imageAlt: "Screenshot of the milk cap game",
    description:
      "Relive a little bit of the joy of playing a game of p... I mean, um milk caps. So it's mostly just a clicker game here, but did anyone actually play the game as much as they just collected the little discs anyway?",
    link: "/demo/caps",
    moreInfo:
      "This game ended up being a much bigger project than I had planned for any of these to be. But I'm happy with the way it's coming along. You can get free common (white) caps from the machine in the store and use them to play for higher ranked caps against an AI opponent. With better caps you can either sell them for credits to buy others and complete your collection, or wager them for even better capz. Everytime you win caps, you get points which you can use on better slammers or on the random pog vending machine. Your progress will even be stored in your browser's local storage and load when you come back.",
  },
  {
    id: 5,
    title: "Junk Drawer",
    imageSrc: "/screenShots/junkScreen.png",
    imageAlt: "screenshot of the junk drawer app",
    description:
      "This is a simple app meant to replicate some of the functions of Mac OS's X now defunct dashbaord.",
    link: "/demo/junkdrawer",
    moreInfo:
      "Had to replace my Macbook Air recently and discovered that Apple killed the dashboard. I was very sad about this. I loved having a little place to store things I use a lot like the weather widget, calculator, and the calendar. And how useful were those sticky notes? I loved having a dedicated place to store them and jot down little notes to myself whever I needed to. Sure they're still on the desktop, but those get covered with windows and stuff. It's just not the same. I wanted to recreate some of the functionality of those widgets with this app. \n\nThis application will save events and sticky notes to your browsers local storage as well as the widget locations so you should be able to open this on the same browser without losing data. But maybe don't use this for anything too important, just in case. I'd like to try turning this into a desktop app with electron someday.",
  },
];

export default projectData;

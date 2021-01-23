// const apiKey = REACT_APP_WEATHER_API_KEY;

const headerTitle = document.getElementById("header-title");
const slides = document.querySelectorAll(".slide");
const mainMenu = document.getElementById("main-menu");
const titleList = ["Current Conditions", "3-Day Forecast"];
let currentSlide = 0;

function nextSlide() {
  slides[currentSlide].className = "slide";
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].className = "slide showing";
  headerTitle.innerText = titleList[currentSlide];
}

/* current conditions */
// let weatherData;

// const getWeatherData = async (zip) => {
//   const endpoint = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&units=imperial&appid=${apiKey}`;
//   const response = await fetch(endpoint);
//   weatherData = await response.json();
//   createCurrentConditions(weatherData);
// };

const createCurrentConditions = (data) => {
  const ccTitle = document.getElementById("cc-title");
  ccTitle.innerText = data.name;
  const ccTemp = document.getElementById("cc-temp");
  ccTemp.innerHTML = `${Math.round(data.main.temp)}&#8457;`;
  const ccImg = document.getElementById("cc-img");
  ccImg.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`
  );
  const ccHumid = document.getElementById("cc-humid");
  ccHumid.innerText = data.main.humidity;
  const ccWind = document.getElementById("cc-wind");
  ccWind.innerText = data.wind.speed;
};

/* three-day-forecast */
let threeDayForcast;

// const getThreeDayForcast = async (zip) => {
//   const endpoint = `https://api.openweathermap.org/data/2.5/forecast/daily?zip=${zip}&units=imperial&appid=${apiKey}`;
//   const response = await fetch(endpoint);
//   threeDayForcast = await response.json();
//   createThreeDayForecast(threeDayForcast);
// };

const createThreeDayForecast = (data) => {
  for (let x = 1; x < 4; x++) {
    const todayDate = new Date(data.list[x].dt * 1000);
    const tdfTitle = `tdf${x}-title`;
    document.getElementById(tdfTitle).innerText = days[todayDate.getDay()];

    const tdfHi = `tdf${x}-hi`;
    document.getElementById(tdfHi).innerText = `High: ${data.list[x].temp.max}`;
    const tdfLo = `tdf${x}-lo`;
    document.getElementById(tdfLo).innerText = `Low: ${data.list[x].temp.min}`;

    const tdfImg = `tdf${x}-img`;
    document
      .getElementById(tdfImg)
      .setAttribute(
        "src",
        `http://openweathermap.org/img/wn/${data.list[x].weather[0].icon}@4x.png`
      );
    const tdfDesc = `tdf${x}-desc`;
    document.getElementById(tdfDesc).innerText = data.list[x].weather[0].main;

    const tdfHumid = `tdf${x}-humid`;
    document.getElementById(tdfHumid).innerText = data.list[x].humidity;
    const tdfSpeed = `tdf${x}-wind`;
    document.getElementById(tdfSpeed).innerText = data.list[x].speed;
  }
};

/* zip.js */
let activateSlides;

const setAllData = (zip) => {
  // get data from api
  getWeatherData(zip);
  getThreeDayForcast(zip);

  // set first slide and start slideshow
  // const slideInterval = setInterval(nextSlide, 9000);
  activateSlides = setInterval(nextSlide, 9000);
};

setAllData("63146");

document.getElementById("zip-input").addEventListener("keydown", (e) => {
  const newZip = e.target.value;
  if (e.keyCode == 13 && newZip.match(/^\d{5}$/)) {
    clearInterval(activateSlides);
    setAllData(newZip);
  }
});

// CLOCK
const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
const months = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
];

const currentTime = () => {
  let clock = document.getElementById("clock");
  let calendar = document.getElementById("calendar");
  let date = new Date();
  let hour = date.getHours();
  hour = hour == 0 ? 12 : hour > 12 ? hour - 12 : hour;
  let min = date.getMinutes();
  let sec = date.getSeconds();
  let midday = hour >= 12 ? "PM" : "AM";

  hour = updateTime(hour);
  min = updateTime(min);
  sec = updateTime(sec);

  let day = days[date.getDay()];
  let month = months[date.getMonth()];
  let nDate = date.getDate();

  clock.innerText = `${hour}:${min}:${sec} ${midday}`;
  calendar.innerText = `${day} ${month} ${nDate}`;
  let t = setTimeout(currentTime, 1000);
};

const updateTime = (k) => {
  if (k < 10) {
    return "0" + k;
  } else {
    return k;
  }
};

currentTime();

/* music */
let musicPlayer = document.getElementById("music-player");
let isMusicOn = false;
let tracks = ["Winelight.mp3"];
let titles = ["Winelight"];
let i = 0;

const scrollText = (text) => {
  let scrollText = document.getElementById("scrolling-text");
  scrollText.innerHTML = text;
};

scrollText(
  "Welcome to Retro Weather! You can turn on music from the main menu."
);

const musicToggle = document.getElementById("music-toggle");
const speechToggle = document.getElementById("speech-toggle");

const toggleMusic = () => {
  if (isMusicOn) {
    scrollText(`You're Listening to "${titles[i]}"`);
    startMusic();
    activatePlaylist();
  } else {
    scrollText(
      "Welcome to Retro Weather! You can turn on music from the main menu."
    );
    musicPlayer.pause();
  }
};

musicToggle.addEventListener("change", function () {
  if (this.checked) {
    isMusicOn = true;
  } else {
    isMusicOn = false;
  }
  toggleMusic();
});

const startMusic = () => {
  musicPlayer.src = tracks[i];
  musicPlayer.play();
};

let nextTrack = "";
const activatePlaylist = () => {
  musicPlayer.addEventListener("ended", function () {
    i++;
    if (i === tracks.length) i = 0;
    nextTrack = tracks[i];
    musicPlayer.src = nextTrack;
    scrollText(`You're Listening to "${titles[i]}"`);
    musicPlayer.load();
    musicPlayer.play();
  });
};

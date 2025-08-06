export const weatherApi = "https://api.openweathermap.org/data/2.5/weather?";

export const API_KEY = "a900735ccdce7afd6b32191ff8d5f604";

export const weatherMessages = {
  Clear: [
    "fuck, it’s blazing",
    "too sunny, fuck off",
    "sun’s on steroids, fuck",
    "cloudless, boring as fuck",
  ],
  Clouds: [
    "fucking cloud parade",
    "sky’s feeling meh, fuck",
    "gray vibes only, fuck",
    "dull skies, who cares",
  ],
  Rain: [
    "it’s fucking raining",
    "wet mess, fuck yes",
    "umbrella? fuck that",
    "shitty shower, fuck it",
  ],
  Snow: [
    "snow, just fucking why",
    "frozen bullshit again",
    "too white, fuck snow",
    "cold feet, fuck off",
  ],
  Thunderstorm: [
    "fuck, thunder’s angry",
    "shocking shit outside",
    "sky rage, fuck this",
    "loud as fuck, hide",
  ],
  Drizzle: [
    "drizzle fucks up plans",
    "slight wet, big fuck",
    "annoying ass drizzle",
    "fucking tiny rain",
  ],
  Mist: [
    "misty fuck, see shit",
    "foggy as fuck",
    "low visibility fuck",
    "ghost town mode",
  ],
  Fog: [
    "fog’s fucking creepy",
    "see nothing, fuck",
    "drive slow, fuck",
    "foggy bitchy day",
  ],
  Smoke: [
    "smoky fuck in air",
    "breathe deep, fuck",
    "smog’s a bitch",
    "gross smoky shit",
  ],
  Haze: [
    "hazy as fuck",
    "see nothing, seriously",
    "bad air, fuck",
    "hazy fucking disaster",
  ],
  Dust: [
    "dust everywhere, fuck",
    "sandstorm’s little cousin",
    "shit got dusty",
    "dust fucks up shit",
  ],
  Sand: [
    "sandy fuck invasion",
    "gritty as fuck",
    "sand everywhere, fuck",
    "fuck, sandstorm ahead",
  ],
  Ash: [
    "ash fucking everywhere",
    "volcano’s shitty gift",
    "dirty and fucked up",
    "ash cloud sucks",
  ],
  Squall: [
    "wind’s fucking wild",
    "shit flying everywhere",
    "hold tight, fuck",
    "squall is a bitch",
  ],
  Tornado: [
    "fuck, tornado warning",
    "shit’s spinning wild",
    "stay indoors, fuck",
    "don’t get fucked",
  ],
};

export const weatherIcons = {
  Clear: "sun--v1.png",
  Clouds: "cloud-lighting--v1.png",
  Rain: "rain.png",
  Snow: "winter.png",
  Thunderstorm: "rain.png",
  Drizzle: "light-rain.png",
  Mist: "windy-weather--v1",
  Fog: "fog-day.png",
  Smoke: "air-element.png",
  Haze: "fog-night--v2.png",
  Dust: "air-quality.png",
  Sand: "avalanche.png",
  Ash: "windchill.png",
  Squall: "windchill.png",
  Tornado: "tornado.png",
};

export const weatherGradients = {
  Clear:
    "linear-gradient(0deg, rgba(207, 207, 207, 1) 0%, rgba(214, 204, 182, 1) 25%, rgba(234, 195, 110, 1) 50%, rgba(243, 191, 80, 1) 75%, rgba(253, 187, 45, 1) 100%)",
  Clouds:
    "linear-gradient(0deg, rgba(207, 207, 207, 1) 0%, rgba(173, 181, 189, 1) 25%, rgba(137, 144, 155, 1) 50%, rgba(110, 117, 130, 1) 75%, rgba(83, 89, 105, 1) 100%)",
  Rain: "linear-gradient(0deg, rgba(178, 199, 209, 1) 0%, rgba(137, 159, 182, 1) 25%, rgba(95, 120, 151, 1) 50%, rgba(51, 78, 113, 1) 75%, rgba(27, 53, 91, 1) 100%)",
  Snow: "linear-gradient(0deg, rgba(234, 243, 255, 1) 0%, rgba(206, 221, 237, 1) 25%, rgba(177, 202, 230, 1) 50%, rgba(156, 183, 213, 1) 75%, rgba(128, 160, 198, 1) 100%)",
  Thunderstorm:
    "linear-gradient(0deg, rgba(182, 177, 209, 1) 0%, rgba(146, 137, 180, 1) 25%, rgba(112, 101, 153, 1) 50%, rgba(80, 71, 112, 1) 75%, rgba(45, 33, 80, 1) 100%)",
  Drizzle:
    "linear-gradient(0deg, rgba(176, 190, 197, 1) 0%, rgba(189, 200, 205, 1) 25%, rgba(164, 181, 189, 1) 50%, rgba(129, 142, 153, 1) 75%, rgba(97, 106, 118, 1) 100%)",
  Mist: "linear-gradient(0deg, rgba(196, 196, 202, 1) 0%, rgba(176, 180, 187, 1) 25%, rgba(143, 146, 156, 1) 50%, rgba(121, 125, 136, 1) 75%, rgba(99, 102, 115, 1) 100%)",
  Fog: "linear-gradient(0deg, rgba(181, 181, 183, 1) 0%, rgba(163, 163, 164, 1) 25%, rgba(136, 136, 137, 1) 50%, rgba(115, 114, 115, 1) 75%, rgba(101, 101, 101, 1) 100%)",
  Smoke:
    "linear-gradient(0deg, rgba(95, 95, 95, 1) 0%, rgba(111, 111, 111, 1) 25%, rgba(108, 108, 108, 1) 50%, rgba(97, 97, 97, 1) 75%, rgba(90, 90, 90, 1) 100%)",
  Haze: "linear-gradient(0deg, rgba(200, 181, 148, 1) 0%, rgba(191, 172, 137, 1) 25%, rgba(174, 156, 117, 1) 50%, rgba(156, 138, 98, 1) 75%, rgba(133, 118, 80, 1) 100%)",
  Dust: "linear-gradient(0deg, rgba(222, 206, 174, 1) 0%, rgba(200, 177, 150, 1) 25%, rgba(180, 159, 132, 1) 50%, rgba(155, 132, 98, 1) 75%, rgba(125, 106, 72, 1) 100%)",
  Sand: "linear-gradient(0deg, rgba(230, 200, 160, 1) 0%, rgba(210, 180, 140, 1) 25%, rgba(190, 160, 120, 1) 50%, rgba(160, 120, 80, 1) 75%, rgba(130, 90, 50, 1) 100%)",
  Ash: "linear-gradient(0deg, rgba(180, 183, 185, 1) 0%, rgba(160, 165, 168, 1) 25%, rgba(140, 145, 148, 1) 50%, rgba(120, 125, 128, 1) 75%, rgba(100, 105, 108, 1) 100%)",
  Squall:
    "linear-gradient(0deg, rgba(120, 120, 130, 1) 0%, rgba(110, 110, 120, 1) 25%, rgba(100, 100, 110, 1) 50%, rgba(90, 90, 100, 1) 75%, rgba(80, 80, 90, 1) 100%)",
  Tornado:
    "linear-gradient(0deg, rgba(130, 130, 140, 1) 0%, rgba(120, 120, 130, 1) 25%, rgba(110, 110, 120, 1) 50%, rgba(100, 100, 110, 1) 75%, rgba(90, 90, 100, 1) 100%)",
};

export const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const Icon_Url = "https://img.icons8.com/ios/100/";

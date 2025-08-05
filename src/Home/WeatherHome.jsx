import React, { useEffect, useState } from "react";
import {
  API_KEY,
  Icon_Url,
  months,
  weatherApi,
  weatherGradients,
  weatherIcons,
  weatherMessages,
} from "../constants/constants";

const WeatherHome = () => {
  const [currentWeather, setCurrentWeather] = useState({});
  const [sunriseTime, setSunriseTime] = useState("");
  const [sunsetTime, setSunsetTime] = useState("");
  const [weatherMessage, setWeatherMessage] = useState("");
  const currentDate = new Date();
  const currentTime = currentDate.getHours();
  const defaultLat = 35.67;
  const defaultLong = 139.65;
  const getSarcasticMessage = (weather) => {
    const phrases = weatherMessages[weather] || [
      "weather is having an identity crisis",
    ];
    setWeatherMessage(phrases[Math.floor(Math.random() * phrases.length)]);
  };
  useEffect(() => {
    fetchWeather();
  }, []);

  const backgroundStyle = {
    background:
      weatherGradients[
        currentWeather?.weather && currentWeather?.weather[0]?.main
      ] || weatherGradients.Clear,
  };

  const fetchWeather = async () => {
    const getPosition = () =>
      new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });
    try {
      const position = await getPosition();
      const latitude = +position.coords.latitude.toFixed(2) || 36.2;
      const longitude = +position.coords.longitude.toFixed(2) || 138.25;
      fetchAndSetWeathef(latitude, longitude);
    } catch (err) {
      fetchAndSetWeathef(defaultLat, defaultLong);
      console.error("Error fetching weather data:", err);
    }
  };

  const fetchAndSetWeathef = async (lat, lon) => {
    const json = await fetch(
      weatherApi + `lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    );
    const data = await json.json();
    setCurrentWeather(data);
    let sunriseTime = handleUnixTimestamp(data?.sys?.sunrise);
    let sunsetTime = handleUnixTimestamp(data?.sys?.sunset);
    setSunriseTime(sunriseTime + " AM");
    setSunsetTime(sunsetTime + " PM");
    getSarcasticMessage(data?.weather[0]?.main);
  };
  const handleUnixTimestamp = (timestamp) => {
    const date = new Date(timestamp * 1000);
    const hour = date.getHours();
    const min = date.getMinutes();
    return hour + ":" + min;
  };
  return (
    <div className="weather-bg" style={backgroundStyle}>
      <div className="px-6 pt-12">
        <div className="h-[calc(100vh-220px)] overflow-auto">
          <div className="flex justify-between items-center">
            <img
              width="100"
              height="100"
              src={
                Icon_Url +
                weatherIcons[
                  currentWeather?.weather && currentWeather?.weather[0]?.main
                ]
              }
              alt={
                weatherIcons[
                  currentWeather?.weather && currentWeather?.weather[0]?.main
                ]
              }
            />
            <div>
              <h1 className="text-7xl font-semibold">
                {currentWeather.main && Math.ceil(currentWeather?.main?.temp)}⁰C
              </h1>
            </div>
          </div>
          <div className="mt-30 shortScreen:mt-10">
            <h1 className="text-6xl font-bold">
              {weatherMessage.split(" ").slice(0, 1)}{" "}
              <span className="londrina-outline-regular text-7xl">
                {weatherMessage.split(" ").slice(1, 2)}
              </span>{" "}
              {weatherMessage.split(" ").slice(2, 3)}
              <br />
              {weatherMessage.split(" ").slice(3)}
            </h1>
            <div className="mt-4">
              <p className="text-gray-700 font-extralight text-[11px]">
                You can look outside to get more information.
              </p>
              <p className="text-gray-700 text-sm mt-1">
                {currentWeather?.name} 📍
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex justify-between">
            <div className="flex gap-6">
              <div>
                <img
                  width="40"
                  height="40"
                  src={Icon_Url + "sunrise--v1.png"}
                  alt="sunrise--v1"
                />
                <div>
                  <p className="text-gray-800 text-sm">{sunriseTime}</p>
                </div>
              </div>
              <div>
                <img
                  width="40"
                  height="40"
                  src={Icon_Url + "sunset.png"}
                  alt="sunset"
                />
                <div>
                  <p className="text-gray-800 text-sm">{sunsetTime}</p>
                </div>
              </div>
            </div>
            <div className="flex gap-6 mb-2">
              <div>
                <img
                  width="40"
                  height="40"
                  src={Icon_Url + "humidity.png"}
                  alt="humidity"
                />
                <p className="text-gray-800 text-sm">
                  {currentWeather?.main && currentWeather?.main?.humidity}%
                </p>
              </div>
              <div>
                <img
                  width="40"
                  height="40"
                  src={Icon_Url + "wind.png"}
                  alt="wind"
                />
                <p className="text-gray-800 text-sm">
                  {currentWeather?.wind && currentWeather?.wind?.speed}km/h
                </p>
              </div>
            </div>
          </div>
          <div className="border-t">
            <div className="flex items-center mt-4 justify-between">
              <div>
                <p className="px-4">
                  {months[currentDate.getMonth()]}, {currentDate.getDate()}{" "}
                  {currentDate.getFullYear()}
                </p>
              </div>
              <span className="h-15 border-1 border-gray-700"></span>
              <div>
                <p className="px-4">
                  {currentWeather?.weather &&
                    currentWeather?.weather[0]?.description}
                </p>
              </div>
              <span className="h-15 border border-gray-700"></span>
              <div>
                <p className="px-4 text-4xl">
                  {currentTime % 12 ? currentTime % 12 : 12}
                  <span className="londrina-outline-regular">
                    {currentTime < 12 ? "AM" : "PM"}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherHome;

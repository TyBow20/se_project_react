import { request } from "./api";

export const getForecastWeather = () => {
  const latitude = 41.71;
  const longitude = -83.7;
  const APIkey = "667bba681bc61af84c8051769ebac1a5";

  const weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`;
  return request(weatherApiUrl);
};

export const parseWeatherData = (data) => {
  const main = data.main;
  const temperature = main && main.temp;

  const weather = {
    temperature: {
      F: Math.round(temperature),
      C: Math.round(((temperature - 32) * 5) / 9),
    },
  };

  return weather;
};

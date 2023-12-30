const latitude = 41.71;
const longitude = -83.7;
const APIkey = "667bba681bc61af84c8051769ebac1a5";

export const getForecastWeather = () => {
  const weatherApi = fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey} `
  ).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      return Promise.reject(`Error: ${response.status}`);
    }
  });
  return weatherApi;
};

export const parseWeatherData = (data) => {
  const main = data.main;
  const temperature = main && main.temp;
  // console.log(Math.ceil(temperature));
  return Math.ceil(temperature);
};

const weatherStatus = [
  { url: require("../images/day/sunny.svg").default, day: true, type: "sunny" },
  {
    url: require("../images/day/cloudy.svg").default,
    day: true,
    type: "cloudy",
  },
  { url: require("../images/day/rain.svg").default, day: true, type: "rain" },
  { url: require("../images/day/snow.svg").default, day: true, type: "snow" },
  { url: require("../images/day/storm.svg").default, day: true, type: "storm" },
  { url: require("../images/day/fog.svg").default, day: true, type: "fog" },
];

const WeatherCard = ({ day, type }) => {
  const imgSrc = weatherStatus.filter((i) => {
    return i.day === day && i.type === type;
  });

  const imageSrcUrl = imgSrc[0].url || "";
  return (
    <section className="weather" id="weather">
      <div className="weather__info">75°F</div>
      <img src={imageSrcUrl} className="weather__image" />
    </section>
  );
};

export default WeatherCard;

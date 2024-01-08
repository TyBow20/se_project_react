import "./WeatherCard.css";
import { weatherStatus } from "../../utils/contants.js";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext.js";

const WeatherCard = ({ day, type, weatherTemp = "" }) => {
  const imgSrc = weatherStatus.filter((i) => {
    return i.day === day && i.type === type;
  });

  const imageSrcUrl = imgSrc[0].url || "";
  return (
    <section className="weather" id="weather">
      <div className="weather__info">{weatherTemp}°F</div>
      <img src={imageSrcUrl} className="weather__image" alt={type} />
    </section>
  );
};

export default WeatherCard;

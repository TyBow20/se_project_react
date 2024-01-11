// import { defaultClothingItems } from "../../utils/contants";
// import ItemCard from "../ItemCard/ItemCard";
// import WeatherCard from "../WeatherCard/WeatherCard";
// import { useMemo } from "react";
// import "./Main.css";

// function Main({ weatherTemp, onSelectedCard }) {
//   const weatherType = useMemo(() => {
//     if (weatherTemp >= 86) {
//       return "hot";
//     } else if (weatherTemp >= 66 && weatherTemp <= 85) {
//       return "warm";
//     } else if (weatherTemp <= 65) {
//       return "cold";
//     }
//   });

//   const filteredCards = defaultClothingItems.filter((item) => {
//     return item.weather.toLowerCase() === weatherType;
//   });
//   // console.log(weatherTemp);
//   return (
//     <main className="main">
//       <WeatherCard day={true} type="snow" weatherTemp={weatherTemp} />
//       <section className="card__section" id="card-section">
//         Today is {weatherTemp}°F / You may want to wear:
//         <div className="card__items">
//           {defaultClothingItems.map((item) => (
//             <ItemCard item={item} onSelectedCard={onSelectedCard} />
//           ))}
//         </div>
//       </section>
//     </main>
//   );
// }

// export default Main;

//currrent code

// import { defaultClothingItems } from "../../utils/contants";
// import ItemCard from "../ItemCard/ItemCard";
// import WeatherCard from "../WeatherCard/WeatherCard";
// import { useMemo, useContext } from "react";
// import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
// import "./Main.css";

// function Main({ weatherTemp, onSelectedCard }) {
//   const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
//   const temp = weatherTemp?.temprature?.[currentTemperatureUnit] || weatherTemp;
//   const weatherType = useMemo(() => {
//     if (temp >= 86) {
//       return "hot";
//     } else if (temp >= 66 && temp <= 85) {
//       return "warm";
//     } else if (temp <= 65) {
//       return "cold";
//     }
//   }, [temp]);

//   const filteredCards = defaultClothingItems.filter((item) => {
//     return item.weather.toLowerCase() === weatherType;
//   });

//   return (
//     <main className="main">
//       <WeatherCard day={true} type="snow" weatherTemp={temp} />
//       <section className="card__section" id="card-section">
//         Today is {temp}°F / You may want to wear:
//         <div className="card__items">
//           {filteredCards.map((item) => (
//             <ItemCard
//               key={item._id}
//               item={item}
//               onSelectedCard={onSelectedCard}
//             />
//           ))}
//         </div>
//       </section>
//     </main>
//   );
// }

// export default Main;

//end current code

import React, { useContext, useMemo } from "react";
import "./Main.css";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import { defaultClothingItems } from "../../utils/contants";

function Main({ weatherTemp, onSelectedCard, clothingItems }) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);

  const temp = weatherTemp?.temperature?.[currentTemperatureUnit] || 0;
  console.log(weatherTemp, "hello");

  const weatherType = useMemo(() => {
    const thresholds = {
      F: { hot: 86, warm: [66, 85], cold: 65 },
      C: { hot: 30, warm: [19, 29], cold: 18 },
    };

    const currentThresholds = thresholds[currentTemperatureUnit];

    if (temp >= currentThresholds.hot) {
      return "hot";
    } else if (
      temp >= currentThresholds.warm[0] &&
      temp <= currentThresholds.warm[1]
    ) {
      return "warm";
    } else if (temp <= currentThresholds.cold) {
      return "cold";
    }
  }, [temp, currentTemperatureUnit]);

  const filteredCards = useMemo(() => {
    return clothingItems.filter(
      (item) => item.weather.toLowerCase() === weatherType
    );
  }, [weatherType, clothingItems]);
  console.log(clothingItems);
  return (
    <main className="main">
      <WeatherCard day={true} type="snow" weatherTemp={temp} />
      <section className="card__section" id="card-section">
        Today is {temp}°{currentTemperatureUnit} / You may want to wear:
        <div className="card__items">
          {filteredCards.map((item) => (
            <ItemCard
              key={item._id}
              item={item}
              onSelectedCard={onSelectedCard}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Main;

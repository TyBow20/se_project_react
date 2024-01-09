// import logo from "..public/favicon.ico";
// import logo from "./logo.svg";
// import "./App.css";
// import Header from "../Header/Header";
// import Main from "../Main/Main";
// import Footer from "../Footer/Footer";
// import ModalWithForm from "../ModalWithForm/ModalWIthForm";
// import { useState, useEffect, useRef } from "react";
// import ItemModal from "../ItemModal/ItemModal";
// import { getForecastWeather, parseWeatherData } from "../../utils/WeatherApi";
// import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
// import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
// import Profile from "../Profile/Profile";
// import AddItemModal from "../../AddItemModal/AddItemModal";

// function App() {
//   const weatherTemp = "75° F";
//   const [activeModal, setActiveModal] = useState("");
//   const [selectedCard, setSelectedCard] = useState({});
//   const [temp, setTemp] = useState(0);
//   const [city, setCity] = useState("");
//   const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");

//   const handleCreateModal = () => {
//     setActiveModal("create");
//   };

//   const handleCloseModal = () => {
//     setActiveModal("");
//   };

//   const handleSeleectedCard = (card) => {
//     setActiveModal("preview");
//     setSelectedCard(card);
//   };

//   const onAddItem = (values) => {
//     console.log(values);
//   };

//   // start modal click effect

//   const modalRef = useRef(null);

//   useEffect(() => {
//     const handleOutsideClick = (e) => {
//       // console.log(modalRef.current, e.target);
//       if (e.target.classList.contains("modal")) {
//         handleCloseModal();
//       }
//     };

//     const handleEscapeKey = (e) => {
//       if (e.key === "Escape") {
//         handleCloseModal();
//       }
//     };

//     if (activeModal) {
//       // console.log(modalRef.current, e.target);
//       document.addEventListener("mousedown", handleOutsideClick);
//       document.addEventListener("keydown", handleEscapeKey);
//     }

//     return () => {
//       document.removeEventListener("mousedown", handleOutsideClick);
//       document.removeEventListener("keydown", handleEscapeKey);
//     };
//   }, [activeModal]);

//   const handleToggleSwitchChange = () => {
//     if (currentTemperatureUnit === "C") setCurrentTemperatureUnit("F");
//     if (currentTemperatureUnit === "F") setCurrentTemperatureUnit("C");
//   };

//   useEffect(() => {
//     getForecastWeather()
//       .then((data) => {
//         // console.log("data", data);
//         const currentCity = data.name;
//         setCity(currentCity);
//         const temperature = parseWeatherData(data);
//         console.log(temperature);
//         setTemp(temperature);
//       })
//       .catch((error) => {
//         console.error("Error fetching weather data:", error);
//       });
//   }, []);
//   // console.log(currentTemperatureUnit);
//   return (
//     <div className="center">
//       <CurrentTemperatureUnitContext.Provider
//         value={{ currentTemperatureUnit, handleToggleSwitchChange }}
//       >
//         <Header onCreateModal={handleCreateModal} city={city} />
//         <Switch>
//           <Route exact path="/">
//             <Main weatherTemp={temp} onSelectedCard={handleSeleectedCard} />
//           </Route>
//           <Route path="/profile">
//             <Profile />
//           </Route>
//         </Switch>

//         <Footer />
//         {activeModal === "create" && (
//           <AddItemModal
//             handleCloseModal={handleCloseModal}
//             isOpen={activeModal === "create"}
//             onAddItem={onAddItem}
//           />
//         )}
//         {activeModal === "preview" && (
//           <ItemModal
//             selectedCard={selectedCard}
//             onClose={handleCloseModal}
//             // ref={modalRef}
//           />
//         )}
//       </CurrentTemperatureUnitContext.Provider>
//     </div>
//   );
// }

// export default App;

// New code

import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ItemModal from "../ItemModal/ItemModal";
import AddItemModal from "../../AddItemModal/AddItemModal";

import { Route, Switch } from "react-router-dom";
import Profile from "../Profile/Profile";
import { getForecastWeather, parseWeatherData } from "../../utils/WeatherApi";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);
  const [city, setCity] = useState("");
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [clothingItems, setClothingItems] = useState([]);

  const handleCreateModal = () => {
    setActiveModal("create");
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  const handleSelectedCard = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const onAddItem = (newItem) => {
    setClothingItems([newItem, ...clothingItems]);

    handleCloseModal();
  };

  useEffect(() => {
    const handleEscapeKey = (e) => {
      if (e.key === "Escape") {
        handleCloseModal();
      }
    };

    if (activeModal) {
      document.addEventListener("keydown", handleEscapeKey);
    }

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [activeModal]);

  const handleToggleSwitchChange = () => {
    setCurrentTemperatureUnit((prevUnit) => (prevUnit === "C" ? "F" : "C"));
  };

  useEffect(() => {
    getForecastWeather()
      .then((data) => {
        const currentCity = data.name;
        setCity(currentCity);
        const temperature = parseWeatherData(data);
        setTemp(temperature);
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
      });
  }, []);

  return (
    <div className="center">
      <CurrentTemperatureUnitContext.Provider
        value={{ currentTemperatureUnit, handleToggleSwitchChange }}
      >
        <Header onCreateModal={handleCreateModal} city={city} />
        <Switch>
          <Route exact path="/">
            <Main weatherTemp={temp} onSelectedCard={handleSelectedCard} />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
        </Switch>
        <Footer />
        {activeModal === "create" && (
          <AddItemModal
            handleCloseModal={handleCloseModal}
            isOpen={activeModal === "create"}
            onAddItem={onAddItem}
          />
        )}
        {activeModal === "preview" && (
          <ItemModal selectedCard={selectedCard} onClose={handleCloseModal} />
        )}
      </CurrentTemperatureUnitContext.Provider>
    </div>
  );
}

export default App;

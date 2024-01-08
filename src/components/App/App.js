// import logo from "..public/favicon.ico";
// import logo from "./logo.svg";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ModalWithForm from "../ModalWithForm/ModalWIthForm";
import { useState, useEffect, useRef } from "react";
import ItemModal from "../ItemModal/ItemModal";
import { getForecastWeather, parseWeatherData } from "../../utils/WeatherApi";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import Profile from "../Profile/Profile";

function App() {
  const weatherTemp = "75° F";
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);
  const [city, setCity] = useState("");
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");

  const handleCreateModal = () => {
    setActiveModal("create");
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  const handleSeleectedCard = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  // start modal click effect

  const modalRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      // console.log(modalRef.current, e.target);
      if (e.target.classList.contains("modal")) {
        handleCloseModal();
      }
    };

    const handleEscapeKey = (e) => {
      if (e.key === "Escape") {
        handleCloseModal();
      }
    };

    if (activeModal) {
      // console.log(modalRef.current, e.target);
      document.addEventListener("mousedown", handleOutsideClick);
      document.addEventListener("keydown", handleEscapeKey);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [activeModal]);

  const handleToggleSwitchChange = () => {
    if (currentTemperatureUnit === "C") setCurrentTemperatureUnit("F");
    if (currentTemperatureUnit === "F") setCurrentTemperatureUnit("C");
  };

  useEffect(() => {
    getForecastWeather()
      .then((data) => {
        // console.log("data", data);
        const currentCity = data.name;
        setCity(currentCity);
        const temperature = parseWeatherData(data);
        console.log(temperature);
        setTemp(temperature);
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
      });
  }, []);
  // console.log(currentTemperatureUnit);
  return (
    <div className="center">
      <CurrentTemperatureUnitContext.Provider
        value={{ currentTemperatureUnit, handleToggleSwitchChange }}
      >
        <Header onCreateModal={handleCreateModal} city={city} />
        <Switch>
          <Route exact path="/">
            <Main weatherTemp={temp} onSelectedCard={handleSeleectedCard} />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
        </Switch>

        <Footer />
        {activeModal === "create" && (
          <ModalWithForm
            name="new-garment"
            className="modal__container"
            title="New garment"
            onClose={handleCloseModal}
            // ref={modalRef}
          >
            <div>
              <label className="modal__name">
                <b>Name</b>
                <input
                  className="modal__text"
                  type="text"
                  name="name"
                  minLength="1"
                  maxLength="30"
                  placeholder="Name"
                />
              </label>
            </div>
            <div>
              <label className="modal__link">
                <b>Image</b>
                <input
                  className="modal__url"
                  type="url"
                  name="link"
                  minLength="1"
                  maxLength="30"
                  placeholder="Image URL"
                />
              </label>
            </div>
            <p>
              <b>Select the weather type:</b>
            </p>
            <div className="modal__radio">
              <div>
                <input type="radio" id="hot" value="hot" name="weather" />
                <label htmlFor="hot">Hot</label>
              </div>
              <div>
                <input type="radio" id="warm" value="warm" name="weather" />
                <label htmlFor="warm">Warm</label>
              </div>
              <div>
                <input type="radio" id="cold" value="cold" name="weather" />
                <label htmlFor="cold">Cold</label>
              </div>
            </div>
          </ModalWithForm>
        )}
        {activeModal === "preview" && (
          <ItemModal
            selectedCard={selectedCard}
            onClose={handleCloseModal}
            // ref={modalRef}
          />
        )}
      </CurrentTemperatureUnitContext.Provider>
    </div>
  );
}

export default App;

// import logo from "..public/favicon.ico";
// import logo from "./logo.svg";
import "./App.css";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import ModalWithForm from "./ModalWithForm/ModalWIthForm";
import { useState, useEffect } from "react";
import ItemModal from "./ItemModal/ItemModal";
import { getForecastWeather, parseWeatherData } from "./utils/WeatherApi";

function App() {
  const weatherTemp = "75° F";
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);

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

  useEffect(() => {
    getForecastWeather().then((data) => {
      const temperature = parseWeatherData(data);
      setTemp(temperature);
    });
  }, []);
  console.log(temp);

  return (
    <div>
      <Header onCreateModal={handleCreateModal} />
      <Main weatherTemp={temp} onSelectedCard={handleSeleectedCard} />
      <Footer />
      {activeModal === "create" && (
        <ModalWithForm
          className="modal__container"
          title="New garment"
          onClose={handleCloseModal}
        >
          <div>
            <label className="modal__name">
              <b>Name</b>
              <input
                className="modal__text"
                type="text"
                name="name"
                minLength="1"
                maxlength="30"
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
                maxlength="30"
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
              <label>Hot</label>
            </div>
            <div>
              <input type="radio" id="warm" value="warm" name="weather" />
              <label>Warm</label>
            </div>
            <div>
              <input type="radio" id="cold" value="cold" name="weather" />
              <label>Cold</label>
            </div>
          </div>
        </ModalWithForm>
      )}
      {activeModal === "preview" && (
        <ItemModal selectedCard={selectedCard} onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default App;

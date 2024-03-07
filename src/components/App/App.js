import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ItemModal from "../ItemModal/ItemModal";
import AddItemModal from "../AddItemModal/AddItemModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import LoginModal from "../LoginModal/LoginModal";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import { defaultClothingItems } from "../../utils/contants";
import { Route, Switch } from "react-router-dom";
import Profile from "../Profile/Profile";
import { getForecastWeather, parseWeatherData } from "../../utils/WeatherApi";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
import { fetchItems } from "../../utils/api";
import { addItem, deleteItem } from "../../utils/api";
import { register } from "../../utils/auth";
import { login } from "../../utils/auth";
import { checkToken } from "../../utils/auth";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);
  const [city, setCity] = useState("");
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [clothingItems, setClothingItems] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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

  useEffect(() => {
    fetchItems()
      .then((data) => {
        setClothingItems(data);
      })
      .catch((error) => {
        console.error("Error fetching items:", error);
      });
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (token) {
      checkToken(token)
        .then((userData) => {
          setIsAuthenticated(true);
          setUser(userData);
        })
        .catch((error) => {
          localStorage.removeItem("jwt");
          console.error(error);
        });
    }
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (token) {
      checkToken(token)
        .then((userData) => {
          setIsLoggedIn(true);
          setCurrentUser(userData);
          setIsAuthenticated(true);
          setUser(userData);
        })
        .catch((error) => {
          setIsLoggedIn(false);
          localStorage.removeItem("jwt");
          console.error(error);
        });
    }
  }, []);

  const handleDeleteItem = async (itemId) => {
    try {
      await deleteItem(itemId);
      setClothingItems((prevItems) =>
        prevItems.filter((item) => item._id !== itemId)
      );
      handleCloseModal();
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  const handleAddItem = async (itemData) => {
    try {
      const newItem = await addItem(itemData);
      setClothingItems((prevItems) => [newItem, ...prevItems]);
      handleCloseModal();
    } catch (error) {
      console.error("Error adding item:", error);
    }
  };

  const handleOpenCreateModal = () => {
    console.log("hello");
    setActiveModal("create");
  };

  // new code

  const handleRegister = async (username, email, password) => {
    try {
      const userData = await register(username, email, password);
      setUser(userData);
      setIsAuthenticated(true);
      handleCloseModal();
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  const handleLogin = async (email, password) => {
    try {
      const res = await login(email, password);
      if (res.token) {
        localStorage.setItem("jwt", res.token);
        setIsAuthenticated(true);
        setUser(res.user);
        handleCloseModal();
      } else {
        console.error("Login failed: No token received");
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  //end new code

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="center">
        <CurrentTemperatureUnitContext.Provider
          value={{ currentTemperatureUnit, handleToggleSwitchChange }}
        >
          <Header
            onCreateModal={handleCreateModal}
            city={city}
            isLoggedIn={isLoggedIn}
          />

          <Switch>
            <Route exact path="/">
              <Main
                weatherTemp={temp}
                onSelectedCard={handleSelectedCard}
                clothingItems={clothingItems}
                onAddNewItem={handleOpenCreateModal}
              />
            </Route>
            <Route path="/profile">
              <Profile
                clothingItems={clothingItems}
                onSelectedCard={handleSelectedCard}
                onAddNewItem={handleOpenCreateModal}
              />
            </Route>
          </Switch>

          <Footer />
          {activeModal === "create" && (
            <AddItemModal
              handleCloseModal={handleCloseModal}
              isOpen={activeModal === "create"}
              onAddItem={handleAddItem}
            />
          )}
          {activeModal === "preview" && (
            <ItemModal
              selectedCard={selectedCard}
              onClose={handleCloseModal}
              onDelete={handleDeleteItem}
            />
          )}
          {activeModal === "register" && (
            <RegisterModal
              isOpen={activeModal === "register"}
              onClose={handleCloseModal}
              onRegister={handleRegister}
            />
          )}
          {activeModal === "login" && (
            <LoginModal
              isOpen={activeModal === "login"}
              onClose={handleCloseModal}
              onLogin={handleLogin}
            />
          )}
        </CurrentTemperatureUnitContext.Provider>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;

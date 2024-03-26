import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ItemModal from "../ItemModal/ItemModal";
import AddItemModal from "../AddItemModal/AddItemModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import LoginModal from "../LoginModal/LoginModal";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
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
import { addCardLike, removeCardLike } from "../../utils/api";
import EditProfileModal from "../EditProfileModal/EditProfileModal";
import { updateUserProfile } from "../../utils/api";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);
  const [city, setCity] = useState("");
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [clothingItems, setClothingItems] = useState([]);
  // const [isAuthenticated, setIsLoggedIn] = useState(false);
  // const [user, setCurrentUser] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);
  // const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);

  const handleCreateModal = () => {
    setActiveModal("create");
  };

  const handleEditProfileModal = () => {
    setActiveModal("editProfile");
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  const handleSelectedCard = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const switchToSignUp = () => {
    setActiveModal("register");
  };

  const switchToLogin = () => {
    setActiveModal("login");
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
          setIsLoggedIn(true);
          setCurrentUser(userData);
        })
        .catch((error) => {
          setIsLoggedIn(false);
          localStorage.removeItem("jwt");
          console.error(error);
        });
    }
  }, [isLoggedIn]);

  const handleDeleteItem = async (itemId) => {
    try {
      const token = localStorage.getItem("jwt");
      await deleteItem(itemId, token);
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
      const token = localStorage.getItem("jwt");
      const { data: newItem } = await addItem(itemData, token);
      console.log(newItem);
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
  const handleOpenSignUpModal = () => {
    setActiveModal("register");
  };

  const handleOpenSignInModal = () => {
    setActiveModal("login");
  };

  // new code

  const handleRegister = async (name, email, password, avatar) => {
    try {
      const userData = await register(name, email, password, avatar);
      setCurrentUser(userData);
      setIsLoggedIn(true);
      handleCloseModal();
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  const handleLogin = async (email, password) => {
    console.log("hello");
    try {
      const res = await login(email, password);

      if (res.token) {
        localStorage.setItem("jwt", res.token);
        setIsLoggedIn(true);
        const user = await checkToken(res.token);
        setCurrentUser(user);
        handleCloseModal();
      } else {
        console.error("Login failed: No token received");
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  const handleCardLike = async ({ id, isLiked }) => {
    const token = localStorage.getItem("jwt");
    try {
      const updatedCard = isLiked
        ? await addCardLike(id, token)
        : await removeCardLike(id, token);

      setClothingItems((prevItems) =>
        prevItems.map((item) => (item._id === id ? updatedCard : item))
      );
    } catch (err) {
      console.error(err);
    }
  };

  const onSignOut = () => {
    localStorage.removeItem("jwt");
    setIsLoggedIn(false);
    setCurrentUser(null);
  };

  const handleUpdateUserProfile = async (userData) => {
    const token = localStorage.getItem("jwt");
    if (!token) {
      console.error("No token found");
      return;
    }

    try {
      const updatedUser = await updateUserProfile(userData, token);
      setCurrentUser(updatedUser);
      handleCloseModal();
    } catch (error) {
      console.error("Failed to update user profile:", error);
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
            onOpenSignUpModal={handleOpenSignUpModal}
            onOpenSignInModal={handleOpenSignInModal}
            city={city}
            isLoggedIn={isLoggedIn}
            onCreateModal={handleCreateModal}
          />

          <Switch>
            <Route exact path="/">
              <Main
                weatherTemp={temp}
                onSelectedCard={handleSelectedCard}
                clothingItems={clothingItems}
                onAddNewItem={handleOpenCreateModal}
                onCardLike={handleCardLike}
              />
            </Route>
            {/* <Route path="/profile">
              <Profile
                clothingItems={clothingItems}
                onSelectedCard={handleSelectedCard}
                onAddNewItem={handleOpenCreateModal}
                onSignOut={onSignOut}
                onCardLike={handleCardLike}
                onEditProfile={handleEditProfileModal}
              />
            </Route> */}
            <ProtectedRoute path="/profile">
              <Profile
                clothingItems={clothingItems}
                onSelectedCard={handleSelectedCard}
                onAddNewItem={handleOpenCreateModal}
                onSignOut={onSignOut}
                onCardLike={handleCardLike}
                onEditProfile={handleEditProfileModal}
              />
            </ProtectedRoute>
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
          {/* Register Modal */}
          {activeModal === "register" && (
            <RegisterModal
              onClose={handleCloseModal}
              onRegister={handleRegister}
              switchToLogin={switchToLogin}
            />
          )}

          {activeModal === "editProfile" && (
            <EditProfileModal
              isOpen={activeModal === "editProfile"}
              onClose={handleCloseModal}
              onUpdateUser={handleUpdateUserProfile}
            />
          )}

          {/* Login Modal */}
          {activeModal === "login" && (
            <LoginModal
              onClose={handleCloseModal}
              onLogin={handleLogin}
              switchToSignUp={switchToSignUp}
            />
          )}
        </CurrentTemperatureUnitContext.Provider>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;

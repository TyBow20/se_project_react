// import React from "react";
// import { Link } from "react-router-dom";
// import "./Header.css";
// import logo from "../../images/wtwr.svg";
// import avatar from "../../images/avatar.svg";
// import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
// import React, { useContext } from "react";
// import CurrentUserContext from "../../contexts/CurrentUserContext";

import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../images/wtwr.svg";
import avatar from "../../images/avatar.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import CurrentUserContext from "../../contexts/CurrentUserContext";

const Header = ({
  onCreateModal,
  date,
  city,
  isLoggedIn,
  onOpenSignInModal,
  onOpenSignUpModal,
}) => {
  const currentUser = useContext(CurrentUserContext);
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <div className="header__logo">
        <Link to="/">
          {" "}
          <img src={logo} alt="logo" />
        </Link>
        <div className="header__location">{`${currentDate}, ${city}`} </div>
      </div>
      <div className="header__avatar-logo">
        <ToggleSwitch />
        {!currentUser ? (
          <>
            <button
              className="header__newclothes"
              onClick={onOpenSignUpModal}
              type="text"
            >
              Sign Up
            </button>{" "}
            <button
              className="header__newclothes"
              onClick={onOpenSignInModal}
              type="text"
            >
              Log In
            </button>
          </>
        ) : (
          <>
            <button
              className="header__newclothes"
              onClick={onCreateModal}
              type="text"
            >
              + Add clothes
            </button>
            <Link to="/profile">
              {" "}
              <div className="header__name">
                {currentUser?.name || "Your Name"}
              </div>
            </Link>
            <img
              src={currentUser.avatar}
              alt="avatar"
              className="header__profile-pic"
            />
          </>
        )}
      </div>
    </header>
  );
};

export default Header;

import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../images/wtwr.svg";
import avatar from "../../images/avatar.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";

const Header = ({ onCreateModal, date, city }) => {
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
        <button
          className="header__newclothes"
          onClick={onCreateModal}
          type="text"
        >
          + Add clothes
        </button>
        <Link to="/profile">
          {" "}
          <div className="header__name">Terrence Tegegne</div>
        </Link>
        <img src={avatar} alt="avatar" />
      </div>
    </header>
  );
};

export default Header;

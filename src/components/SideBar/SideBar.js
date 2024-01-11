import React from "react";
import "./SideBar.css";
import avatar from "../../images/avatar.svg";

const SideBar = () => {
  return (
    <div className="side__bar">
      <img src={avatar} alt="avatar" />
      <p className="side__bar_name">Terrence Tegegne</p>
    </div>
  );
};

export default SideBar;

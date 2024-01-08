import React from "react";
import "./SideBar.css";
import avatar from "../../images/avatar.svg";

const SideBar = () => {
  return (
    <div className="side_bar">
      <img src={avatar} alt="avatar" />
      <p>Terrence Tegegne</p>
    </div>
  );
};

export default SideBar;

// import React from "react";
// import "./SideBar.css";
// import avatar from "../../images/avatar.svg";

// const SideBar = () => {
//   return (
//     <div className="side__bar">
//       <img src={avatar} alt="avatar" />
//       <p className="side__bar_name">Terrence Tegegne</p>
//     </div>
//   );
// };

// export default SideBar;

//refactored code

// import React from "react";
// import "./SideBar.css";
// import avatar from "../../images/avatar.svg"; // Ensure this path is correct

// const SideBar = ({ onSignOut }) => {
//   return (
//     <div className="side__bar">
//       <img src={avatar} alt="User avatar" className="side__bar_avatar" />
//       <p className="side__bar_name">Terrence Tegegne</p>
//       <div>
//         <button className="side__bar_signout" onClick={onSignOut}>
//           Sign Out
//         </button>
//       </div>
//     </div>
//   );
// };

// export default SideBar;

import React, { useContext } from "react";
import "./SideBar.css";
import avatar from "../../images/avatar.svg";
import CurrentUserContext from "../../contexts/CurrentUserContext";

const SideBar = ({ onSignOut, onEditProfile }) => {
  const currentUser = useContext(CurrentUserContext);
  const userName = currentUser ? currentUser.name : "No User";
  return (
    <div className="side__bar">
      <div className="side__bar-first">
        <img src={avatar} alt="User avatar" className="side__bar_avatar" />
        <p className="side__bar_name">{currentUser.name}</p>
      </div>
      <div className="side__bar-second">
        <button className="side__bar_edit-profile" onClick={onEditProfile}>
          Change profile data
        </button>
        <button className="side__bar_signout" onClick={onSignOut}>
          Log out
        </button>
      </div>
    </div>
  );
};

export default SideBar;

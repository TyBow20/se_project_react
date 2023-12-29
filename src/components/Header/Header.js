import "./Header.css";
import logo from "../../images/wtwr.svg";
import avatar from "../../images/avatar.svg";

const Header = ({ onCreateModal, date, city }) => {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });
  console.log("currentDate", currentDate);
  // const city = "New York";
  return (
    // <div>
    <header className="header">
      <div className="header__logo">
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div className="header__location">{`${currentDate}, ${city}`} </div>
      </div>
      <div className="header__avatar-logo">
        <div>
          <button
            className="header__newclothes"
            onClick={onCreateModal}
            type="text"
          >
            {" "}
            + Add clothes
          </button>
        </div>
        <div className="header__name">Terrence Tegegne</div>
        <div>
          <img src={avatar} alt="avatar" />
        </div>
      </div>
    </header>
    // </div>
  );
};

export default Header;

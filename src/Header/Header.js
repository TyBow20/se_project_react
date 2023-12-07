import "./Header.css";

const Header = () => {
  return (
    <div>
      <header className="header">
        <div className="header__logo">
          <div>
            <img src={require("../images/wtwr.svg").default} alt="logo" />
          </div>
          <div className="header__location">December, 5th New York</div>
        </div>
        <div className="header__avatar-logo">
          <div>
            <button type="text"> + Add New Clothes</button>
          </div>
          <div className="header__name">Terrence Tegegne</div>
          <div>
            <img src={require("../images/avatar.svg").default} alt="avatar" />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;

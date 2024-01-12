import { LOGO_URL } from "../utils/constant";
import { useState } from "react";
const Header = () => {
  const [toggleLoginName, setToggleLoginName] = useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="food logo" />
      </div>
      <nav className="nav-items">
        <ul className="list-container">
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            className="log-btn"
            onClick={() => {
              toggleLoginName === "Login"
                ? setToggleLoginName("Logout")
                : setToggleLoginName("Login");
            }}
          >
            {toggleLoginName}
          </button>
        </ul>
      </nav>
    </div>
  );
};

export default Header;

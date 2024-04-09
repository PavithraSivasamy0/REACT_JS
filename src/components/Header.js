import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constant";
import { useState } from "react";
const Header = () => {
  const [toggleLogIn, setToggleLogIn] = useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="food logo" />
      </div>
      <nav className="nav-items">
        <ul className="list-container">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>Cart</li>
          <button
            className="log-btn"
            onClick={() => {
              toggleLogIn === "Login"
                ? setToggleLogIn("Logout")
                : setToggleLogIn("Login");
            }}
          >
            {toggleLogIn}
          </button>
        </ul>
      </nav>
    </div>
  );
};

export default Header;

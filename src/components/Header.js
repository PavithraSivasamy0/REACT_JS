import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constant";
import { useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
  const [toggleLogIn, setToggleLogIn] = useState("Login");
  const status = useOnlineStatus();
  return (
    <div className="flex p-4 mb-2 justify-between bg-red-500">
      <div className="logo-container">
        <img className="w-32" src={LOGO_URL} alt="food logo" />
      </div>
      <nav className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">online {status ? "✔" : "❌"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">Cart</li>
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

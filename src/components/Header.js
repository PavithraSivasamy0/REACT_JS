import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constant";
import { useSelector } from "react-redux";
import { useContext, useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/userContext";

const Header = () => {
  const [toggleLogIn, setToggleLogIn] = useState("Login");
  const status = useOnlineStatus();
  const data = useContext(userContext);
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div className="flex p-4 mb-2 justify-between bg-red-500">
      <div className="logo-container">
        <img className="w-32" src={LOGO_URL} alt="food logo" />
      </div>
      <nav className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-2">online {status ? "✔" : "❌"}</li>
          <li className="px-2">
            <Link to="/">Home</Link>
          </li>
          <li className="px-2">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-2">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-2">
            <Link to="/cart">Cart {cartItems.length} </Link>
          </li>
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
          <li className="px-2">{data.loggedUser}</li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;

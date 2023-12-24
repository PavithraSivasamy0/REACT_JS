import { LOGO_URL } from "../utils/constant";

const Header = () => {
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
        </ul>
      </nav>
    </div>
  );
};

export default Header;

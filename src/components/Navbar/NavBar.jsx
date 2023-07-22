import React, { useState } from "react";
import "./NavBar.css";
import { GiHamburgerMenu } from "react-icons/gi";

const NavBar = () => {
  const [showNavMenu, setShowNavMenu] = useState(false);

  const handleHamburger = () => {
    setShowNavMenu(!showNavMenu);
  };
  return (
    <header className="header__container">
      <nav className="navbar">
        <h1 className="navbar__logo">Hunter</h1>

        <div className="mavbar__menu">
          <div className="navbar__hamburgerMenu">
            <GiHamburgerMenu onClick={handleHamburger} />
          </div>
          {showNavMenu && (
            <div className=" navbar__menuBox">
              <ul className="navbar__ul">
                <li className="navbar__li">
                  <a href="#" className="navbar__a">
                    Price
                  </a>
                </li>
                <li className="navbar__li">
                  <a href="#" className="navbar__a">
                    Policy
                  </a>
                </li>
                <li className="navbar__li">
                  <a href="#" className="navbar__a">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default NavBar;

import React, { useState } from "react";
import "./navbar.css";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";
function Navbar() {
  const [clicked, setClicked] = useState(false);

  return (
    <nav className="navbarItems">
      <h1 className="navbar-logo">Trippy</h1>
      <div className="menu-icons">
        <i
          className={clicked ? "fas fa-times" : "fas fa-bars"}
          onClick={() => setClicked(!clicked)}
        ></i>
      </div>
      <ul className={clicked ? "nav-menu active" : "nav-menu"}>
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link className={item.cName} to={item.url}>
                <i className={item.icon}></i>
                {item.title}
              </Link>
            </li>
          );
        })}
        <button>Sign Up</button>
      </ul>
    </nav>
  );
}

export default Navbar;

import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
// =========================================================================
export default function Nav() {
  return (
    <div>
      <nav className="menu-container">
        {/* <!-- burger menu --> */}
        <input type="checkbox" aria-label="Toggle menu" />
        <span></span>
        <span></span>
        <span></span>

        {/* <!-- logo --> */}
        <a href="/" className="menu-logo">
          <img
            style={{ transform: "scale(1.8)" }}
            src="./images/MeirShoesBlack.png"
            alt="Shoes and Blues logo"
          />
        </a>

        {/* <!-- menu items --> */}
        <div className="menu">
          <ul>
            <li>
              <Link to="/" style={{ margin: "1rem" }}>
                Home
              </Link>
              {/* <a href="#home">Home</a> */}
            </li>
            <li>
              <Link to="/shoes" style={{ margin: "1rem" }}>
                Shoe Collection
              </Link>
              {/* <a href="#collection">Shoe Collection</a> */}
            </li>
            <li>
              <Link to="/group-two" style={{ margin: "1rem" }}>
                Add Shoe
              </Link>
              {/* <a href="#addShoe">Add Shoe</a> */}
            </li>
          </ul>
          <ul></ul>
        </div>
      </nav>
    </div>
  );
}

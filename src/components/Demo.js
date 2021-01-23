import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaHome, FaInfoCircle } from "react-icons/fa";

const Demo = ({ component: Component, context: Context }) => {
  const [isMenuOpen, ToggleMenu] = useState(false);
  const openMenu = () => {
    ToggleMenu(true);
  };
  const closeMenu = () => {
    ToggleMenu(false);
  };
  return (
    <Fragment>
      <div
        className={isMenuOpen ? "demo-container show-nav" : "demo-container"}
      >
        <div className="circle-container">
          <div className="circle">
            <button id="close" onClick={closeMenu}>
              <FaTimes />
            </button>
            <button id="open" onClick={openMenu}>
              <FaBars />
            </button>
          </div>
        </div>
        <div className="content">
          <Context>
            <Component />
          </Context>
        </div>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">
              <FaHome />
              Home
            </Link>
          </li>
          <li>
            <FaInfoCircle />
            More Info
          </li>
        </ul>
      </nav>
    </Fragment>
  );
};

export default Demo;

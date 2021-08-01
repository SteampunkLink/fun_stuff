import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaHome, FaInfoCircle } from "react-icons/fa";
import Modal from "./Modal";
import projectData from "../projectData";

const Demo = ({ component: Component, context: Context }) => {
  const [isMenuOpen, toggleMenu] = useState(false);
  const [modalClass, toggleModal] = useState("modal modal-close");
  const [project, setProject] = useState({});
  const handleDismiss = () => {
    toggleModal("modal modal-close");
  };
  useEffect(() => {
    const currProject = projectData.filter(
      (project) => project.link === window.location.pathname
    );
    setProject(currProject[0]);
  }, []);
  return (
    <Fragment>
      <div
        className={isMenuOpen ? "demo-container show-nav" : "demo-container"}
      >
        <div className="circle-container">
          <div className="circle">
            <button id="close" onClick={() => toggleMenu(false)}>
              <FaTimes />
            </button>
            <button id="open" onClick={() => toggleMenu(true)}>
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
      <nav className={isMenuOpen ? "demo-menu" : "demo-menu demo-menu-disable"}>
        <ul>
          <li>
            <Link to="/">
              <FaHome />
              Home
            </Link>
          </li>
          <li>
            <button onClick={() => toggleModal("modal")}>
              <FaInfoCircle />
              More Info
            </button>
          </li>
        </ul>
      </nav>
      <Modal
        modalClass={modalClass}
        dismissMenu={handleDismiss}
        project={project}
      />
    </Fragment>
  );
};

export default Demo;

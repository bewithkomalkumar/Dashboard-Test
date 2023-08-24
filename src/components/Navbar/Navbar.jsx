import React, { useState } from "react";
import styles from "./Navbar.module.css";
import dashbord from "./images/dashboard.png";
import Assessment from "./images/exam.png";

const Navbar = () => {
  const [activeItem, setActiveItem] = useState(null);
  const handleClick = (item) => {
    setActiveItem(item);
  };
  return (
    <div className={styles.nav}>
      <div
        onClick={() => {
          handleClick("Dashboard");
        }}
        className={`${activeItem === "Dashboard" ? styles.active : ""}`}
      >
        <img src={dashbord} alt="Dashboard" width="20%" />
        Dashboard
      </div>
      <div
        onClick={() => {
          handleClick("Assessment");
        }}
        className={`${activeItem === "Assessment" ? styles.active : ""}`}
      >
        <img src={Assessment} alt="dashnprd" width="20%" />
        Assessment
      </div>
      <div
        className={`${activeItem === "My Library" ? styles.active : ""}`}
        onClick={() => {
          handleClick("My Library");
        }}
      >
        <img src={dashbord} alt="dashnprd" width="20%" />
        My Library
      </div>
      <line></line>
      <p>Admin</p>

      <div
        className={`${activeItem === "Round Status" ? styles.active : ""}`}
        onClick={() => {
          handleClick("Round Status");
        }}
      >
        <img src={dashbord} alt="dashnprd" width="20%" />
        Round Status
      </div>
    </div>
  );
};

export default Navbar;

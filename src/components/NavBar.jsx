import { Link } from "react-router-dom";
import "./NavBar.css";
import { useState } from "react";

const NavBar = (prop) => {

  // const colors = ['red', 'green', 'blue', 'yellow'];

  return (
    <nav className="nav-container" style={{color: 'white', backgroundColor: prop.mode.backgroundColor[1]}}>
      <div className="logo-section">
        <h2>{prop.title}</h2>
      </div>

      <div className="link-section">
        <ul style={{ color: prop.mode.color }}>
          <li>  HOME </li>
          <li>PRODUCTS</li>
          <li>ABOUT US</li>
          <li>  {prop.contactUs}  </li>
        </ul>
      </div>

      <div className="search-section">
        <input type="text" placeholder="search" />
        <button>Search</button>
      </div>
      {/* <button onClick={prop.toggleStyle} className="toggleStyle">
        {prop.toggleBtn}
      </button> */}
      <div className="all-button-color">
      <div className="button-item" onClick={prop.toggleStyle}  style={{backgroundColor: prop.mode.backgroundColor[0]}}></div>
      <div className="button-item"  style={{backgroundColor: prop.mode.backgroundColor[1]}}></div>
      <div className="button-item"  style={{backgroundColor: prop.mode.backgroundColor[2]}}></div>
      <div className="button-item"  style={{backgroundColor: prop.mode.backgroundColor[3]}}></div>
</div>
</nav>
  );
}

export default NavBar;

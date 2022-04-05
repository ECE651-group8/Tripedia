import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Avatar from "@mui/material/Avatar";
function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            {/* TRVL
            <i className='fab fa-typo3' /> */}
            <img
              src="https://i.postimg.cc/yYYXhbG5/logo.png"
              alt="Tripedia"
              className="logo"
            />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                to="/search"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Search
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/upload"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Upload
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/display"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Now
              </Link>
            </li>

            <li>
              <Link
                to="/sign-up"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          <Avatar
            alt="Lia"
            src="http://p1-q.mafengwo.net/s10/M00/8E/78/wKgBZ1nwuTiAR5z9AAWG6X5Chik43.jpeg?imageMogr2%2Fthumbnail%2F%21120x120r%2Fgravity%2FCenter%2Fcrop%2F%21120x120%2Fquality%2F90"
            sx={{ width: 44, height: 44 }}
          />
        </div>
      </nav>
      <hr></hr>
    </>
  );
}

export default Navbar;

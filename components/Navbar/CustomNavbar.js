// import React from "react";
// import Logo from "../../assets/logo.png";

// const Header = () => {
//   return (
//     <header id="header">
//       <img className="logo" src={Logo} />
//       <p>Centurion University</p>
//       <nav className="menu">
//         <a href="#">home</a>
//         <a href="#">about</a>
//         <a href="#">events</a>
//         <a href="#">gallery</a>
//         <a href="#">contact</a>
//         <a href="#">log-in</a>
//         <div className="animation start-home"></div>
//       </nav>
//     </header>
//   );
// };

// export default Header;

import React from "react";
import Logo from "../../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./CustomNavbar.css";

const Navbar = () => {
  window.addEventListener("scroll", () => {
    document
      .querySelector("nav", "nav-item")
      .classList.toggle("window-scroll", window.scrollY > 0);
  });
  const navbar = document.querySelector(".navbar", "navbar-toggler");
  window.onscroll = () => {
    if (window.scrollY >= 0) {
      navbar.classList.add("fixed-top");
    } else {
      navbar.classList.remove("fixed-top");
    }
  };

  return (
    <nav id="navbar" className="navbar navbar-expand-lg">
      <div className="container navbar">
        <a className="navbar-brand" href="#">
          <div className="container-2">
            <img className="logo" src={Logo} alt="Logo..." />
            <p className="title">Centurion University</p>
          </div>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }} />
        </button>

        <div
          className="collapse navbar-collapse text-center"
          style={
            {
              // marginLeft: "30%",
              // marginRight: "20%",
            }
          }
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ms-auto mr-auto">
            <li className="nav-item active">
              <a classNames="nav-link" href="/">
                Home <span className="sr-only"></span>
              </a>
            </li>
            <li className="nav-item">
              <a classNames="nav-link" href="/about">
                about
              </a>
            </li>
            <li className="nav-item">
              <a classNames="nav-link" href="/event">
                event
              </a>
            </li>
            <li className="nav-item">
              <a classNames="nav-link" href="/contact">
                contacts
              </a>
            </li>
            <li className="nav-item">
            <a href="https://cutm.icloudems.com/">Login</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

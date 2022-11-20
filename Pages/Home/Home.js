import React from "react";
import { Link } from "react-router-dom";
import Typed from "react-typed";
import "./Home.css";

const Home = () => {
  return (
    <div className="header-wrapper">
      <div className="main-info">
        <h1>Centurion University of Technology & Management</h1>
        <Typed
          className="typed-text"
          strings={["Join and celebrate with us in this event !!"]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        <Link to="/register">
        <a className="btn-main-offer">
          Register now !!
        </a>
        </Link>
      </div>
    </div>
  );
};

export default Home;

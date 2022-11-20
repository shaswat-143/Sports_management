import React from "react";
import CustomNavbar from "./Navbar/CustomNavbar";
import "../components/Navbar/CustomNavbar.css";

const Base = ({ title = "Welcome to our website", children }) => {
  return (
    <div className="container-fluid p-0 m-0">
      <CustomNavbar />
      {children}
    </div>
  );
};

export default Base;

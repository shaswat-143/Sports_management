import React from "react";
import "./Contact.css";
import Img from "../../assets/cutm.jpg";

const Contact=() => {
  return (
    <div className="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
      <div className="card card0 border-0">
        <div className="row d-flex"></div>
        <div className="col-lg-6">
            <div className="card1 pb-5">
              {/* <div className="row">
                <img src={Img1} className="logo-1" />
              </div> */}
      
              <div className="row px-3 justify-content-center mt-4 mb-5 border-line">
                <img src={Img} className="image" />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card2 card border-0 px-4 py-5">
              <div className="row mb-4 px-3">
                <h2 className="mb-0 mr-4 mt-2">CONTACT US </h2>
                <div className="row px-3">
                <label className="mb-1">
                  <h6 className="mb-0 text-sm">Name </h6>
                </label>
                <input
                  className="mb-4"
                  type="Your Name"
                  name=" your name"
                  placeholder="Enter your name "
                />
              </div>
              <div className="row px-3">
                <label className="mb-1">
                  <h6 className="mb-0 text-sm">Email</h6>
                </label>
                <input
                  type="Your Email"
                  name="your email"
                  placeholder="Enter your mail"
                />
              </div>
              <div className="row px-3">
                <label className="mb-1">
                  <h6 className="mb-0 text-sm">Message</h6>
                </label>
                <input
                  type="Your Message"
                  name="your message"
                  placeholder="Enter your message"
                />
              </div>
              <div className="row px-3">
                <button type="submit" className="btn btn-blue text-center">
                <a href="">SUBMIT</a>
                  </button>
            
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default Contact;
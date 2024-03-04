import React from "react";
import Logo from "../../assets/logo.jpg";
import Movers from "../../assets/movers.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import "./home.css";

const Home = () => {
  return (
    <section className="container">
      <div className="header">
        <img src={Logo} alt="Bakkiego" className="logo_img" />

        <nav className="navbar">
          {/*navigation links */}
          <div className="moblieMenu-icon">
            <FontAwesomeIcon icon={faBars} />
          </div>
          <div className="navbar-links navbar-links2">
            <a href="/">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#business">Business</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>
      </div>
      <div className="container intro__panel">
        <div className="right__panel">
          <h2 className="motto">
            Connecting you to your nearest delivery service
          </h2>
          <p className="motto_text">
            Bakkiego is a delivery and haulage app designed to provide
            individuals and businesses in South Africa with a flexible,
            convenient, and affordable means of transporting their goods.
          </p>

          <div className="cta">
            <a href="#download" download className="btn">
              Get Bakkie Now
            </a>
            <a href="#business" className="btn btn-primary">
              Earn Money
            </a>
          </div>
        </div>
        <img src={Movers} alt="Movers" className="panel__img" />
      </div>
    </section>
  );
};

export default Home;

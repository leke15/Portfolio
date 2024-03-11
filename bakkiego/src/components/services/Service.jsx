import React from "react";
import Smart1 from "../../assets/five-hunnid.jpeg";
import Smart2 from "../../assets/one-ton.jpg";
import Leggo from "../../assets/four-ton.jpeg";
import Combo from "../../assets/eight-ton.jpg";
import "./service.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShieldHalved,
  faStopwatch20,
  faGaugeHigh,
} from "@fortawesome/free-solid-svg-icons";

const Service = () => {
  return (
    <section id="services" className="service-body">
      <h2 className="page-topic">Services</h2>
      {/* Services container */}

      <div className="services-container">
        {/* Service 1 */}
        <article className="service-item">
          <div className="item-image">
            <img src={Smart1} alt="" />
          </div>
          <h3 className="item-name">Smart 1</h3>
          <h4 className="item-desc">Trucks weighing from 500kg to 1 tons</h4>
          <div className="item-cta">
            <a href="#">Order Now</a>
          </div>
        </article>
        {/* Service 2  */}
        <article className="service-item">
          <div className="item-image">
            <img src={Smart2} alt="" />
          </div>
          <h3 className="item-name">Smart 2</h3>
          <h4 className="item-desc">Trucks weighing from 1tons to 2 tons</h4>
          <div className="item-cta">
            <a href="#">Order Now</a>
          </div>
        </article>
        {/*  service 3 */}
        <article className="service-item">
          <div className="item-image">
            <img src={Leggo} alt="" />
          </div>
          <h3 className="item-name">Leggo</h3>
          <h4 className="item-desc">Trucks weighing from 2tons to 4tons</h4>
          <div className="item-cta">
            <a href="#">Order Now</a>
          </div>
        </article>
        {/* service 4 */}
        <article className="service-item">
          <div className="item-image">
            <img src={Combo} alt="" />
          </div>
          <h3 className="item-name">Combo</h3>
          <h4 className="item-desc">Trucks weighing from 4tons to 8tons</h4>
          <div className="item-cta">
            <a href="#">Order Now</a>
          </div>
        </article>
      </div>
      {/* App Features  */}
      <div className="features-container">
        {/* App feature 1 */}
        <article className="feature-item">
          <div className="feat-icon">
            <FontAwesomeIcon icon={faShieldHalved} />
            <h3 className="feat-topic">Safe & Efffective</h3>
          </div>

          <h3 className="feat-desc">
            We ensure all Bakkies vehicles and Drivers are vetted and compliant
            with safety rules. Our Solution guarantees delivery for every trip
            with our delivery confirmation code before any driver completes his
            trip
          </h3>
        </article>
        {/* App feature 1 */}
        <article className="feature-item">
          <div className="feat-icon">
            <FontAwesomeIcon icon={faStopwatch20} />
            <h3 className="feat-topic">Fast Pickups</h3>
          </div>

          <h3 className="feat-desc">
            Easy and quick booking in just 2 tabs just add both location details
            and in the next tab just acceptance from the driver for the ride.
            Here we goo!
          </h3>
        </article>
        {/* App feature 1 */}
        <article className="feature-item">
          <div className="feat-icon">
            <FontAwesomeIcon icon={faGaugeHigh} />
            <h3 className="feat-topic">Safe & Efffective</h3>
          </div>

          <h3 className="feat-desc">
            Bakkiego aims to offer quick and efficiant delivery services to its
            customer.The app promises to deliver within the shortest possible
            time to meet the needs of its users
          </h3>
        </article>
      </div>
    </section>
  );
};

export default Service;

/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import SVGS from "../images/PackSvgs";
import "../css/App.css";

const App = () => {
  return (
    <>
      <div className="component-wrapper">
        <section className="section first">
          <img src={SVGS.SedanLogo} alt="icon-sedans" type="image/svg+xml" />
          <h2>Sedans</h2>
          <p>
            Choose a sedan for its affordability and excellent fuel economy.
            Ideal for cruising in the city or on your next road trip.
          </p>
          <button className="first">Learn More</button>
        </section>
        <section className="section secound">
          <img src={SVGS.SuvLogo} alt="icon-sedans" type="image/svg+xml" />
          <h2>SUVs</h2>
          <p>
            Take an SUV for its spacious interior, power, and versatility.
            Perfect for your next family vacation and off-road adventures.
          </p>
          <button className="secound">Learn More</button>
        </section>
        <section className="section third">
          <img src={SVGS.LuxuryLogo} alt="icon-sedans" type="image/svg+xml" />
          <h2>Luxury</h2>
          <p>
            Cruise in the best car brands without the bloated prices. Enjoy the
            enhanced comfort of a luxury rental and arrive in style.
          </p>
          <button className="third">Learn More</button>
        </section>
      </div>
      <div class="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Your Name Here</a>.
      </div>
    </>
  );
};

export default App;

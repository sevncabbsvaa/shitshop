import React from "react";
import "./Hero.scss";
import shitlogo from '../../assets/shit-logo.png'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__content">
        <h1 className="hero__title">
          Səviyyə burdan  <br />
          <span>başlayır</span>
        </h1>

        <p className="hero__desc">
          Davamı artıq səndən asılıdır.
        </p>
      </div>

      <div className="hero__image">
        <div className="card">
          <img src={shitlogo} alt="Shit Logo" width={400} height={400}/>
        </div>
      </div>
    </section>
  );
};

export default Hero;
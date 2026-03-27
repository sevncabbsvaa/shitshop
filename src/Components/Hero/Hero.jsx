import React from "react";
import "./Hero.scss";
import shitlogo from "../../assets/shit-logo.png";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__bg hero__bg--one"></div>
      <div className="hero__bg hero__bg--two"></div>

      <div className="hero__content">
        

        <h1 className="hero__title">
          Dostuna al,
          <br />
          <span>amma əvvəl özün yoxla</span>
        </h1>

        <p className="hero__desc">
          Dostuna, sevgilinə ya da özünə — kimə lazımdırsa onu sevindirəcək
          bir şey tap. Bəzən kiçik bir seçim belə böyük hisslər yaradır. Sadə
          bir günü xüsusi bir anıya çevir, adi bir hədiyyəni isə unudulmaz bir
          xatirəyə. Nəyə ehtiyac varsa, ya da kiminsə nəyə ehtiyacı olduğunu
          hiss edirsənsə, tərəddüd etmə — doğru hədiyyə hər şeyi dəyişə bilər.
        </p>

        <div className="hero__info">
          <div className="hero__info-card">
            <strong>100%</strong>
            <span>meme energy</span>
          </div>

          <div className="hero__info-card">
            <strong>24/7</strong>
            <span>gift mood</span>
          </div>

          <div className="hero__info-card">
            <strong>+999</strong>
            <span>aura boost</span>
          </div>
        </div>
      </div>

      <div className="hero__image">
        <div className="hero__image-ring"></div>

        <div className="card">
          <div className="card__glow"></div>
          <img src={shitlogo} alt="Shit Logo" />
        </div>

        <div className="hero__floating hero__floating--top">
          əvvəl özün test elə 😎
        </div>

        <div className="hero__floating hero__floating--bottom">
          dostun görsə, o da istəyəcək
        </div>
      </div>
    </section>
  );
};

export default Hero;
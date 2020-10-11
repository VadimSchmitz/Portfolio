import React from "react";
import './Header.scss';
import Bannerimage from "../../svg/Bannerimage.svg"
import Wave from "../../svg/Wave.svg"

export default function Header() {
  return (
    <div>
      <section className="header">
        <div className="header-content">
          <div className="header-title">Hello, My name is Vadim Schmitz.
          </div>
          <div className="header-subtitle">
            Fullstack web developer and Student at HZ university Zeeland
          </div>
          <button className="button">Projects</button>
          <img className="banner-image" src={Bannerimage}></img>
        </div>
        <img className="wave" src={Wave}></img>
      </section>
    </div>
  );
}

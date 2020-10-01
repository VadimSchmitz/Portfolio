import React from "react";
import '../Styles/Header.scss';
import Bannerimage from "../svg/Bannerimage.svg"
import Wave from "../svg/Wave.svg"

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
          <div className="header-button">
            <button>projects</button>
          </div>
          <div className="banner-image">
            <img className="" src={Bannerimage}></img>
          </div>
        </div>
        <img className="wave" src={Wave}></img>
      </section>
    </div>
  );
}

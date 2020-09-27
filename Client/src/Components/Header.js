import React from "react";
import '../Styles/Header.scss';
import Bannerimage from "../svg/Bannerimage.svg"

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
          <img className="banner-image" src={Bannerimage}></img>
        </div>
      </section>
    </div>
  );
}

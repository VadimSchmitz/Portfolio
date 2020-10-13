import React from "react";
import './Header.scss';
import Bannerimage from "../../svg/Bannerimage.svg"
import Wave from "../../svg/Wave.svg"
import BannerBackground from "../../svg/BannerBackground.svg"
import Navbar from "../Navbar/Navbar"

export default function Header() {
  return (
    <div>
      <Navbar />
      <section id="home" className="header">
        <div className="header-content">
          <div className="header-title">Hello, My name is jantje jansen.
          </div>
          <div className="header-subtitle">
            Fullstack web developer and Student at HZ university Zeeland
          </div>
          <img className="banner-image" src={Bannerimage} alt="banner"></img>
          <a href="#projects" className="button">Projects</a>
        </div>
        <img className="wave" src={Wave} alt="wave"></img>
      </section>
    </div>
  );
}
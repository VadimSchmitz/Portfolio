import React from 'react'
import './Footer.scss';
import Wave from "../../svg/FooterTop.svg"



export default function Footer() {
    return (
        <div>
            <img className="footer-top" src={Wave} alt='footer top'></img>
            <div id="projects" className="footer">

                <div className="footer-content">
                    <h1>yeet</h1>
                </div>
            </div>
        </div>
    )
}

import React from 'react'
import './Footer.scss';
import Wave from "../../svg/FooterTop.svg"



export default function Footer() {
    return (
        <div className="footer">
            <img className="footer-top" src={Wave} alt='footer top'></img>
            <div className="footer-content">
                <h1>yeet</h1>
            </div>
        </div>
    )
}

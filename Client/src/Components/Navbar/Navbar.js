import React, { useState } from 'react'
import "./Navbar.scss"
import Scrollspy from 'react-scrollspy'

export default function Navbar() {
    const [href, setHref] = useState('#header')


    return (
        <nav className="wrapper">
            <ul className="menu-list r-list">
                <Scrollspy className="r-list r-link" items={['home', 'about-me', 'projects']} currentClassName="border text-underlined">
                    <li className="menu-group">
                        <a href="#home" className="menu-link r-link text-underlined"
                        >Home</a>
                    </li>
                    <li className="menu-group">
                        <a href="#about-me" className="menu-link r-link text-underlined">About me</a>
                    </li>
                    <li className="menu-group">
                        <a href="#projects" className="menu-link r-link text-underlined">Projects</a>
                    </li>
                </Scrollspy>
            </ul>

        </nav>
    )
}

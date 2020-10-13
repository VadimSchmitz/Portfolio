import React, {useState} from 'react'
import "./Navbar.scss"

export default function Navbar() {
    const [href, setHref] = useState('#home')


    return (
        <nav className="wrapper">
            <ul className="menu-list r-list">
                <li className="menu-group">
                    <a href={href} onClick={()=>setHref('#home')} className={`menu-link r-link text-underline ${href === '#home' ? "border" : ""}`}
                    >Home</a>
                </li>
                <li className="menu-group">
                    <a href={href} onClick={()=>setHref('#about-me')} className={`menu-link r-link text-underline ${href === '#about-me' ? "border" : ""}`}>About me</a>
                </li>
                <li className="menu-group">
                    <a href={href} onClick={()=>setHref('#projects')} className={`menu-link r-link text-underline ${href === '#projects' ? "border" : ""}`}>Projects</a>
                </li>
            </ul>
        </nav>
    )
}

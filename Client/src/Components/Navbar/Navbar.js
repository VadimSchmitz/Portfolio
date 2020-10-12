import React from 'react'
import "./Navbar.scss"

export default function Navbar() {
    return (
        <nav class="wrapper">
            <ul class="menu-list r-list">
                <li class="menu-group">
                    <a href="#0" class="menu-link r-link text-underlined">Home</a>
                </li>
                <li class="menu-group">
                    <a href="#0" class="menu-link r-link text-underlined">About me</a>
                </li>
                <li class="menu-group">
                    <a href="#0" class="menu-link r-link text-underlined">Projects</a>
                </li>
            </ul>
        </nav>
    )
}

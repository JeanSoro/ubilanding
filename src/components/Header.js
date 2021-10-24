import React from 'react';
import { FaBars } from 'react-icons/fa';
import renderMenuLinks from '../utilities.js/renderMenuLinks';
import ubilogo from '../ubilogo.png';

export default function Header({ toggleMobileMenu }) {
    return (
        <header className="ubiheader">
            <nav className="ubinav" aria-label="Main Navigation">
                <FaBars className="hamburger-menu-icon" onClick={toggleMobileMenu} />
                <div className="ubi-logo-nav-list-container">
                    <img className="ubi-logo" src={ubilogo} alt="ubisoft logo" />
                    <ul className="ubinav__list">
                        {renderMenuLinks}
                    </ul>
                    <div></div>
                </div>
            </nav>
        </header>
    )
}

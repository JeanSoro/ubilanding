import React from 'react';
import { FaBars } from 'react-icons/fa';
import renderMenuLinks from '../utilities.js/renderMenuLinks';

export default function Header({ toggleMobileMenu }) {
    return (
        <header className="ubiheader">
            <nav className="ubinav">
                <FaBars className="hamburger-menu-icon" onClick={toggleMobileMenu} />
                <ul className="ubinav__list">
                    {renderMenuLinks}
                </ul>
            </nav>
        </header>
    )
}

import React from 'react';
import renderMenuLinks from '../utilities.js/renderMenuLinks';

export default function MobileMenu({ showMobileMenu, closeMobileMenu }) {
    return (
        <div className={`mobile-menu ${showMobileMenu && 'active'}`}>
            <button className="btn-close-mobile-menu" aria-label="Close Mobile Menu" onClick={closeMobileMenu}>X</button>
            <ul className="ubinav__list">
                {renderMenuLinks}
            </ul>
        </div>
    )
}

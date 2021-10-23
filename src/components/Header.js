import React from 'react'
import menuLinksData from '../menuLinksData' ;

export default function Header() {
    
    const renderMenuLinks = menuLinksData.map((menuLink,index)=> {
        return(
            <li key={index} className="ubinav__listitem">{menuLink}</li>
        )
    })

    return (
        <header className="ubiheader">
            <nav className="ubinav">
                <ul className="ubinav__list">
                    {renderMenuLinks}
                </ul>
            </nav>
        </header>
    )
}

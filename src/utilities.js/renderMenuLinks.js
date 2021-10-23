import menuLinksData from '../menuLinksData';

const renderMenuLinks = menuLinksData.map((menuLink, index) => {
    return (
        <li key={index} className="ubinav__listitem">{menuLink}</li>
    )
})

export default renderMenuLinks;
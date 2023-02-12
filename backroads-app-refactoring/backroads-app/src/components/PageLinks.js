/*You can pass the itinerated data to a component, but keep in mind:
PageLinks is used both in Navbar and Footer component.
The difference is...*/

import {pageLinks} from '../data';

const PageLinks = () =>{
    return(
        <ul className="nav-links" id="nav-links">
            {/*...the css. For Navbar, it's nav-links; for Footer, it's footer-links.
            Therefore if you reutilize PageLinks in Footer without you'll 'delete' it's CSS
            You'll have to pass different props from parents (Navbar and Footer) to child component (PageLinks) */}

            {pageLinks.map((link)=>{
            return (
                <li key={link.id}>
                <a href={link.href} className="nav-link">{link.text} </a>
                </li>
            );
            })}
        </ul>
    );
}

export default PageLinks;
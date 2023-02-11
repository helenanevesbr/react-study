import logo from '../images/logo.svg'

import {pageLinks, socialLinks} from '../data'

const Navbar = () => {
  return(
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <ul className="nav-links" id="nav-links">

          {pageLinks.map((link)=>{
            return (
              <li key={link.id}>
              <a href={link.href} className="nav-link">{link.text} </a>
              </li>
            )
          })}

        </ul>

        <ul className="nav-icons">

          {socialLinks.map((link)=>{
            return (
              <li key={link.id}>
                <a href={link.href}
                  target="_blank"
                  rel='noreferrer' /*In React, for security's sake, we need to add this line*/
                  className="nav-icon">
                  <i className={link.icon}></i>
                </a>
              </li>
            )
          })}

          {/*<li>
            <a href="https://www.facebook.com" target="_blank" className="nav-icon">
            
              <i className="fab fa-facebook"></i>
              /* We've linked font-awesome library in "public/index.html"
              The way font awesome icons work is that you don't need social media (facebook, twitter) icons saved in your app, for instance in your images folder. 
              You just write the className as shown above

            </a>
          </li>*/}

        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
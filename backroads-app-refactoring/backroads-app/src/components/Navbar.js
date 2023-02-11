import logo from '../images/logo.svg'

import {pageLinks} from '../data'

/*Home, About, Services and Tours - they're hard coded.

Which means, if you want to add an extra link or remove it or you want to add something else to the element, for example, attribute, you'll have to run around. And keep in mind that the same links are in the footer as well, and you need to change those values.

React allows us to iterate over data. In this case, an array of objects, each object with the data we need to build a section in Navbar.

First, figure out which data type is repeating, but changing values. Home, About, Services and Tours sections all need 2 things: href and the text. These are going to be the properties of our objects.

We can iterate over the list in Footer as well. The big difference is that now everything is going to be in one place.
And if you want to add, remove - basically change anything about that data - we just need to do that in one place.
*/

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
              {/* key attribute from React with the map function... */}

              <a
                href={link.href}
                /*... in React, we don't need something like link[index].href to point out the right object in the array. That's why attribute key is there*/

                className="nav-link">
                {link.text} </a>
              </li>  
            )
          })}

        </ul>

        <ul className="nav-icons">
          <li>
            <a href="https://www.twitter.com" target="_blank" className="nav-icon"
              ><i className="fab fa-facebook"></i
            ></a>
          </li>
          <li>
            <a href="https://www.twitter.com" target="_blank" className="nav-icon"
              ><i className="fab fa-twitter"></i
            ></a>
          </li>
          <li>
            <a href="https://www.twitter.com" target="_blank" className="nav-icon"
              ><i className="fab fa-squarespace"></i
            ></a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
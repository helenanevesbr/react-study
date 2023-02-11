import {pageLinks, socialLinks} from '../data'

const Footer = () => {
  return(
    <footer className="section footer">

      <ul className="footer-links"
      /*{...pageLinks.map((link)=>{
          return(
            const {id, href, text} = link
            key={id}
      I was tempted to not close <ul> yet, wrap *key* inside map while also keeping it as a attribute for ul, outside of map.
      It threw error "key is undefined"
      ul is the parent element for every li list item, but li is one level above all the values to be rendered for that particular item*/
      >

        {pageLinks.map((link)=>{
          const {id, href, text} = link
          return(

            <li key={id}>
            {/* */}

              <a href={href} className="footer-link">{text}</a>
            </li>
          )
        })}
      </ul>

      <ul className="footer-icons">
        {socialLinks.map((link)=>{
          const {id, href, icon} = link
          return(
            <li key={id}>
              <a href={href} target="_blank" className="footer-icon"
                ><i className={icon}></i
              ></a>
            </li>
          )
        })}
      </ul>

      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
}

export default Footer;
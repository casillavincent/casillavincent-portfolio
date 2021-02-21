import React from "react";
import { FaTwitter, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

const Footer = () => {
   return (
      <footer className="footer" id="footer">
         {/* Top Section */}
         <div className="footer__top-section">
            <h1>Like my work?</h1>
            <button type="button" className="button">
               <a href="mailto:casillavincent@gmail.com?subject=Hello Vincent!">Contact Me</a>
            </button>
         </div>

         {/* Bottom Section */}
         <div className="footer__bottom-section">
            <h2>Connect with me</h2>
            <div className="social-icons">
               <IconContext.Provider value={{ color: "white", size: "1.25em" }}>
                  <a href="https://twitter.com/casillavincent" target="_blank" id="twitter-link">
                     <FaTwitter title="Twitter Icon" />
                  </a>

                  <a href="https://github.com/casillavincent" target="_blank" id="github-link">
                     <FaGithub title="Github Icon" />
                  </a>

                  <a
                     href="https://www.linkedin.com/in/vcasilla/"
                     target="_blank"
                     id="linkedin-link"
                  >
                     <FaLinkedinIn title="Linked In Icon" />
                  </a>
               </IconContext.Provider>
            </div>
            <p className="copyright">&copy; Vincent Casilla 2020-2021</p>
         </div>
      </footer>
   );
};

export default Footer;

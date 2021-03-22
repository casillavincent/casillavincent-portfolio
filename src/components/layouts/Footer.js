import React from "react";
import { FaTwitter, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import ScrollTop from "../widgets/ScrollTop";

// Plugins
import AOS from "aos";
const Footer = () => {
   AOS.init();
   return (
      <footer className="footer" id="contact">
         {/* Top Section */}
         <div className="footer__top-section">
            <ScrollTop />

            <h1>Like My Work?</h1>

            <a
               href="mailto:casillavincent@gmail.com?subject=Hello Vincent!"
               rel="noopener noreferrer"
               className="button"
            >
               Contact Me
            </a>
         </div>

         {/* Bottom Section */}
         <div className="footer__bottom-section">
            <h2>Connect with me</h2>
            <div className="social-icons">
               <IconContext.Provider value={{ color: "white", size: "1.25em" }}>
                  <a
                     href="https://twitter.com/casillavincent"
                     target="_blank"
                     rel="noopener noreferrer"
                     id="twitter-link"
                  >
                     <FaTwitter title="Twitter Icon" />
                  </a>

                  <a
                     href="https://github.com/casillavincent"
                     target="_blank"
                     rel="noopener noreferrer"
                     id="github-link"
                  >
                     <FaGithub title="Github Icon" />
                  </a>

                  <a
                     href="https://www.linkedin.com/in/vcasilla/"
                     target="_blank"
                     id="linkedin-link"
                     rel="noopener noreferrer"
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

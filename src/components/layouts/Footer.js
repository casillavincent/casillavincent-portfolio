import React from "react";
import ScrollTop from "../widgets/ScrollTop";

// Icons
import { FaGithubAlt, FaTelegramPlane, FaLinkedinIn } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { CgTwitter } from "react-icons/cg";

const Footer = () => {
   return (
      <footer className="footer" id="contact">
         <ScrollTop />
         {/* Top Section */}
         <div className="footer__top-section">
            <h3>Like My Work?</h3>

            <a
               href="mailto:webdeveloper@vcasilla.com?subject=Hello Vincent!"
               rel="noopener noreferrer"
               className="button"
            >
               <FaTelegramPlane size="1.5em" /> Contact Me Here
            </a>
         </div>

         {/* Bottom Section */}
         <div className="footer__bottom-section">
            <h4>Connect with me</h4>
            <div className="social-icons">
               <IconContext.Provider value={{ color: "white", size: "1.75em" }}>
                  <a
                     href="https://twitter.com/casillavincent"
                     target="_blank"
                     rel="noopener noreferrer"
                     id="twitter-link"
                  >
                     <CgTwitter title="Twitter Icon" />
                  </a>

                  <a
                     href="https://github.com/casillavincent"
                     target="_blank"
                     rel="noopener noreferrer"
                     id="github-link"
                  >
                     <FaGithubAlt title="Github Icon" />
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
            <p className="copyright">&copy; Vincent Casilla 2021</p>
         </div>
      </footer>
   );
};

export default Footer;

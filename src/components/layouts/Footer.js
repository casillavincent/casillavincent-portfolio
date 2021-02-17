import React from "react";
import { FaTwitter, FaGithub, FaEnvelope, FaLinkedinIn } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

const Footer = () => {
   return (
      <footer className="footer">
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
                  <FaTwitter title="Twitter Icon" />
                  <FaGithub title="Github Icon" />
                  <FaLinkedinIn title="Linked In Icon" />
               </IconContext.Provider>
            </div>
            <p className="copyright">&copy; Vincent Casilla 2020-2021</p>
         </div>
      </footer>
   );
};

export default Footer;

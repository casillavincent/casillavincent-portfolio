import React from "react";
import Headroom from "react-headroom";
import { Spin as Hamburger } from "hamburger-react";
import { useState } from "react";
import { FaTwitter, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { Link } from "react-router-dom";

const Header = () => {
   const [isOpen, setIsOpen] = useState(false);

   const toggleNavigation = () => {
      const navigation = document.querySelector("nav.main-nav");
      const socialIcons = document.querySelector("aside.fixed-social-icons");

      console.log(socialIcons);
      if (!isOpen) {
         navigation.classList.add("main-nav--active");
         socialIcons.style.display = "none";
      } else {
         navigation.classList.remove("main-nav--active");
         socialIcons.style.display = "flex";
      }
   };

   const disableNavigation = () => {
      const navigation = document.querySelector("nav.main-nav");

      if (window.innerWidth <= 800) {
         if (navigation.classList.contains("main-nav--active")) {
            navigation.classList.remove("main-nav--active");
            setIsOpen(false);
         }
      }
   };

   return (
      <header>
         <Headroom>
            <Link to={"/"}>
               <h1 className="logo">Vincent Casilla</h1>
            </Link>

            {/* Hamburger Button */}
            <div
               className="hamburger-button-container"
               onClick={() => {
                  toggleNavigation();
               }}
            >
               <Hamburger toggled={isOpen} toggle={setIsOpen} size="24" />
            </div>

            {/* Navigation */}
            <nav
               className="main-nav"
               style={{ display: "none" }}
               onClick={() => {
                  disableNavigation();
               }}
            >
               <ul className="main-nav__ul">
                  <li className="main-nav__list-item">
                     <Link to={"/"}>home</Link>
                  </li>
                  <li className="main-nav__list-item">
                     <Link to={"/about"}>about</Link>
                  </li>
                  <li className="main-nav__list-item">
                     <a href="#contact"> contact</a>
                  </li>
               </ul>
               <hr className="menu-break" />
               <div className="menu-social-icons">
                  <IconContext.Provider value={{ color: "white", size: "1.75em" }}>
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
                        rel="noopener noreferrer"
                        id="linkedin-link"
                     >
                        <FaLinkedinIn title="Linked In Icon" />
                     </a>
                  </IconContext.Provider>
               </div>
            </nav>
         </Headroom>
      </header>
   );
};

export default Header;

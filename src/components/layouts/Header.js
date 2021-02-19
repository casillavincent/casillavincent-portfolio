import React from "react";
import Headroom from "react-headroom";
import { Spin as Hamburger } from "hamburger-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
   const [isOpen, setIsOpen] = useState(false);

   return (
      <header>
         <Headroom>
            <Link to={"/"}>
               <h1 className="logo">Vincent Casilla</h1>
            </Link>

            {/* Hamburger Button */}
            <Hamburger toggled={isOpen} toggle={setIsOpen} size="25" />

            {/* Navigation */}
            <nav className="main-nav">
               <ul className="main-nav__ul">
                  <li className="main-nav__list-item">
                     <Link to={"/"}>Home</Link>
                  </li>
                  <li className="main-nav__list-item">
                     <Link to={"/about"}>About</Link>
                  </li>
                  <li className="main-nav__list-item">
                     <a href="#footer"> Contact</a>
                  </li>
               </ul>
            </nav>
         </Headroom>
      </header>
   );
};

export default Header;

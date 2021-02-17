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
            <h1 className="logo">Vincent Casilla</h1>

            {/* Hamburger Button */}
            <Hamburger toggled={isOpen} toggle={setIsOpen} size="25" />

            {/* Navigation */}
            <nav className="main-nav">
               <ul className="main-nav__ul">
                  <li className="main-nav__list-item"> Home </li>
                  <li className="main-nav__list-item"> Projects </li>
                  <li className="main-nav__list-item"> About </li>
               </ul>
            </nav>
         </Headroom>
      </header>
   );
};

export default Header;

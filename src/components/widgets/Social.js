import React from "react";
import { FaTwitter, FaGithub, FaEnvelope, FaLinkedinIn } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

const Social = () => {
   window.onscroll = function (e) {
      const socialIcons = document.querySelector("aside.fixed-social-icons");
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
         socialIcons.style.display = "none";
      } else {
         socialIcons.style.display = "flex";
      }
   };
   return (
      <aside
         className="fixed-social-icons"
         data-aos="fade-left"
         data-aos-anchor-placement="bottom-bottom"
         data-aos-easing="ease-out"
         data-aos-once="true"
         data-aos-delay="500"
      >
         <IconContext.Provider value={{ color: "white", size: "1.25em" }}>
            <a href="https://twitter.com/casillavincent" id="twitter-link">
               <FaTwitter title="Twitter Icon" />
            </a>

            <a href="https://github.com/casillavincent" id="github-link">
               <FaGithub title="Github Icon" />
            </a>

            <a href="https://www.linkedin.com/in/vcasilla/" id="linkedin-link">
               <FaLinkedinIn title="Linked In Icon" />
            </a>

            <a href="mailto:casillavincent@gmail.com?subject=Hello Vincent!" id="e-mail-link">
               <FaEnvelope title="E-mail Icon" />
            </a>
         </IconContext.Provider>
      </aside>
   );
};

export default Social;

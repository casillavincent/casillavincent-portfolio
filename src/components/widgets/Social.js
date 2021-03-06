import React from "react";
import { FaGithubAlt, FaTelegramPlane, FaLinkedinIn } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { CgTwitter } from "react-icons/cg";

const Social = () => {
   // This hides the social icons when reaching the bottom of the window
   window.onscroll = function (e) {
      const socialIcons = document.querySelector("aside.fixed-social-icons");
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
         if (!socialIcons.classList.contains("fixed-social-icons--off")) {
            socialIcons.classList.add("fixed-social-icons--off");
         }
      } else {
         if (socialIcons.classList.contains("fixed-social-icons--off")) {
            socialIcons.classList.remove("fixed-social-icons--off");
         }
      }
   };

   return (
      <aside
         className="fixed-social-icons"
         data-aos="fade-left"
         data-aos-anchor-placement="bottom-bottom"
         data-aos-easing="ease-out-quart"
         data-aos-once="true"
         data-aos-delay="500"
      >
         <IconContext.Provider value={{ color: "#202123", size: "1.75em" }}>
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
               rel="noopener noreferrer"
               id="linkedin-link"
            >
               <FaLinkedinIn title="Linked In Icon" />
            </a>

            <a
               href="mailto:webdeveloper@vcasilla.com?subject=Hello Vincent!"
               target="_blank"
               id="e-mail-link"
               rel="noopener noreferrer"
            >
               <FaTelegramPlane title="E-mail Icon" />
            </a>
         </IconContext.Provider>
      </aside>
   );
};

export default Social;

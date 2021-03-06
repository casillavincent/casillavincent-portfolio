import React from "react";
import MobileBanner from "../../assets/banners/japan-mobile.jpg";
import DesktopBanner from "../../assets/banners/japan-desktop.jpg";
import { Link } from "react-router-dom";

const ProjectJapan = () => {
   return (
      <section className="project-item" id="project-japan">
         {/* Left Column */}
         <img
            src={MobileBanner}
            alt="Project Banner"
            className="project-item__banner--mobile"
            data-aos="zoom-out-down"
            data-aos-easing="ease-out-quart"
            data-aos-once="true"
            data-aos-duration="600"
            data-aos-anchor-placement="center-bottom"
         />
         <img
            src={DesktopBanner}
            alt="Project Banner"
            className="project-item__banner--desktop"
            data-aos="zoom-out-up"
            data-aos-easing="ease-out-quart"
            data-aos-once="true"
            data-aos-duration="600"
            data-aos-anchor-placement="center-bottom"
         />

         {/* Right Column */}
         <article
            className="project-item__text-content"
            data-aos="fade-up"
            data-aos-easing="ease-out-quart"
            data-aos-once="true"
            data-aos-duration="600"
            data-aos-anchor-placement="center-bottom"
         >
            <h2 className="project-item__text-content__name">
               Discover Japan<div className="accent-bar"></div>
            </h2>
            <p className="project-item__text-content__excerpt">
               A small scale business travel brochure for Japan that highlights it's rich culture.
               This is the first project I completed at BCIT.
            </p>
            <div className="project-item__text-content__cta">
               <Link to={"/discover-japan"} className="cta-btn">
                  More Info
               </Link>
               <a
                  href="https://vcasilla.com/discover-japan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-btn"
               >
                  {" "}
                  View Live Site
               </a>
            </div>
         </article>
      </section>
   );
};

export default ProjectJapan;

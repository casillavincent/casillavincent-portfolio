import React from "react";
import DesktopBanner from "../../assets/banners/japan.png";
import { Link } from "react-router-dom";

const ProjectJapan = () => {
   return (
      <article className="project-item" id="project-japan">
         {/* Left Column */}
         <img
            src={DesktopBanner}
            alt="Project Banner"
            className="project-item__banner--desktop"
            data-aos="zoom-out-up"
            data-aos-easing="ease-out-quart"
            data-aos-once="true"
            data-aos-duration="600"
            data-aos-anchor-placement="center-bottom"
            loading="lazy"
         />
         {/* Right Column */}
         <section
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
               My first HTML/CSS project. Discover Japan is a mock, travel brochure showcasing
               Japan.
            </p>
            <div className="project-item__text-content__cta">
               <Link to={"/discover-japan-project"} className="cta-btn">
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
         </section>
      </article>
   );
};

export default ProjectJapan;

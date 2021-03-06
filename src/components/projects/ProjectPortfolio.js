import React from "react";
import MobileBanner from "../../assets/banners/portfolio-mobile.jpg";
import DesktopBanner from "../../assets/banners/portfolio-desktop.jpg";
import { Link } from "react-router-dom";

const ProjectPortfolio = () => {
   return (
      <section className="project-item" id="project-portfolio">
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
               Personal Portfolio (Coming Soon)<div className="accent-bar"></div>
            </h2>
            <p className="project-item__text-content__excerpt">
               My magnum opus that encompasses everything I have learned so far with frontend
               development. This project showcases my abilities and who I am as a developer but also
               who I am outside of development.
            </p>
            <div className="project-item__text-content__cta">
               <Link to={"/personal-portfolio"} className="cta-btn">
                  More Info
               </Link>

               <a
                  href="https://github.com/casillavincent/casillavincent-portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-btn"
               >
                  View on Github
               </a>
            </div>
         </article>
      </section>
   );
};

export default ProjectPortfolio;

import React from "react";
import DesktopBanner from "../../assets/banners/portfolio.png";
import { Link } from "react-router-dom";

const ProjectPortfolio = () => {
   return (
      <article className="project-item" id="project-portfolio">
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
               Personal Portfolio<div className="accent-bar"></div>
            </h2>
            <p className="project-item__text-content__excerpt">
               A React application that highlights my technical skills and technical projects as a
               Front-end developer.
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
         </section>
      </article>
   );
};

export default ProjectPortfolio;

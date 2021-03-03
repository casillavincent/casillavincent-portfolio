import React from "react";
import MobileBanner from "../../assets/banners/portfolio-mobile.jpg";
import DesktopBanner from "../../assets/banners/portfolio-desktop.jpg";
import { Link } from "react-router-dom";

const ProjectPortfolio = () => {
   return (
      <section className="project-item" id="project-portfolio">
         {/* Left Column */}
         <img src={MobileBanner} alt="Project Banner" className="project-item__banner--mobile" />
         <img src={DesktopBanner} alt="Project Banner" className="project-item__banner--desktop" />

         {/* Right Column */}
         <article className="project-item__text-content">
            <h2 className="project-item__text-content__name">Personal Portfolio (Coming Soon)</h2>
            <p className="project-item__text-content__excerpt">
               My magnum opus that encompasses everything I have learned so far with frontend
               development. This project showcases my abilities and who I am as a developer but also
               who I am outside of development.
            </p>
            <div className="project-item__text-content__cta">
               <button type="button" className="cta-btn">
                  <Link to={"/personal-portfolio"}>More Info</Link>
               </button>
               <button type="button" className="cta-btn">
                  <a
                     href="https://github.com/casillavincent/casillavincent-portfolio"
                     target="_blank"
                  >
                     View on Github
                  </a>
               </button>
            </div>
         </article>
      </section>
   );
};

export default ProjectPortfolio;

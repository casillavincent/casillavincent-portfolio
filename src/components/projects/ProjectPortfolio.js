import React from "react";
import MobileBanner from "../../assets/discover-japan-mobile3.png";
import DesktopBanner from "../../assets/discover-japan-desktop3.png";

const ProjectPortfolio = () => {
   return (
      <section className="project-item" id="project-portfolio">
         {/* Left Column */}
         <img
            src={MobileBanner}
            alt="Project Banner"
            className="project-item__banner--mobile"
            className="project-item__banner--mobile"
            data-aos="zoom-out-down"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-easing="ease-out-quart"
            data-aos-once="true"
         />
         <img
            src={DesktopBanner}
            alt="Project Banner"
            className="project-item__banner--desktop"
            data-aos="zoom-out-down"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-easing="ease-out-quart"
            data-aos-once="true"
         />

         {/* Right Column */}
         <article
            className="project-item__text-content"
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-easing="ease-out-quart"
            data-aos-once="true"
            data-aos-delay="75"
         >
            <h2 className="project-item__text-content__name">Portfolio</h2>
            <p className="project-item__text-content__excerpt">
               My magnum opus that encompasses everything I have learned so far with frontend
               development. This project showcases my abilities and who I am as a developer but also
               who I am outside of development.
            </p>
            <div className="project-item__text-content__cta">
               <button type="button" className="cta-btn">
                  More Info
               </button>
               <button type="button" className="cta-btn">
                  View Live Site
               </button>
            </div>
         </article>
      </section>
   );
};

export default ProjectPortfolio;

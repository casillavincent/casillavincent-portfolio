import React from "react";
import MobileBanner from "../../assets/discover-japan-mobile3.png";
import DesktopBanner from "../../assets/discover-japan-desktop3.png";

const ProjectCapstone = () => {
   return (
      <section className="project-item" id="project-capstone">
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
            å
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
            <h2 className="project-item__text-content__name">The Rolling Pin (Coming Soon)</h2>
            <p className="project-item__text-content__excerpt">
               A robust and fully functional e-commerce website that utilizes WordPress, PHP and
               WooCommerce. This is a collaborative project consisting of 4 members and it is still
               a work in progress.
            </p>
            <div className="project-item__text-content__cta">
               <button type="button" className="cta-btn">
                  More Info
               </button>
               <button type="button" className="cta-btn">
                  View Github
               </button>
            </div>
         </article>
      </section>
   );
};

export default ProjectCapstone;

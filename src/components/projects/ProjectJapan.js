import React from "react";
import MobileBanner from "../../assets/discover-japan-mobile3.png";
import DesktopBanner from "../../assets/discover-japan-desktop3.png";

const ProjectJapan = () => {
   return (
      <section className="project-item" id="project-japan">
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
            <h2 className="project-item__text-content__name">Discover Japan</h2>
            <p className="project-item__text-content__excerpt">
               A small scale business travel brochure for Japan that highlights it's rich culture.
               This is the first project I completed at BCIT.
            </p>
            <div className="project-item__text-content__cta">
               <button type="button" className="cta-btn">
                  More Info
               </button>
               <button type="button" className="cta-btn">
                  <a href="https://vcasilla.com/discover-japan/" target="_blank">
                     {" "}
                     View Live Site
                  </a>
               </button>
            </div>
         </article>
      </section>
   );
};

export default ProjectJapan;

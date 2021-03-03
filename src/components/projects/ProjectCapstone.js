import React from "react";
import MobileBanner from "../../assets/banners/rollingpin-mobile.jpg";
import DesktopBanner from "../../assets/banners/rollingpin-desktop.jpg";
import { Link } from "react-router-dom";

const ProjectCapstone = () => {
   return (
      <section className="project-item" id="project-capstone">
         {/* Left Column */}
         <img src={MobileBanner} alt="Project Banner" className="project-item__banner--mobile" />
         <img src={DesktopBanner} alt="Project Banner" className="project-item__banner--desktop" />

         {/* Right Column */}
         <article className="project-item__text-content">
            <h2 className="project-item__text-content__name">The Rolling Pin (Coming Soon)</h2>
            <p className="project-item__text-content__excerpt">
               A robust and fully functional e-commerce website that utilizes WordPress, PHP and
               WooCommerce. This is a collaborative project consisting of 4 members and it is still
               a work in progress.
            </p>
            <div className="project-item__text-content__cta">
               <button type="button" className="cta-btn">
                  <Link to={"/the-rolling-pin"}> More Info</Link>
               </button>
               <button type="button" className="cta-btn" style={{ cursor: "not-allowed" }}>
                  Coming Soon
               </button>
            </div>
         </article>
      </section>
   );
};

export default ProjectCapstone;

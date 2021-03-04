import React from "react";
import MobileBanner from "../../assets/banners/rollingpin-mobile.jpg";
import DesktopBanner from "../../assets/banners/rollingpin-desktop.jpg";
import { Link } from "react-router-dom";

const ProjectCapstone = () => {
   return (
      <section className="project-item" id="project-capstone">
         {/* Left Column */}
         <img
            src={MobileBanner}
            alt="Project Banner"
            className="project-item__banner--mobile"
            data-aos="zoom-out-down"
            data-aos-easing="ease-out-quart"
            data-aos-once="false"
            data-aos-mirror="true"
            data-aos-duration="600"
         />
         <img
            src={DesktopBanner}
            alt="Project Banner"
            className="project-item__banner--desktop"
            data-aos="zoom-out-up"
            data-aos-easing="ease-out-quart"
            data-aos-once="false"
            data-aos-mirror="true"
            data-aos-duration="600"
         />

         {/* Right Column */}
         <article
            className="project-item__text-content"
            data-aos="fade-up"
            data-aos-easing="ease-out-quart"
            data-aos-once="false"
            data-aos-mirror="true"
            data-aos-duration="600"
            data-aos-delay="50"
         >
            <h2 className="project-item__text-content__name">
               The Rolling Pin (Coming Soon)<div className="accent-bar"></div>
            </h2>
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

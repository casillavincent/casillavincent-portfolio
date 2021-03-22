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
               The Rolling Pin (Coming Soon)<div className="accent-bar"></div>
            </h2>
            <p className="project-item__text-content__excerpt">
               A fully functional eCommerce website that utilizes WordPress and WooCommerce to
               display a bakery's products. This is a collaborative project consisting of 4 members.
            </p>
            <div className="project-item__text-content__cta">
               <Link to={"/the-rolling-pin-project"} className="cta-btn">
                  More Info
               </Link>
               <a href="#0" className="cta-btn" style={{ cursor: "not-allowed" }}>
                  Coming Soon
               </a>
            </div>
         </article>
      </section>
   );
};

export default ProjectCapstone;

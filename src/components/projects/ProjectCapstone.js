import React from "react";
import DesktopBanner from "../../assets/banners/capstone.png";
import { Link } from "react-router-dom";

const ProjectCapstone = () => {
   return (
      <article className="project-item" id="project-capstone">
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
               The Rolling Pin<div className="accent-bar"></div>
            </h2>
            <p className="project-item__text-content__excerpt">
               A fully functional eCommerce website that utilizes WordPress and WooCommerce. This is
               a collaborative project consisting of 4 members.
            </p>
            <div className="project-item__text-content__cta">
               <Link to={"/the-rolling-pin-project"} className="cta-btn">
                  More Info
               </Link>
               <a
                  href="https://vcasilla.com/the-rolling-pin/"
                  className="cta-btn"
                  target="_blank"
                  rel="noreferrer noopener"
               >
                  View Live Site
               </a>
            </div>
         </section>
      </article>
   );
};

export default ProjectCapstone;

import React from "react";
import MobileBanner from "../../assets/banners/japan-mobile.jpg";
import DesktopBanner from "../../assets/banners/japan-desktop.jpg";
import { Link } from "react-router-dom";

const ProjectJapan = () => {
   return (
      <section className="project-item" id="project-japan">
         {/* Left Column */}
         <img src={MobileBanner} alt="Project Banner" className="project-item__banner--mobile" />
         <img src={DesktopBanner} alt="Project Banner" className="project-item__banner--desktop" />

         {/* Right Column */}
         <article className="project-item__text-content">
            <h2 className="project-item__text-content__name">Discover Japan</h2>
            <p className="project-item__text-content__excerpt">
               A small scale business travel brochure for Japan that highlights it's rich culture.
               This is the first project I completed at BCIT.
            </p>
            <div className="project-item__text-content__cta">
               <button type="button" className="cta-btn">
                  <Link to={"/discover-japan"}>More Info</Link>
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

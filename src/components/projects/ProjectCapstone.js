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
            loading="lazy"
         />

         {/* Right Column */}
         <section className="project-item__text-content">
            <h2 className="project-item__text-content__name">
               The Rolling Pin<div className="accent-bar"></div>
            </h2>

            {/* List of the stack used for the project */}
            <ul className="stack-list">
               <li className="stack-list-item">WordPress</li>
               <li className="stack-list-item">JavaScript</li>
               <li className="stack-list-item">CSS3</li>
               <li className="stack-list-item">Sass</li>
               <li className="stack-list-item">MySQL</li>
               <li className="stack-list-item">PHP</li>
               <li className="stack-list-item">Github</li>
            </ul>

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

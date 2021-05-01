import React from "react";
import DesktopBanner from "../../assets/banners/japan.png";
import { Link } from "react-router-dom";

const ProjectJapan = () => {
   return (
      <article className="project-item" id="project-japan">
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
               Discover Japan<div className="accent-bar"></div>
            </h2>

            <ul className="stack-list">
               <li className="stack-list-item">HTML5</li>
               <li className="stack-list-item">Sass</li>
               <li className="stack-list-item">CSS3</li>
               <li className="stack-list-item">React.JS</li>
            </ul>

            <p className="project-item__text-content__excerpt">
               My first HTML/CSS project. Discover Japan is a mock, travel brochure showcasing
               Japan.
            </p>
            <div className="project-item__text-content__cta">
               <Link to={"/discover-japan-project"} className="cta-btn">
                  More Info
               </Link>
               <a
                  href="https://vcasilla.com/discover-japan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-btn"
               >
                  {" "}
                  View Live Site
               </a>
            </div>
         </section>
      </article>
   );
};

export default ProjectJapan;

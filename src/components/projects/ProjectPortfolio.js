import React from "react";
import DesktopBanner from "../../assets/banners/portfolio.png";
import { Link } from "react-router-dom";

const ProjectPortfolio = () => {
   return (
      <article className="project-item" id="project-portfolio">
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
               Personal Portfolio<div className="accent-bar"></div>
            </h2>

            {/* List of the stack used for the project */}
            <ul className="stack-list">
               <li className="stack-list-item">React.JS</li>
               <li className="stack-list-item">JavaScript</li>
               <li className="stack-list-item">HTML5</li>
               <li className="stack-list-item">CSS3</li>
               <li className="stack-list-item">Sass</li>
            </ul>

            <p className="project-item__text-content__excerpt">
               A React application that highlights my technical skills and technical projects as a
               Front-end developer.
            </p>
            <div className="project-item__text-content__cta">
               <Link to={"/personal-portfolio"} className="cta-btn">
                  More Info
               </Link>

               <a
                  href="https://github.com/casillavincent/casillavincent-portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-btn"
               >
                  View on Github
               </a>
            </div>
         </section>
      </article>
   );
};

export default ProjectPortfolio;

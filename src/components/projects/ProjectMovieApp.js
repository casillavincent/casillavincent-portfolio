import React from "react";
import DesktopBanner from "../../assets/banners/movie.png";
import { Link } from "react-router-dom";

const ProjectMovieApp = () => {
   return (
      <article className="project-item" id="project-movie-app">
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
               Butter.DB<div className="accent-bar"></div>
            </h2>

            {/* List of the stack used for the project */}
            <ul className="stack-list">
               <li className="stack-list-item">ReactJS</li>
               <li className="stack-list-item">HTML5</li>
               <li className="stack-list-item">CSS3</li>
               <li className="stack-list-item">Sass</li>
               <li className="stack-list-item">Github</li>
               <li className="stack-list-item">RESTful API</li>
            </ul>

            <p className="project-item__text-content__excerpt">
               A dynamic, single-page web application that uses the TMDB Rest API to display movie
               details.
            </p>
            <div className="project-item__text-content__cta">
               <Link to={"/butter-db-project"} className="cta-btn">
                  More Info
               </Link>
               <a
                  href="https://vcasilla.com/butter-db/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-btn"
               >
                  View Live Site
               </a>
            </div>
         </section>
      </article>
   );
};

export default ProjectMovieApp;

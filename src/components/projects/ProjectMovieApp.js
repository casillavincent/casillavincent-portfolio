import React from "react";
import MobileBanner from "../../assets/banners/movie-mobile.jpg";
import DesktopBanner from "../../assets/banners/movie-desktop.jpg";
import { Link } from "react-router-dom";

const ProjectMovieApp = () => {
   return (
      <section className="project-item" id="project-movie-app">
         {/* Left Column */}
         <img
            src={MobileBanner}
            alt="Project Banner"
            className="project-item__banner--mobile"
            data-aos="zoom-out-down"
            data-aos-easing="ease-out-quart"
            data-aos-once="true"
            data-aos-duration="600"
         />
         <img
            src={DesktopBanner}
            alt="Project Banner"
            className="project-item__banner--desktop"
            data-aos="zoom-out-up"
            data-aos-easing="ease-out-quart"
            data-aos-once="true"
            data-aos-duration="600"
         />

         {/* Right Column */}
         <article
            className="project-item__text-content"
            data-aos="fade-up"
            data-aos-easing="ease-out-quart"
            data-aos-once="true"
            data-aos-duration="600"
         >
            <h2 className="project-item__text-content__name">
               Butter.DB<div className="accent-bar"></div>
            </h2>
            <p className="project-item__text-content__excerpt">
               A dynamic single-page web application that allows users to browse movies based on
               what's trending, upcoming, popular and top rated. This is my first project using
               React and the TMDB Rest API.
            </p>
            <div className="project-item__text-content__cta">
               <Link to={"/butter-db"} className="cta-btn">
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
         </article>
      </section>
   );
};

export default ProjectMovieApp;

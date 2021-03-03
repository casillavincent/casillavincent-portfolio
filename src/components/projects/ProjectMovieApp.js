import React from "react";
import MobileBanner from "../../assets/banners/movie-mobile.jpg";
import DesktopBanner from "../../assets/banners/movie-desktop.jpg";
import { Link } from "react-router-dom";

const ProjectMovieApp = () => {
   return (
      <section className="project-item" id="project-movie-app">
         {/* Left Column */}
         <img src={MobileBanner} alt="Project Banner" className="project-item__banner--mobile" />
         <img src={DesktopBanner} alt="Project Banner" className="project-item__banner--desktop" />

         {/* Right Column */}
         <article className="project-item__text-content">
            <h2 className="project-item__text-content__name">Butter.DB</h2>
            <p className="project-item__text-content__excerpt">
               A dynamic single-page web application that allows user to browse movies based on
               what's trending, upcoming, popular and top rated. This is my first project using
               React and the TMDB Rest API.
            </p>
            <div className="project-item__text-content__cta">
               <button type="button" className="cta-btn">
                  <Link to={"/butter-db"}>More Info</Link>
               </button>
               <button type="button" className="cta-btn">
                  <a href="https://vcasilla.com/butter-db/" target="_blank">
                     {" "}
                     View Live Site
                  </a>
               </button>
            </div>
         </article>
      </section>
   );
};

export default ProjectMovieApp;

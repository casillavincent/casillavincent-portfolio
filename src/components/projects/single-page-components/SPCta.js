import React from "react";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const SPCta = ({ home, nextProject, livesite, github }) => {
   return (
      <article className="single-project-info__navigate-projects">
         {/* Go Back Home */}
         <Link to={home} className="go-back-home">
            <RiArrowLeftSLine size="3.5em" />
            <p>Return Home</p>
         </Link>

         {/* Project CTAs */}
         <div className="project-cta">
            <button className="live-site">
               <a href={livesite} target="_blank">
                  View Live Site
               </a>
            </button>
            <button>
               <a href={github} target="_blank">
                  View on Github
               </a>
            </button>
         </div>

         {/* Next Project */}
         <Link to={nextProject} className="next-project">
            <RiArrowRightSLine size="3.5em" />
            <p>Next Project</p>
         </Link>
      </article>
   );
};

export default SPCta;

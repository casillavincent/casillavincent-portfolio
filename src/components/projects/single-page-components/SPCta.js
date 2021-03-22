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
            <a
               href={livesite === "none" ? "#0" : livesite}
               target="_blank"
               rel="noopener noreferrer"
               className="live-site"
            >
               {livesite === "none" ? "Coming Soon" : "View Live Site"}
            </a>
            <a
               href={github === "none" ? "#0" : github}
               target="_blank"
               rel="noopener noreferrer"
               className="live-site"
            >
               {github === "none" ? "Not Available" : "View on Github"}
            </a>
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

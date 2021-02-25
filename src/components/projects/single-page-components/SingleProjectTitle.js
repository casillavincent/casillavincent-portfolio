import React from "react";
import { MY_PROJECTS } from "../../../globals/project-info";

const SingleProjectTitle = () => {
   console.log(MY_PROJECTS);
   return (
      <article className="single-project-info__title">
         <h1>Butter.DB</h1>
         <p>A dynamic react movie web application.</p>
         <hr />
         <div className="single-project-info__cta">
            <button>
               <a href="#0"> View Live Site</a>
            </button>
            <button>
               <a href="#0"></a>
               View on Github
            </button>
         </div>
      </article>
   );
};

export default SingleProjectTitle;

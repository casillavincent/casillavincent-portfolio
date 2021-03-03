import React from "react";
import { MY_PROJECTS } from "../../../globals/project-info";

const SPTitle = ({ title, tagline }) => {
   console.log(MY_PROJECTS);
   return (
      <article className="single-project-info__title">
         <h1>{title}</h1>
         <hr />
         <p>{tagline}</p>
      </article>
   );
};

export default SPTitle;

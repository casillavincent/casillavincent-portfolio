import React from "react";
import { MY_PROJECTS } from "../../../globals/project-info";

const SPTitle = ({ title, tagline }) => {
   console.log(MY_PROJECTS);
   return (
      <article className="single-project-info__title">
         <h1
            data-aos="fade-down"
            data-aos-easing="ease-out-sine"
            data-aos-once="false"
            data-aos-duration="700"
         >
            {title}
         </h1>
         <hr
            data-aos="fade-right"
            data-aos-easing="ease-out-sine"
            data-aos-once="false"
            data-aos-duration="700"
            data-aos-delay="250"
         />
         <p
            data-aos="fade-right"
            data-aos-easing="ease-out-sine"
            data-aos-once="false"
            data-aos-duration="700"
            data-aos-delay="450"
         >
            {tagline}
         </p>
      </article>
   );
};

export default SPTitle;

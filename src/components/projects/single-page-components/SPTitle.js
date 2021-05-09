import React from "react";

const SPTitle = ({ title, tagline }) => {
   return (
      <article className="single-project-info__title">
         <h1 data-aos="fade-up">{title}</h1>
         <hr data-aos-delay="250" data-aos="fade-up" />
         <p data-aos-delay="450" data-aos="fade-up">
            {tagline}
         </p>
      </article>
   );
};

export default SPTitle;

import React from "react";

const SPDesign = ({ text }) => {
   return (
      <article className="single-project-design">
         <section className="single-project-design__container">
            <h3>Design</h3>
            <hr />
            <p>{text}</p>
         </section>
      </article>
   );
};

export default SPDesign;

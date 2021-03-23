import React from "react";

const SPDevelopment = ({ text }) => {
   return (
      <article className="single-project-development">
         <section className="single-project-development__container">
            <h3>Development</h3>
            <hr />
            <p>{text}</p>
         </section>
      </article>
   );
};

export default SPDevelopment;

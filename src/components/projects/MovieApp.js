import React from "react";

const MovieApp = () => {
   return (
      //    Movie App
      <section className="project-item movie-app-project" id="movie-app-project">
         <h2 className="project-item__title">React Application</h2>
         <p className="project-item__excerpt">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur soluta ea,
            doloribus reprehenderit porro quasi sunt magnam ratione quae perspiciatis, ipsum,
            delectus reiciendis accusantium.
         </p>
         <div className="project-item__cta">
            <button type="button" className="cta-btn">
               More Info
            </button>
            <button type="button" className="cta-btn">
               View Live Site
            </button>
         </div>
      </section>
   );
};

export default MovieApp;

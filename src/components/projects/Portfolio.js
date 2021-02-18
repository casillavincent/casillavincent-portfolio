import React from "react";

const Portfolio = () => {
   return (
      //    Portfolio
      <section className="project-item portfolio-project" id="portfolio-project">
         <h2 className="project-item__title">Portfolio (Coming Soon)</h2>
         <p className="project-item__excerpt">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur soluta ea,
            doloribus reprehenderit porro quasi sunt magnam ratione quae perspiciatis, ipsum,
            delectus reiciendis accusantium.
         </p>
         <div className="project-item__cta">
            <button style={{ cursor: "not-allowed" }} type="button" className="cta-btn">
               More Info
            </button>
            <button style={{ cursor: "not-allowed" }} type="button" className="cta-btn">
               View Github
            </button>
         </div>
      </section>
   );
};

export default Portfolio;

import React from "react";
import ScrollDownIcon from "./widgets/ScrollDownIcon";

const Splash = () => {
   return (
      <section className="section splash">
         {/* Text Content */}
         <article className="splash-text-container">
            <h1 className="splash-text-container__tagline">
               I use innovative tools to transform ideas into dynamic websites.{" "}
            </h1>
            <p className="splash-text-container__excerpt">
               Web designer and frontend web developer based in Vancouver, BC.
            </p>
            <button type="button" className="splash-text-container__btn">
               More about me
            </button>
         </article>

         {/* Scroll Down Indicator */}
         <ScrollDownIcon />
      </section>
   );
};

export default Splash;

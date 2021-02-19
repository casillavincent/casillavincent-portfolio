import React from "react";
import ScrollDownIcon from "./widgets/ScrollDownIcon";

const Splash = () => {
   return (
      <section className="section splash">
         {/* Text Content */}
         <article className="splash-text-container">
            <h1
               className="splash-text-container__tagline"
               data-aos="fade-right"
               data-aos-anchor-placement="center-bottom"
               data-aos-easing="ease-out"
               data-aos-once="true"
               data-aos-duration="750"
            >
               I use innovative tools to transform ideas into dynamic websites.{" "}
            </h1>
            <p
               className="splash-text-container__excerpt"
               data-aos="fade-right"
               data-aos-anchor-placement="center-bottom"
               data-aos-easing="ease-out"
               data-aos-once="true"
               data-aos-delay="100"
               data-aos-duration="750"
            >
               Web designer and frontend web developer based in Vancouver, BC.
            </p>
            <button
               type="button"
               className="splash-text-container__btn"
               data-aos="fade-right"
               data-aos-anchor-placement="center-bottom"
               data-aos-easing="ease-out"
               data-aos-once="true"
               data-aos-delay="150"
               data-aos-duration="750"
            >
               More about me
            </button>
         </article>

         {/* Scroll Down Indicator */}
         <ScrollDownIcon />
      </section>
   );
};

export default Splash;

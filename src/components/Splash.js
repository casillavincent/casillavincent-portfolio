import React from "react";
import ScrollDownIcon from "./widgets/ScrollDownIcon";
import { Link } from "react-router-dom";

const Splash = () => {
   return (
      <section className="section splash">
         {/* Text Content */}
         <article className="splash-text-container">
            <h1
               className="splash-text-container__tagline"
               data-aos="fade-right"
               data-aos-easing="ease-out"
               data-aos-once="false"
               data-aos-duration="750"
               data-aos-mirror="true"
            >
               I build websites using innovative tools.
            </h1>
            <p
               className="splash-text-container__excerpt"
               data-aos="fade-right"
               data-aos-easing="ease-out"
               data-aos-once="false"
               data-aos-delay="100"
               data-aos-duration="750"
               data-aos-mirror="true"
            >
               Web designer and frontend web developer based in Vancouver, BC.
            </p>
            <button
               type="button"
               className="splash-text-container__btn"
               data-aos="fade-right"
               data-aos-easing="ease-out"
               data-aos-once="false"
               data-aos-delay="150"
               data-aos-duration="750"
               data-aos-mirror="true"
            >
               <Link to={"/about"}>Read More About Me</Link>
            </button>
         </article>

         {/* Scroll Down Indicator */}
         <ScrollDownIcon />
      </section>
   );
};

export default Splash;

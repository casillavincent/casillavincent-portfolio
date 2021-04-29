import React from "react";
import ScrollDownIcon from "./widgets/ScrollDownIcon";
import { Link } from "react-router-dom";

const Splash = () => {
   return (
      <article className="section splash">
         {/* Text Content */}
         <section className="splash-text-container">
            <h1
               className="splash-text-container__tagline"
               data-aos="fade-right"
               data-aos-easing="ease-out-quart"
               data-aos-once="false"
               data-aos-duration="850"
               data-aos-mirror="true"
            >
               I build user-facing online experiences using creative tools.
            </h1>

            <p
               data-aos="fade-right"
               data-aos-easing="ease-out-quart"
               data-aos-once="false"
               data-aos-delay="100"
               data-aos-duration="850"
               data-aos-mirror="true"
            >
               Front-end Web Developer & UX/UI Designer based in Vancouver, BC.
            </p>

            <div
               className="splash-button-container"
               data-aos="fade-right"
               data-aos-easing="ease-out-quart"
               data-aos-once="false"
               data-aos-delay="150"
               data-aos-duration="850"
               data-aos-mirror="true"
            >
               <Link to={"/about"}>More About Me</Link>
            </div>
         </section>

         {/* Scroll Down Indicator */}
         <ScrollDownIcon />
      </article>
   );
};

export default Splash;

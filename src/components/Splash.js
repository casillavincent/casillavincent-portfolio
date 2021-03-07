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
               data-aos-easing="ease-out-quart"
               data-aos-once="false"
               data-aos-duration="850"
               data-aos-mirror="true"
            >
               I build websites using innovative tools.
            </h1>

            <p
               data-aos="fade-right"
               data-aos-easing="ease-out-quart"
               data-aos-once="false"
               data-aos-delay="100"
               data-aos-duration="850"
               data-aos-mirror="true"
            >
               Web designer and frontend developer based in Vancouver, BC.
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
         </article>

         {/* Scroll Down Indicator */}
         <ScrollDownIcon />
      </section>
   );
};

export default Splash;

import React from "react";
import ScrollDownIcon from "./widgets/ScrollDownIcon";

const Splash = () => {
   return (
      <article className="section splash">
         {/* Text Content */}
         <section className="splash-section section-header-container">
            <div
               className="section-header"
               data-aos="fade-up"
               data-aos-duration="800"
               data-aos-once="true"
            >
               <p>Porfolio</p>
               <h1>Vincent Casilla </h1>
               <p className="role">Front-end web developer based in Vancouver, BC.</p>
            </div>
            <ScrollDownIcon />
         </section>

         {/* Intro */}
         <section className="splash-section brief-intro" id="brief-intro">
            <h2 data-aos="fade-up" data-aos-duration="800" data-aos-once="true">
               I build user-facing digital experiences
            </h2>
         </section>
      </article>
   );
};

export default Splash;

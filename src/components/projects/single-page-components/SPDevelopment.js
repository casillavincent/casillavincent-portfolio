import React from "react";

const SPDevelopment = ({ text }) => {
   return (
      <article className="single-project-development">
         <section className="single-project-development__container">
            <h3
               data-aos="fade-down"
               data-aos-easing="ease-out-sine"
               data-aos-once="false"
               data-aos-duration="700"
            >
               Development
            </h3>
            <hr
               data-aos="fade-right"
               data-aos-easing="ease-out-sine"
               data-aos-once="false"
               data-aos-duration="700"
               data-aos-delay="250"
            />
            <p
               data-aos="fade-right"
               data-aos-easing="ease-out-sine"
               data-aos-once="false"
               data-aos-duration="700"
               data-aos-delay="450"
            >
               {text}
            </p>
         </section>
      </article>
   );
};

export default SPDevelopment;

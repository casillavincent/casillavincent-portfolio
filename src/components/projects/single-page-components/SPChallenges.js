import React from "react";

const SPChallenges = ({ challenge }) => {
   return (
      <article className="single-project-info__challenges">
         <h3
            data-aos="fade-down"
            data-aos-easing="ease-out-sine"
            data-aos-once="false"
            data-aos-duration="700"
         >
            {" "}
            What I found challenging{" "}
         </h3>
         <hr
            data-aos="fade-right"
            data-aos-easing="ease-out-sine"
            data-aos-once="false"
            data-aos-duration="700"
            data-aos-delay="150"
         />
         <p
            data-aos="fade-right"
            data-aos-easing="ease-out-sine"
            data-aos-once="false"
            data-aos-duration="700"
            data-aos-delay="200"
         >
            {" "}
            {challenge}
         </p>
      </article>
   );
};

export default SPChallenges;

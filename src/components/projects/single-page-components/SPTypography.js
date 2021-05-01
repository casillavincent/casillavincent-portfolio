import React from "react";

const SPTypography = ({ f1, f2, fam1, fam2 }) => {
   return (
      <article className="single-project-info__typography">
         <h3
            data-aos="fade-down"
            data-aos-easing="ease-out-sine"
            data-aos-once="false"
            data-aos-duration="700"
         >
            Typography
         </h3>
         <hr
            data-aos="fade-right"
            data-aos-easing="ease-out-sine"
            data-aos-once="false"
            data-aos-duration="700"
            data-aos-delay="250"
         />
         <div className="typography-container">
            {/* Typeface 1 */}
            <div className="typeface">
               <h4
                  className="typeface-sample"
                  style={{ fontFamily: fam1 }}
                  data-aos="fade-right"
                  data-aos-easing="ease-out-sine"
                  data-aos-once="false"
                  data-aos-duration="900"
                  data-aos-anchor-placement="top-bottom"
                  data-aos-delay="800"
               >
                  Aa
               </h4>
               <h5
                  className="typeface-name"
                  style={{ fontFamily: fam1 }}
                  data-aos="fade-right"
                  data-aos-easing="ease-out-sine"
                  data-aos-once="false"
                  data-aos-duration="900"
                  data-aos-anchor-placement="top-bottom"
                  data-aos-delay="900"
               >
                  {f1}
               </h5>
               <p
                  className="typeface-placeholder"
                  style={{ fontFamily: fam1 }}
                  data-aos="fade-right"
                  data-aos-easing="ease-out-sine"
                  data-aos-once="false"
                  data-aos-duration="900"
                  data-aos-anchor-placement="top-bottom"
                  data-aos-delay="1000"
               >
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt exercitationem
                  eum maiores distinctio quibusdam ab asperiores amet.
               </p>
            </div>

            {/* Typeface 2 */}
            {f2 !== "" && (
               <div className="typeface">
                  <h4
                     className="typeface-sample"
                     style={{ fontFamily: fam2 }}
                     data-aos="fade-right"
                     data-aos-easing="ease-out-sine"
                     data-aos-once="false"
                     data-aos-duration="900"
                     data-aos-anchor-placement="top-bottom"
                  >
                     Aa
                  </h4>
                  <h5
                     className="typeface-name"
                     style={{ fontFamily: fam2 }}
                     data-aos="fade-right"
                     data-aos-easing="ease-out-sine"
                     data-aos-once="false"
                     data-aos-duration="900"
                     data-aos-anchor-placement="top-bottom"
                  >
                     {f2}
                  </h5>
                  <p
                     className="typeface-placeholder"
                     style={{ fontFamily: fam2 }}
                     data-aos="fade-right"
                     data-aos-easing="ease-out-sine"
                     data-aos-once="false"
                     data-aos-duration="900"
                     data-aos-anchor-placement="top-bottom"
                  >
                     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt
                     exercitationem eum maiores distinctio quibusdam ab asperiores amet.
                  </p>
               </div>
            )}
         </div>
      </article>
   );
};

export default SPTypography;

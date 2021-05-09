import React from "react";

const SPTypography = ({ f1, f2, fam1, fam2 }) => {
   return (
      <article className="single-project-info__typography">
         <h3>Typography</h3>
         <hr />
         <div className="typography-container">
            {/* Typeface 1 */}
            <div className="typeface">
               <h4 className="typeface-sample" style={{ fontFamily: fam1 }}>
                  Aa
               </h4>
               <h5 className="typeface-name" style={{ fontFamily: fam1 }}>
                  {f1}
               </h5>
               <p className="typeface-placeholder" style={{ fontFamily: fam1 }}>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt exercitationem
                  eum maiores distinctio quibusdam ab asperiores amet.
               </p>
            </div>

            {/* Typeface 2 */}
            {f2 !== "" && (
               <div className="typeface">
                  <h4 className="typeface-sample" style={{ fontFamily: fam2 }}>
                     Aa
                  </h4>
                  <h5 className="typeface-name" style={{ fontFamily: fam2 }}>
                     {f2}
                  </h5>
                  <p className="typeface-placeholder" style={{ fontFamily: fam2 }}>
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

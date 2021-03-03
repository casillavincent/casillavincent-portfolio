import React from "react";

const SPColors = ({ col1, col2, col3 }) => {
   return (
      <article className="single-project-info-colors">
         <h3>Colors</h3>
         <hr />
         <section className="color-items">
            {/* Color 1 */}
            <div className="color-item color-item-01">
               <div className="color-swatch" style={{ background: `${col1}` }}></div>
               <p>{col1}</p>
            </div>

            {/* COlor 2 */}
            <div className="color-item color-item-02">
               <div className="color-swatch" style={{ background: `${col2}` }}></div>
               <p>{col2}</p>
            </div>

            {/* Color 3 */}
            <div className="color-item color-item-03">
               <div className="color-swatch" style={{ background: `${col3}` }}></div>
               <p>{col3}</p>
            </div>
         </section>
      </article>
   );
};

export default SPColors;

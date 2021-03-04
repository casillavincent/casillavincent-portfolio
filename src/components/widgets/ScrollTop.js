import React from "react";
import { RiArrowUpSLine } from "react-icons/ri";

const ScrollTop = () => {
   const scrollTop = () => {
      window.scrollTo(0, 0);
   };

   return (
      <button
         className="scroll-to-top-btn"
         type="button"
         title="Scroll To Top"
         onClick={() => {
            scrollTop();
         }}
         data-aos="fade-up"
         data-aos-anchor-placement="center-bottom"
         data-aos-easing="ease-out-quart"
         data-aos-once="false"
         data-aos-duration="850"
         data-aos-mirror="true"
      >
         <RiArrowUpSLine size="3em" />
      </button>
   );
};

export default ScrollTop;

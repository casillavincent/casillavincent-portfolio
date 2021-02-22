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
      >
         <RiArrowUpSLine size="3em" />
      </button>
   );
};

export default ScrollTop;

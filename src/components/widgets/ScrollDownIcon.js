import React from "react";

const ScrollDownIcon = () => {
   return (
      <div
         class="scroll-downs"
         data-aos="fade-up"
         data-aos-anchor-placement="center-bottom"
         data-aos-easing="ease-out"
         data-aos-once="true"
         data-aos-duration="750"
      >
         <div class="mousey">
            <div class="scroller"></div>
         </div>
         <p className="scroll-downs__label"> scroll down to explore my page</p>
      </div>
   );
};

export default ScrollDownIcon;

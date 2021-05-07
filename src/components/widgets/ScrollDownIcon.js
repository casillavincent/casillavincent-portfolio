import React from "react";

const ScrollDownIcon = () => {
   return (
      <div
         className="scroll-downs"
         data-aos="fade-up"
         data-aos-duration="800"
         data-aos-one="true"
         data-aos-easing="ease-out-quart"
         data-aos-delay="150"
      >
         <a href="#brief-intro" className="mousey">
            <div className="scroller"></div>
         </a>
         <p className="scroll-downs__label"> scroll down to explore my page</p>
      </div>
   );
};

export default ScrollDownIcon;

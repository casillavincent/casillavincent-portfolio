import React from "react";
import ScrollDownIcon from "./widgets/ScrollDownIcon";
import { Link } from "react-router-dom";

// Birds
import { useState, useEffect, useRef } from "react";
import BIRDS from "vanta/dist/vanta.birds.min";

const Splash = () => {
   const [vantaEffect, setVantaEffect] = useState(0);
   const myRef = useRef(null);
   useEffect(() => {
      if (!vantaEffect) {
         setVantaEffect(
            BIRDS({
               el: myRef.current,
               mouseControls: true,
               touchControls: true,
               gyroControls: false,
               minHeight: 200.0,
               minWidth: 200.0,
               scale: 1.0,
               scaleMobile: 1.0,
               backgroundColor: 0x0,
               color2: 0x83f50,
               colorMode: "variance",
               birdSize: 2.5,
               wingSpan: 25.0,
               separation: 75.0,
               alignment: 35.0,
               cohesion: 35.0,
               quantity: 2.0,
            })
         );
      }
      return () => {
         if (vantaEffect) vantaEffect.destroy();
      };
   }, [vantaEffect]);
   return (
      <section className="section splash" ref={myRef}>
         {/* Text Content */}
         <article className="splash-text-container">
            <h1
               className="splash-text-container__tagline"
               data-aos="fade-right"
               data-aos-easing="ease-out-quart"
               data-aos-once="false"
               data-aos-duration="850"
               data-aos-mirror="true"
            >
               I build websites using innovative tools.
            </h1>
            <p
               className="splash-text-container__excerpt"
               data-aos="fade-right"
               data-aos-easing="ease-out-quart"
               data-aos-once="false"
               data-aos-delay="100"
               data-aos-duration="850"
               data-aos-mirror="true"
            >
               Web designer and frontend web developer based in Vancouver, BC.
            </p>
            <button
               type="button"
               className="splash-text-container__btn"
               data-aos="fade-right"
               data-aos-easing="ease-out-quart"
               data-aos-once="false"
               data-aos-delay="150"
               data-aos-duration="850"
               data-aos-mirror="true"
            >
               <Link to={"/about"}>More About Me</Link>
            </button>
         </article>

         {/* Scroll Down Indicator */}
         <ScrollDownIcon />
      </section>
   );
};

export default Splash;

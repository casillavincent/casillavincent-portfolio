import React from "react";
import { useEffect, useState } from "react";

// React Icons
import { FaPaintRoller, FaSearch, FaPencilRuler } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { RiDeviceFill } from "react-icons/ri";

// AOS
import AOS from "aos";

const ProjectsSummary = () => {
   const [isDesktop, setIsDesktop] = useState(null);

   useEffect(() => {
      if (window.innerWidth >= 800) {
         setIsDesktop(true);
      } else {
         setIsDesktop(false);
      }
   }, []);
   console.log(isDesktop);

   // AOS Plugin
   AOS.init();
   return (
      <section className="section projects" id="my-work">
         {/* Title and Summary */}
         <article className="projects__intro">
            <h1
               data-aos="fade-down"
               data-aos-anchor-placement="center-bottom"
               data-aos-easing="ease-out-quart"
               data-aos-once="true"
               data-aos-duration="800"
            >
               Work
            </h1>
            <hr
               data-aos="fade-right"
               data-aos-anchor-placement="center-bottom"
               data-aos-easing="ease-out-quart"
               data-aos-once="true"
               data-aos-duration="800"
            />
            <blockquote
               data-aos="fade-right"
               data-aos-anchor-placement="bottom-bottom"
               data-aos-easing="ease-out-quart"
               data-aos-delay="300"
               data-aos-once="true"
               data-aos-duration="800"
            >
               Employing the right design and development tools can only get a website so far. As a
               frontend developer, my goal is to build engaging websites that not only look good but
               also integrate user experience research, design fundamentals, competitive analysis
               and analytics to ensure my projects go further online.
            </blockquote>
         </article>

         {/* Highlights */}
         <article className="projects__highlights">
            <h2
               className="projects__highlights__title"
               data-aos="fade-right"
               data-aos-anchor-placement="center-bottom"
               data-aos-easing="ease-out-quart"
               data-aos-once="true"
               data-aos-delay="500"
               data-aos-duration="800"
            >
               With all my projects, I take account ...
            </h2>
            <div className="highlights-container">
               <IconContext.Provider value={{ size: "2em" }}>
                  {/* Item 01 */}
                  <div
                     className="highlights-item-01"
                     data-aos={isDesktop === true ? "fade-up" : "fade-right"}
                     data-aos-easing="ease-out-quart"
                     data-aos-once="true"
                     data-aos-duration="800"
                  >
                     <FaPencilRuler title="Ruler Icon" />
                     <h2>Semantic, Scalable and Modular Architecure</h2>
                  </div>

                  {/* Item 02 */}
                  <div
                     className="highlights-item-02"
                     data-aos={isDesktop === true ? "fade-up" : "fade-right"}
                     data-aos-easing="ease-out-quart"
                     data-aos-once="true"
                     data-aos-duration="800"
                  >
                     <RiDeviceFill title="Devices Icon" />
                     <h2>Fully Responsive Design</h2>
                  </div>

                  {/* Item 03 */}
                  <div
                     className="highlights-item-03"
                     data-aos={isDesktop === true ? "fade-up" : "fade-right"}
                     data-aos-easing="ease-out-quart"
                     data-aos-once="true"
                     data-aos-duration="800"
                  >
                     <FaSearch title="Magnifying Glass Icon" />
                     <h2>Search Engine Optimization</h2>
                  </div>

                  {/* Item 04 */}

                  <div
                     className="highlights-item-04"
                     data-aos={isDesktop === true ? "fade-up" : "fade-right"}
                     data-aos-easing="ease-out-quart"
                     data-aos-once="true"
                     data-aos-duration="800"
                  >
                     <FaPaintRoller title="Paint Roller Icon" />
                     <h2>Design Fundamentals</h2>
                  </div>
               </IconContext.Provider>
            </div>
         </article>
      </section>
   );
};

export default ProjectsSummary;

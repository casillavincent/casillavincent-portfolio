import React from "react";

// React Icons
import { FaPaintRoller, FaSearch, FaPencilRuler } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { RiDeviceFill } from "react-icons/ri";

// AOS
import AOS from "aos";

const ProjectsSummary = () => {
   AOS.init();
   return (
      <section className="section projects">
         {/* Title and Summary */}
         <article className="projects__intro">
            <h1
               data-aos="fade-down"
               data-aos-anchor-placement="center-bottom"
               data-aos-easing="ease-out"
               data-aos-once="true"
            >
               Work
            </h1>
            <hr
               data-aos="fade-right"
               data-aos-anchor-placement="center-bottom"
               data-aos-easing="ease-out"
               data-aos-once="true"
            />
            <blockquote
               data-aos="fade-right"
               data-aos-anchor-placement="bottom-bottom"
               data-aos-easing="ease-out"
               data-aos-delay="300"
               data-aos-once="true"
            >
               Employing the right design and development tools can only get a website so far. As a
               frontend developer, my goal is to build engaging websites that not only look good but
               also integrate user experience research, design fundamentals, competitive analysis
               and analytics to ensure all projects go further online.
            </blockquote>
         </article>

         {/* Highlights */}
         <article className="projects__highlights">
            <h2
               className="projects__highlights__title"
               data-aos="fade-right"
               data-aos-anchor-placement="bottom-bottom"
               data-aos-easing="ease-out"
               data-aos-delay="400"
               data-aos-duration="500"
               data-aos-once="true"
            >
               {" "}
               From the design to development of my work, I take account ...
            </h2>
            <div className="highlights-container">
               <IconContext.Provider value={{ size: "2em" }}>
                  {/* Item 01 */}
                  <div
                     className="highlights-item-01"
                     data-aos="fade-up"
                     data-aos-anchor-placement="bottom-bottom"
                     data-aos-easing="ease-out"
                     data-aos-delay="400"
                     data-aos-duration="500"
                     data-aos-once="true"
                  >
                     <FaPencilRuler title="Ruler Icon" />
                     <h2>Semantic, Scalable and Modular Architecure</h2>
                  </div>

                  {/* Item 02 */}
                  <div
                     className="highlights-item-02"
                     data-aos="fade-up"
                     data-aos-anchor-placement="bottom-bottom"
                     data-aos-easing="ease-out"
                     data-aos-delay="400"
                     data-aos-duration="500"
                     data-aos-once="true"
                  >
                     <RiDeviceFill title="Devices Icon" />
                     <h2>Fully Responsive Design</h2>
                  </div>

                  {/* Item 03 */}
                  <div
                     className="highlights-item-03"
                     data-aos="fade-up"
                     data-aos-anchor-placement="bottom-bottom"
                     data-aos-easing="ease-out"
                     data-aos-delay="400"
                     data-aos-duration="500"
                     data-aos-once="true"
                  >
                     <FaSearch title="Magnifying Glass Icon" />
                     <h2>Search Engine Optimization</h2>
                  </div>

                  {/* Item 04 */}

                  <div
                     className="highlights-item-01"
                     data-aos="fade-up"
                     data-aos-anchor-placement="bottom-bottom"
                     data-aos-easing="ease-out"
                     data-aos-delay="400"
                     data-aos-duration="500"
                     data-aos-once="true"
                  >
                     <FaPaintRoller title="Paint Roller Icon" />
                     <h2>Creativity Simplified</h2>
                  </div>
               </IconContext.Provider>
            </div>
         </article>
      </section>
   );
};

export default ProjectsSummary;

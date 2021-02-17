import React from "react";

// React Icons
import { FaPaintRoller, FaSearch, FaPencilRuler } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { RiDeviceFill } from "react-icons/ri";

const Projects = () => {
   return (
      <section className="section projects">
         {/* Title and Summary */}
         <article className="projects__intro">
            <h1>Projects</h1>
            <blockquote>
               Employing the right design and development tools can only get a website so far. As a
               frontend developer, my goal is to build engaging web pages that not only look good
               but also integrate user experience research, design fundamentals, analytics to ensure
               all projects go further online.
            </blockquote>
         </article>

         {/* Highlights */}
         <article className="projects__highlights">
            <IconContext.Provider value={{ size: "1.75em" }}>
               {/* Item 01 */}
               <div className="highlights-item-01">
                  <FaPaintRoller title="Paint Roller Icon" />
                  <h2>Creativity Simplified</h2>
               </div>

               {/* Item 02 */}
               <div className="highlights-item-02">
                  <RiDeviceFill title="Devices Icon" />
                  <h2>Fully Responsive Design</h2>
               </div>

               {/* Item 03 */}
               <div className="highlights-item-03">
                  <FaSearch title="Magnifying Glass Icon" />
                  <h2>Search Engine Optimized</h2>
               </div>

               {/* Item 04 */}
               <div className="highlights-item-04">
                  <FaPencilRuler title="Ruler Icon" />
                  <h2>Semantic, Scalable and Modular Architecure</h2>
               </div>
            </IconContext.Provider>
         </article>
      </section>
   );
};

export default Projects;

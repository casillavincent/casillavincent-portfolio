import React from "react";

// AOS
import AOS from "aos";

const ProjectsSummary = () => {
   // AOS Plugin
   AOS.init();
   return (
      <article className="section projects" id="my-work">
         {/* Title and Summary */}
         <section className="projects__intro">
            <h2
               data-aos="fade-down"
               data-aos-easing="ease-out-quart"
               data-aos-once="true"
               data-aos-duration="800"
            >
               My Work
            </h2>
            <hr
               data-aos="fade-up"
               data-aos-easing="ease-out-quart"
               data-aos-once="true"
               data-aos-duration="800"
            />
            <blockquote
               data-aos="fade-up"
               data-aos-easing="ease-out-quart"
               data-aos-delay="300"
               data-aos-once="true"
               data-aos-duration="800"
            >
               {" "}
               I am passionate about creating interactive and reusable UI components that implement
               design thinking principles, UX research and web development best practices. With all
               my projects I take account ...
            </blockquote>
         </section>

         {/* Highlights */}
         <section className="projects__highlights">
            <div
               className="highlights-container"
               data-aos="fade-up"
               data-aos-easing="ease-out-quart"
               data-aos-delay="450"
               data-aos-once="true"
               data-aos-duration="900"
            >
               {/* Item 01 */}
               <div className="highlights-item-01">
                  <lord-icon
                     src="https://cdn.lordicon.com//nocovwne.json"
                     trigger="loop-on-hover"
                     colors="primary:#FFFFFF,secondary:#ec2341"
                     stroke="30"
                     style={{ width: "150px", height: "150px" }}
                  ></lord-icon>
                  <h2>Semantic, Scalable and Well-Documented Code</h2>
               </div>

               {/* Item 02 */}
               <div className="highlights-item-02">
                  <lord-icon
                     src="https://cdn.lordicon.com//jvucoldz.json"
                     trigger="loop-on-hover"
                     colors="primary:#FFFFFF,secondary:#ec2341"
                     stroke="30"
                     style={{ width: "150px", height: "150px" }}
                  ></lord-icon>
                  <h2>Fully Responsive Design</h2>
               </div>

               {/* Item 03 */}
               <div className="highlights-item-03">
                  <lord-icon
                     src="https://cdn.lordicon.com//msoeawqm.json"
                     trigger="loop-on-hover"
                     colors="primary:#FFFFFF,secondary:#ec2341"
                     stroke="30"
                     style={{ width: "150px", height: "150px" }}
                  ></lord-icon>
                  <h2>Search Engine Optimization</h2>
               </div>

               {/* Item 04 */}
               <div className="highlights-item-04">
                  {/* <FaPaintRoller title="Paint Roller Icon" /> */}
                  <lord-icon
                     src="https://cdn.lordicon.com//wloilxuq.json"
                     trigger="loop-on-hover"
                     colors="primary:#FFFFFF,secondary:#ec2341"
                     stroke="30"
                     style={{ width: "150px", height: "150px" }}
                  ></lord-icon>
                  <h2>Design Fundamentals</h2>
               </div>
               {/* </IconContext.Provider> */}
            </div>
         </section>
      </article>
   );
};

export default ProjectsSummary;

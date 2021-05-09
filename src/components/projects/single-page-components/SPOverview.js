import React from "react";

const SPOverview = ({
   scope,
   devTeam,
   role,
   tools,
   githubLink,
   livesiteLink,
   mobileBanner,
   desktopBanner,
   duration,
}) => {
   return (
      <article className="single-project-overview">
         <img
            src={mobileBanner}
            alt="Project Banner"
            className="single-project-overview--mobile-banner"
            data-aos="fade-up"
            data-aos-delay="650"
         />
         <img
            src={desktopBanner}
            alt="Project Banner"
            className="single-project-overview--desktop-banner"
            data-aos="fade-up"
            data-aos-delay="650"
         />

         {/* <--- This is the start of the content container ---> */}
         <section className="single-project-overview__content">
            {/* Scope */}
            <div className="scope">
               <h2>Overview</h2>
               <p>{scope}</p>
            </div>

            <div className="duration">
               <h2>Duration</h2>
               <p>{duration}</p>
            </div>

            {/* Development Team */}
            <div className="dev-team">
               <h2>Development Team</h2>
               <p>{devTeam}</p>
            </div>

            {/* Role */}
            <div className="role">
               <h2>Role</h2>
               <ul>
                  <li>{role}</li>
               </ul>
            </div>

            {/* Tools */}
            <div className="tools">
               <h2>Development Stack</h2>
               <ul>
                  {tools.map((tool) => {
                     return <li>{tool}</li>;
                  })}
               </ul>
            </div>
         </section>

         {/* CTA Buttons */}
         <div className="single-project-overview__cta">
            <a href={livesiteLink} target="_blank" rel="noopener noreferrer" title="Live Site">
               {livesiteLink === undefined ? "Coming Soon" : "View Live Site"}
            </a>
            <a href={githubLink} target="_blank" rel="noopener noreferrer" title="Github Repo">
               {githubLink === undefined ? "Not Available" : "View on Github"}
            </a>
         </div>
      </article>
   );
};

export default SPOverview;

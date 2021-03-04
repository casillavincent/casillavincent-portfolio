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
}) => {
   console.log(livesiteLink);
   return (
      <article className="single-project-overview">
         <img
            src={mobileBanner}
            alt="Project Banner"
            className="single-project-overview--mobile-banner"
         />
         <img
            src={desktopBanner}
            alt="Project Banner"
            className="single-project-overview--desktop-banner"
         />

         {/* <--- This is the start of the content container ---> */}
         <section className="single-project-overview__content">
            {/* Scope */}
            <div className="scope">
               <h2>Scope</h2>
               <p>{scope}</p>
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
            <button type="button" title="Live Site">
               <a href={livesiteLink} target="_blank" rel="noopener noreferrer">
                  {livesiteLink === undefined ? "Coming Soon" : "View Live Site"}
               </a>
            </button>
            <button type="button" title="Github Repo">
               <a href={githubLink} target="_blank" rel="noopener noreferrer">
                  {githubLink === undefined ? "Coming Soon" : "View on Github"}
               </a>
            </button>
         </div>
      </article>
   );
};

export default SPOverview;

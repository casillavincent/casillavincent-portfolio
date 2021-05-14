import React from "react";

import { Link } from "react-router-dom";

// Pictures
import Thumb01 from "../../assets/banners/capstone.png";
import Thumb02 from "../../assets/banners/jynx.png";
import Thumb03 from "../../assets/banners/movie.png";
import Thumb04 from "../../assets/banners/portfolio.png";
import Thumb05 from "../../assets/banners/mercedes.png";

// Data
const workObj = [
   {
      project: "Yaeger",
      description: "Custom built WordPress theme. A photography portfolio. More info on Github.",
      stack: ["WordPress", "PHP", "Sass", "HTML5"],
      github: "https://github.com/casillavincent/yaeger",
      livesite: "http://portfolio.vcasilla.com/",
      img: Thumb05,
      info: false,
      router: null,
      slug: "mercedes",
   },
   {
      project: "Jynx Media",
      description: "A digital agency where creativity meets innovation.",
      stack: ["ReactJS", "Sass", "CSS3", "Github"],
      github: "https://github.com/casillavincent/jynx-media",
      livesite: "https://jynx.vcasilla.com/",
      img: Thumb02,
      info: false,
      router: null,
      slug: "jynx",
   },
   {
      project: "Butter.DB",
      description: "Get updates on movies you want to see. ",
      stack: ["ReactJS", "HTML5", "Sass", "Git", "RESTful API"],
      github: "https://github.com/casillavincent/movie-app",
      livesite: "https://vcasilla.com/butter-db/",
      img: Thumb03,
      info: true,
      router: "/butter-db-project",
      slug: "butterdb",
   },
   {
      project: "The Rolling Pin",
      description: "An eCommerce website for an artisanal bakery.",
      stack: ["WordPress", "jQuery", "MySQL", "PHP", "Github"],
      github: null,
      livesite: "https://vcasilla.com/the-rolling-pin/",
      img: Thumb01,
      info: true,
      router: "/the-rolling-pin-project",
      slug: "rollingpin",
   },
   {
      project: "Portfolio",
      description: "A SPA that showcases my technical projects as a front-end web developer.",
      stack: ["ReactJS", "JavaScript", "Sass"],
      github: "https://github.com/casillavincent/casillavincent-portfolio",
      livesite: "https://vcasilla.com/",
      img: Thumb04,
      info: true,
      router: "/personal-portfolio-project",
      slug: "portfolio",
   },
];

const WorkChild = ({
   project,
   description,
   stack,
   github,
   livesite,
   img,
   hasInfo,
   router,
   slug,
}) => {
   return (
      <section className="single-project-item">
         {/* Banner */}
         <a className="banner-link" href={livesite} target="_blank" rel="noreferrer">
            <img
               className={`img-banner-${slug}`}
               src={img}
               alt={`${project} Banner`}
               width="500"
               loading="lazy"
            />
         </a>

         {/* Text Content */}
         <section className="text-content">
            <h2>
               {project}
               <div className="accent-line"></div>
            </h2>
            <ul className="stack">
               {stack.map((item, i) => (
                  <li key={i}>{item}</li>
               ))}
            </ul>
            <p className="description">{description}</p>

            <div className="cta-btns">
               {hasInfo && <Link to={router}>More Info</Link>}
               {/* Live Site */}
               <a href={livesite} className="live-site" target="_blank" rel="noreferrer">
                  Live Site
               </a>

               {/* Github */}
               {github !== null && (
                  <a href={github} className="github" target="_blank" rel="noreferrer">
                     Github
                  </a>
               )}
            </div>
         </section>
      </section>
   );
};

const Work = () => {
   return (
      <React.Fragment>
         <article className="single-project-items">
            {workObj.map((item, index) => {
               return (
                  <WorkChild
                     key={index}
                     img={item.img}
                     project={item.project}
                     stack={item.stack}
                     description={item.description}
                     hasInfo={item.info}
                     livesite={item.livesite}
                     github={item.github}
                     router={item.router}
                     slug={item.slug}
                  />
               );
            })}
         </article>
      </React.Fragment>
   );
};

export default Work;

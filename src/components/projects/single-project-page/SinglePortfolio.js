import React from "react";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import { useEffect } from "react";
import { Helmet } from "react-helmet";

// Components
import SPOverview from "../single-page-components/SPOverview";
import SPDevelopment from "../single-page-components/SPDevelopment";
import SPTitle from "../single-page-components/SPTitle";
import SPColors from "../single-page-components/SPColors";
// import SPChallenges from "../single-page-components/SPChallenges";
import SPCta from "../single-page-components/SPCta";
import SPTypography from "../single-page-components/SPTypography";
import SPDesign from "../single-page-components/SPDesign";

// Photos
import mobileBanner from "../../../assets/banners/portfolio-mobile.jpg";
import desktopBanner from "../../../assets/banners/portfolio-desktop.jpg";

import inspo01 from "../../../assets/portfolio/portfolio-inspo1.jpg";
import inspo02 from "../../../assets/portfolio/portfolio-inspo2.jpg";
import inspo03 from "../../../assets/portfolio/portfolio-inspo3.jpg";

import contentPlan from "../../../assets/portfolio/content-plan.jpg";

import WF1 from "../../../assets/portfolio/portfolio-wireframes/portfolio-wireframe0.png";
import WF2 from "../../../assets/portfolio/portfolio-wireframes/portfolio-wireframe1.png";
import WF3 from "../../../assets/portfolio/portfolio-wireframes/portfolio-wireframe2.png";
import WF4 from "../../../assets/portfolio/portfolio-wireframes/portfolio-wireframe3.png";
import WF5 from "../../../assets/portfolio/portfolio-wireframes/portfolio-wireframe4.png";
import WF6 from "../../../assets/portfolio/portfolio-wireframes/portfolio-wireframe5.png";

// Project Info
import { MY_PROJECTS } from "../../../globals/project-info";

const SingleMovieApp = () => {
   useEffect(() => {
      window.scrollTo(0, 0);
   }, []);

   // Options for Lightbox
   const options = {
      settings: {
         overlayColor: "black",
         lightboxTransitionSpeed: 0.1,
      },
      caption: {
         captionColor: "#f73615",
      },
      buttons: {
         showAutoplayButton: false,
         showCloseButton: true,
         showDownloadButton: false,
         showFullscreenButton: false,
         showNextButton: true,
         showPrevButton: true,
         showThumbnailsButton: false,
         size: "40px",
      },
   };

   return (
      <section className="single-project-info single-project-info-portfolio">
         <Helmet>
            <title>Vincent Casilla - Portfolio Piece</title>
            <meta
               name="description"
               content="A react application that highlights the technical projects I have completed at BCIT."
            />
         </Helmet>
         <SimpleReactLightbox>
            {/* Component for outputting the title and tagline */}
            <SPTitle title={MY_PROJECTS[3].title} tagline={MY_PROJECTS[3].tagline} />
            {/* Component for outputting the overview */}
            <SPOverview
               scope={MY_PROJECTS[3].scope}
               devTeam={MY_PROJECTS[3].developmentTeam}
               role={MY_PROJECTS[3].role}
               tools={MY_PROJECTS[3].tools}
               githubLink={MY_PROJECTS[3].github}
               livesiteLink={MY_PROJECTS[3].liveSite}
               mobileBanner={mobileBanner}
               desktopBanner={desktopBanner}
               duration="6 Weeks"
            />
            {/* Planning */}
            <article className="single-project-planning">
               <section className="single-project-planning__container">
                  <h3>Planning</h3>
                  <hr />
                  <p>
                     When starting my portfolio, I had the slightest clue what a quality web
                     developer portfolio should include. During the initial stages, I was only
                     collecting inspiration from other portfolios. My goal was to take notes of
                     their underlying similarities and also record each of their strengths.
                  </p>
               </section>
            </article>
            {/* Inspo Gallery */}
            <div className="inspo-gallery-text">
               <h4>Inspirations</h4>
               <hr />
            </div>
            <div className="inspo-gallery">
               <img src={inspo01} alt="Portfolio Inspiration 1" width="150" loading="lazy" />
               <img src={inspo02} alt="Portfolio Inspiration 2" width="150" loading="lazy" />
               <img src={inspo03} alt="Portfolio Inspiration 3" width="150" loading="lazy" />
            </div>
            <div className="portfolio-goals">
               <h4 className="portfolio-goals__excerpt">
                  After gathering inspirations, I created a list prioritizing the goals of my
                  portfolio
               </h4>

               <ol className="portfolio-goals__list">
                  <li>
                     <span>User Experience</span> - ensure visitors can easily navigate through all
                     pages and content by using logical call to action buttons.
                  </li>

                  <li>
                     <span>Design Fundamentals</span> - choose a palette and typeface that doesn't
                     take away from my content and create a layout that is natural and follow a
                     visual hierarchy.
                  </li>

                  <li>
                     <span>Performance</span> - keep my page load time below 5.0s and page size
                     below 3.0Mb
                  </li>
               </ol>
            </div>

            <div className="timeline"></div>

            <article className="content-plan">
               <h4 className="content-plan__title">Information Architecture & Content Plan</h4>
               <hr />
               <p className="content-plan__excerpt">
                  The next step is to create a simple site map of how I would break up my pages and
                  content. I then created a detailed content plan for all the necessary information
                  I wanted to present for each project.
               </p>
               <img src={contentPlan} alt="Content Plan" width="250" loading="lazy" />
               <div className="content-plan__sample">
                  <h5> Content plan for my portfolio react app (example)</h5>
                  <ul>
                     <li>Name of website/application</li>
                     <li>
                        A short summary of what the website does and why it's significant to me
                     </li>
                     <li>Requirements</li>
                     <li>Reason for making the website</li>
                     <li>Design/Development Tools</li>
                     <li>Planning, reasearch, wireframes, mockups, style guides(if available)</li>
                     <li>Code Snippet</li>
                     <li>Challenges and solutions</li>
                     <li>CTA Buttons - Live site, GitHub, next project, previous project</li>
                  </ul>
               </div>
            </article>

            <div className="timeline"></div>

            {/* Component For Design */}
            <SPDesign text={MY_PROJECTS[3].design} />

            <article className="portfolio-wireframes">
               <h4>Wireframes (click to enlarge)</h4>
               <SRLWrapper options={options}>
                  <img src={WF1} alt="Portfolio Wireframes" width="150" loading="lazy" />
                  <img src={WF2} alt="Portfolio Wireframes" width="150" loading="lazy" />
                  <img src={WF3} alt="Portfolio Wireframes" width="150" loading="lazy" />
                  <img src={WF4} alt="Portfolio Wireframes" width="150" loading="lazy" />
                  <img src={WF5} alt="Portfolio Wireframes" width="150" loading="lazy" />
                  <img src={WF6} alt="Portfolio Wireframes" width="150" loading="lazy" />
               </SRLWrapper>
            </article>

            <SPColors
               col1={MY_PROJECTS[3].colors[0]}
               col2={MY_PROJECTS[3].colors[1]}
               col3={MY_PROJECTS[3].colors[2]}
            />
            {/* Component for typography */}
            <SPTypography
               f1="Ubuntu, sans-serif"
               f2="Montserrat, sans-serif"
               fam1="Ubuntu, sans-serif"
               fam2="Montserrat, sans-serif"
            />

            <div className="timeline"></div>

            {/* Component for Development */}
            <SPDevelopment text={MY_PROJECTS[3].development} />

            {/* Code Snippets */}
            <div className="development-example">
               <p className="development-example__caption">
                  This is how I built my movie app page using resusable components
               </p>
               <iframe
                  className="code-snippet"
                  height="500"
                  scrolling="no"
                  style={{ width: "100%" }}
                  title="Prop Drilling Example"
                  src="https://codepen.io/casillavincent/embed/mdOamZq?height=265&theme-id=dark&default-tab=js"
                  frameborder="no"
                  loading="lazy"
                  allowtransparency="true"
                  allowfullscreen="true"
               >
                  See the Pen{" "}
                  <a href="https://codepen.io/casillavincent/pen/mdOamZq">Prop Drilling Example</a>{" "}
                  by Vincent Casilla (
                  <a href="https://codepen.io/casillavincent">@casillavincent</a>) on{" "}
                  <a href="https://codepen.io">CodePen</a>.
               </iframe>
            </div>

            <div className="development-example">
               <p className="development-example__caption">Responsive Header</p>
               <iframe
                  className="code-snippet"
                  height="500"
                  scrolling="no"
                  title="Responsive Header for Portfolio"
                  src="https://codepen.io/casillavincent/embed/NWbegjm?height=359&theme-id=dark&default-tab=js"
                  frameborder="no"
                  loading="lazy"
                  allowtransparency="true"
                  allowfullscreen="true"
               >
                  See the Pen{" "}
                  <a href="https://codepen.io/casillavincent/pen/NWbegjm">
                     Responsive Header for Portfolio
                  </a>{" "}
                  by Vincent Casilla (
                  <a href="https://codepen.io/casillavincent">@casillavincent</a>) on{" "}
                  <a href="https://codepen.io">CodePen</a>.
               </iframe>
            </div>

            {/* Component for CTA */}
            <SPCta
               home="/"
               nextProject="/butter-db-project"
               livesite={MY_PROJECTS[3].liveSite}
               github={MY_PROJECTS[3].github}
            />
         </SimpleReactLightbox>
      </section>
   );
};

export default SingleMovieApp;

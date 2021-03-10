import React from "react";
import SimpleReactLightbox from "simple-react-lightbox";
import { useEffect } from "react";

// Components
import SPOverview from "../single-page-components/SPOverview";
// import SPDesign from "../single-page-components/SPDesign";
// import SPDevelopment from "../single-page-components/SPDevelopment";
import SPTitle from "../single-page-components/SPTitle";
import SPColors from "../single-page-components/SPColors";
// import SPChallenges from "../single-page-components/SPChallenges";
import SPCta from "../single-page-components/SPCta";
import SPTypography from "../single-page-components/SPTypography";
import SPComingSoon from "../single-page-components/SPComingSoon";

// Photos
import mobileBanner from "../../../assets/banners/portfolio-mobile.jpg";
import desktopBanner from "../../../assets/banners/portfolio-desktop.jpg";

import inspo01 from "../../../assets/portfolio/portfolio-inspo1.jpg";
import inspo02 from "../../../assets/portfolio/portfolio-inspo2.jpg";
import inspo03 from "../../../assets/portfolio/portfolio-inspo3.jpg";

// Project Info
import { MY_PROJECTS } from "../../../globals/project-info";

// AOS
import AOS from "aos";

const SingleMovieApp = () => {
   useEffect(() => {
      window.scrollTo(0, 0);
   }, []);

   // AOS Plugin
   AOS.init();

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
            />
            {/* Planning */}
            <article className="single-project-planning">
               <section className="single-project-planning__container">
                  <h3
                     data-aos="fade-down"
                     data-aos-easing="ease-out-sine"
                     data-aos-once="false"
                     data-aos-duration="700"
                  >
                     Planning
                  </h3>
                  <hr
                     data-aos="fade-right"
                     data-aos-easing="ease-out-sine"
                     data-aos-once="false"
                     data-aos-duration="700"
                     data-aos-delay="250"
                  />
                  <p
                     data-aos="fade-right"
                     data-aos-easing="ease-out-sine"
                     data-aos-once="false"
                     data-aos-duration="700"
                     data-aos-delay="450"
                  >
                     When starting this my portfolio piece, I had the slightest clue of what a
                     quality web developer portfolio should contain. During the initial stages, I
                     was only collecting inspiration from other developer’s portfolios with the goal
                     to take notes of what each portfolio had in common and record each of their
                     strengths.
                  </p>
               </section>
            </article>
            {/* Inspo Gallery */}
            <div className="inspo-gallery">
               <img src={inspo01} alt="Portfolio Inspiration 1" width="150" />
               <img src={inspo02} alt="Portfolio Inspiration 2" width="150" />
               <img src={inspo03} alt="Portfolio Inspiration 3" width="150" />
            </div>
            <div className="portfolio-goals">
               <h4 className="portfolio-goals__excerpt">
                  {" "}
                  After gathering my inspirations I wrote down my priorities when building my
                  portfolio ...
               </h4>
               <ol className="portfolio-goals__list">
                  <li>
                     <span>Prioritize User Experience</span> - ensure visitors can easily navigate
                     through all pages and content by using logical call to action buttons.
                  </li>
                  <li>
                     <span>Design Fundamentals</span> - choose a palette and typeface that doesn't
                     take focus away from my content and create a layout that is natural and follow
                     a visual hierarchy.
                  </li>
                  <li>
                     <span>Performance</span> - keep my page load time below 5.0s and page size is
                     below 3.0Mb
                  </li>
               </ol>
            </div>

            <div className="timeline"></div>

            <article className="content-plan">
               <img src="" alt="" />
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
            <SPComingSoon />
            {/* Component for Design Summary */}
            {/* <SPDesign text={} />
            <div className="design-gallery">
               <SRLWrapper options={options}></SRLWrapper>
            </div> */}
            {/* Component for colors used */}
            {/* <SPColors
               col1={MY_PROJECTS[0].colors[0]}
               col2={MY_PROJECTS[0].colors[1]}
               col3={MY_PROJECTS[0].colors[2]}
            /> */}
            {/* Component for Development Summary */}
            {/* <SPDevelopment text={MY_PROJECTS[0].development} /> */}
            {/* <article className="final-project-gallery--mobile">
               <h3>Mobile</h3>
               <hr />
               <SRLWrapper options={options}></SRLWrapper>
            </article> */}
            {/* <article className="final-project-gallery--desktop">
               <h3>Desktop</h3>
               <hr />
               <SRLWrapper options={options}></SRLWrapper>
            </article> */}
            {/* Component for Challenges */}
            {/* <SPChallenges challenge={MY_PROJECTS[0].challenge} /> */}
            {/* <article className="code-snippet">
               <h4 className="code-snippet__excerpt">Heres what it looks like</h4>
               <SRLWrapper options={options}>
                  <img
                     src={movieCodeSnippet}
                     alt="Async function for fetching data from a rest api"
                  />
               </SRLWrapper>
            </article> */}
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

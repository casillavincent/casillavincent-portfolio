import React from "react";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import { useEffect } from "react";

// Components
import SPOverview from "../single-page-components/SPOverview";
import SPDesign from "../single-page-components/SPDesign";
import SPDevelopment from "../single-page-components/SPDevelopment";
import SPTitle from "../single-page-components/SPTitle";
import SPColors from "../single-page-components/SPColors";
import SPChallenges from "../single-page-components/SPChallenges";
import SPCta from "../single-page-components/SPCta";

// Helmet
import { Helmet } from "react-helmet";

// Project Info
import { MY_PROJECTS } from "../../../globals/project-info";

// Photos
import movieMockup1 from "../../../assets/movie-app-mockups/butter-db-mockup1.jpg";
import movieMockup2 from "../../../assets/movie-app-mockups/butter-db-mockup2.jpg";
import movieMockup3 from "../../../assets/movie-app-mockups/butter-db-mockup3.jpg";

import movieFinalMobile1 from "../../../assets/movie-app-final/mobile/butter-db-final-mobile1.jpg";
import movieFinalMobile2 from "../../../assets/movie-app-final/mobile/butter-db-final-mobile2.jpg";
import movieFinalMobile3 from "../../../assets/movie-app-final/mobile/butter-db-final-mobile3.jpg";
import movieFinalMobile4 from "../../../assets/movie-app-final/mobile/butter-db-final-mobile4.jpg";
import movieFinalMobile5 from "../../../assets/movie-app-final/mobile/butter-db-final-mobile5.jpg";

import movieFinalDesktop1 from "../../../assets/movie-app-final/desktop/butter-db-final-desktop1.jpg";
import movieFinalDesktop2 from "../../../assets/movie-app-final/desktop/butter-db-final-desktop2.jpg";
import movieFinalDesktop3 from "../../../assets/movie-app-final/desktop/butter-db-final-desktop3.jpg";
import movieFinalDesktop4 from "../../../assets/movie-app-final/desktop/butter-db-final-desktop4.jpg";

import mobileBanner from "../../../assets/banners/movie-mobile.jpg";
import desktopBanner from "../../../assets/banners/movie-desktop.jpg";

// AOS
import AOS from "aos";
import SPTypography from "../single-page-components/SPTypography";

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

   // AOS Plugin
   AOS.init();

   return (
      <section className="single-project-info">
         {/* For SEO Meta Tags */}
         <Helmet>
            <title>Vincent Casilla - ButterDB</title>
            <meta
               name="description"
               content="A react movie application that uses TMDB Rest API. This application gives you basic movie details for what is upcoming, trending, now playing and popular."
            />
         </Helmet>
         <SimpleReactLightbox>
            {/* Component for outputting the title and tagline */}
            <SPTitle title={MY_PROJECTS[0].title} tagline={MY_PROJECTS[0].tagline} />

            {/* Component for outputting the overview */}
            <SPOverview
               scope={MY_PROJECTS[0].scope}
               devTeam={MY_PROJECTS[0].developmentTeam}
               role={MY_PROJECTS[0].role}
               tools={MY_PROJECTS[0].tools}
               githubLink={MY_PROJECTS[0].github}
               livesiteLink={MY_PROJECTS[0].liveSite}
               mobileBanner={mobileBanner}
               desktopBanner={desktopBanner}
               duration={"4 Weeks"}
            />

            {/* Component for Design Summary */}
            <SPDesign text={MY_PROJECTS[0].design} />
            <SRLWrapper options={options}>
               <div className="design-gallery">
                  <img
                     src={movieMockup1}
                     alt="Popular Page"
                     width="150"
                     loading="lazy"
                     data-aos="fade-up"
                     data-aos-easing="ease-out-quart"
                     data-aos-once="false"
                     data-aos-anchor-placement="center-bottom"
                  />
                  <img
                     src={movieMockup2}
                     alt="Favourites Page"
                     width="150"
                     loading="lazy"
                     data-aos="fade-up"
                     data-aos-easing="ease-out-quart"
                     data-aos-once="false"
                     data-aos-anchor-placement="center-bottom"
                  />
                  <img
                     src={movieMockup3}
                     alt="Single Page"
                     width="150"
                     loading="lazy"
                     data-aos="fade-up"
                     data-aos-easing="ease-out-quart"
                     data-aos-once="false"
                     data-aos-anchor-placement="center-bottom"
                  />
               </div>

               {/* Component for colors used */}
               <SPColors
                  col1={MY_PROJECTS[0].colors[0]}
                  col2={MY_PROJECTS[0].colors[1]}
                  col3={MY_PROJECTS[0].colors[2]}
               />

               {/* Component for typography */}
               <SPTypography
                  f1="Montserrat, sans-serif"
                  f2=""
                  fam1="Montserrat, sans-serif"
                  fam2=""
               />

               {/* Component for Development Summary */}
               <SPDevelopment text={MY_PROJECTS[0].development} />

               {/* Complete project images */}
               <article
                  className="final-project-gallery--mobile"
                  data-aos="fade-up"
                  data-aos-easing="ease-out-quart"
                  data-aos-once="false"
                  data-aos-anchor-placement="top-center"
               >
                  <h3>Mobile</h3>
                  <hr />
                  <div className="mobile-gallery">
                     <img
                        src={movieFinalMobile1}
                        alt="Butter DB Final Live Site"
                        height="350"
                        loading="lazy"
                     />
                     <img
                        src={movieFinalMobile2}
                        alt="Butter DB Final Live Site"
                        height="350"
                        loading="lazy"
                     />
                     <img
                        src={movieFinalMobile3}
                        alt="Butter DB Final Live Site"
                        height="350"
                        loading="lazy"
                     />
                     <img
                        src={movieFinalMobile4}
                        alt="Butter DB Final Live Site"
                        height="350"
                        loading="lazy"
                     />
                     <img
                        src={movieFinalMobile5}
                        alt="Butter DB Final Live Site"
                        height="350"
                        loading="lazy"
                     />
                  </div>
               </article>

               <article className="final-project-gallery--desktop">
                  <h3>Desktop</h3>
                  <hr />
                  <div className="desktop-gallery">
                     <img
                        src={movieFinalDesktop1}
                        alt="Butter DB Final Live Site"
                        width="150"
                        loading="lazy"
                        data-aos="fade-up"
                        data-aos-easing="ease-out-quart"
                        data-aos-once="false"
                        data-aos-anchor-placement="center-bottom"
                     />
                     <img
                        src={movieFinalDesktop2}
                        alt="Butter DB Final Live Site"
                        width="150"
                        loading="lazy"
                        data-aos="fade-up"
                        data-aos-easing="ease-out-quart"
                        data-aos-once="false"
                        data-aos-anchor-placement="center-bottom"
                     />
                     <img
                        src={movieFinalDesktop3}
                        alt="Butter DB Final Live Site"
                        width="150"
                        loading="lazy"
                        data-aos="fade-up"
                        data-aos-easing="ease-out-quart"
                        data-aos-once="false"
                        data-aos-anchor-placement="center-bottom"
                     />
                     <img
                        src={movieFinalDesktop4}
                        alt="Butter DB Final Live Site"
                        width="150"
                        loading="lazy"
                        data-aos="fade-up"
                        data-aos-easing="ease-out-quart"
                        data-aos-once="false"
                        data-aos-anchor-placement="top-bottom"
                     />
                  </div>
               </article>

               {/* Component for Challenges */}
               <SPChallenges challenge={MY_PROJECTS[0].challenge} />

               {/* Fetch API code snippet */}
               <article className="code-snippet">
                  <h4 className="code-snippet__excerpt">
                     Here is how I fetch the popular movies from the Rest API
                  </h4>
                  <iframe
                     height="335"
                     scrolling="no"
                     title="React Fetch Movie Example"
                     src="https://codepen.io/casillavincent/embed/eYBLjNW?height=335&theme-id=dark&default-tab=js"
                     frameborder="no"
                     loading="lazy"
                     allowtransparency="true"
                     allowfullscreen="true"
                     className="code-snippet__code"
                  >
                     See the Pen{" "}
                     <a href="https://codepen.io/casillavincent/pen/eYBLjNW">
                        React Fetch Movie Example
                     </a>{" "}
                     by Vincent Casilla (
                     <a href="https://codepen.io/casillavincent">@casillavincent</a>) on{" "}
                     <a href="https://codepen.io">CodePen</a>.
                  </iframe>
               </article>

               {/* Add to Likes local storage Snippet */}
               <article className="code-snippet">
                  <h4 className="code-snippet__excerpt">
                     This application utilizes the local storage to save favourite movies
                  </h4>
                  <iframe
                     height="302"
                     scrolling="no"
                     title="Adding likes to Local Storage"
                     src="https://codepen.io/casillavincent/embed/GRNXBmV?height=302&theme-id=dark&default-tab=js"
                     frameborder="no"
                     loading="lazy"
                     allowtransparency="true"
                     allowfullscreen="true"
                     className="code-snippet__code"
                  >
                     See the Pen{" "}
                     <a href="https://codepen.io/casillavincent/pen/GRNXBmV">
                        Adding likes to Local Storage
                     </a>{" "}
                     by Vincent Casilla (
                     <a href="https://codepen.io/casillavincent">@casillavincent</a>) on{" "}
                     <a href="https://codepen.io">CodePen</a>.
                  </iframe>
               </article>
            </SRLWrapper>

            {/* Component for CTA */}
            <SPCta
               home="/"
               nextProject="/the-rolling-pin-project"
               livesite={MY_PROJECTS[0].liveSite}
               github={MY_PROJECTS[0].github}
            />
         </SimpleReactLightbox>
      </section>
   );
};

export default SingleMovieApp;

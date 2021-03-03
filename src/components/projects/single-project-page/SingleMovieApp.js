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

import movieCodeSnippet from "../../../assets/movie-app-final/movie-app-code-snippet.png";

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
         showThumbnailsButton: true,
         size: "40px",
      },
   };

   return (
      <section className="single-project-info">
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
            />

            {/* Component for Design Summary */}
            <SPDesign text={MY_PROJECTS[0].design} />
            <div className="design-gallery">
               <SRLWrapper options={options}>
                  <img src={movieMockup1} alt="Popular Page" width="150" />
                  <img src={movieMockup2} alt="Favourites Page" width="150" />
                  <img src={movieMockup3} alt="Single Page" width="150" />
               </SRLWrapper>
            </div>
            {/* Component for colors used */}
            <SPColors
               col1={MY_PROJECTS[0].colors[0]}
               col2={MY_PROJECTS[0].colors[1]}
               col3={MY_PROJECTS[0].colors[2]}
            />
            {/* Component for Development Summary */}
            <SPDevelopment text={MY_PROJECTS[0].development} />
            <article className="final-project-gallery--mobile">
               <h3>Mobile</h3>
               <hr />
               <SRLWrapper options={options}>
                  <img src={movieFinalMobile1} alt="Butter DB Final Live Site" height="350" />
                  <img src={movieFinalMobile2} alt="Butter DB Final Live Site" height="350" />
                  <img src={movieFinalMobile3} alt="Butter DB Final Live Site" height="350" />
                  <img src={movieFinalMobile4} alt="Butter DB Final Live Site" height="350" />
                  <img src={movieFinalMobile5} alt="Butter DB Final Live Site" height="350" />
               </SRLWrapper>
            </article>
            <article className="final-project-gallery--desktop">
               <h3>Desktop</h3>
               <hr />
               <SRLWrapper options={options}>
                  <img src={movieFinalDesktop1} alt="Butter DB Final Live Site" width="150" />
                  <img src={movieFinalDesktop2} alt="Butter DB Final Live Site" width="150" />
                  <img src={movieFinalDesktop3} alt="Butter DB Final Live Site" width="150" />
                  <img src={movieFinalDesktop4} alt="Butter DB Final Live Site" width="150" />
               </SRLWrapper>
            </article>
            {/* Component for Challenges */}
            <SPChallenges challenge={MY_PROJECTS[0].challenge} />

            <article className="code-snippet">
               <h4 className="code-snippet__excerpt">Heres what it looks like</h4>
               <SRLWrapper options={options}>
                  <img
                     src={movieCodeSnippet}
                     alt="Async function for fetching data from a rest api"
                  />
               </SRLWrapper>
            </article>

            {/* Component for CTA */}
            <SPCta
               home="/"
               nextProject="/the-rolling-pin"
               livesite={MY_PROJECTS[0].liveSite}
               github={MY_PROJECTS[0].github}
            />
         </SimpleReactLightbox>
      </section>
   );
};

export default SingleMovieApp;

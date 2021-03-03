import React from "react";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import { useEffect } from "react";

// Components
import SPOverview from "../single-page-components/SPOverview";
// import SPDesign from "../single-page-components/SPDesign";
// import SPDevelopment from "../single-page-components/SPDevelopment";
import SPTitle from "../single-page-components/SPTitle";
// import SPColors from "../single-page-components/SPColors";
// import SPChallenges from "../single-page-components/SPChallenges";
import SPCta from "../single-page-components/SPCta";

// Project Info
import { MY_PROJECTS } from "../../../globals/project-info";

// Photos
import mobileBanner from "../../../assets/banners/portfolio-mobile.jpg";
import desktopBanner from "../../../assets/banners/portfolio-desktop.jpg";
import SPComingSoon from "../single-page-components/SPComingSoon";

const SingleMovieApp = () => {
   useEffect(() => {
      window.scrollTo(0, 0);
   }, []);

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
               nextProject="/discover-japan"
               livesite={MY_PROJECTS[3].liveSite}
               github={MY_PROJECTS[3].github}
            />
         </SimpleReactLightbox>
      </section>
   );
};

export default SingleMovieApp;

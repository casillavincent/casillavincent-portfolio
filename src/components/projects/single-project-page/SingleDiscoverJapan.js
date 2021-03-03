import React from "react";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import ReactCompareImage from "react-compare-image";
import { useEffect } from "react";

// Components
import SPOverview from "../single-page-components/SPOverview";
import SPDesign from "../single-page-components/SPDesign";
import SPDevelopment from "../single-page-components/SPDevelopment";
import SPTitle from "../single-page-components/SPTitle";
import SPColors from "../single-page-components/SPColors";
import SPCta from "../single-page-components/SPCta";

// Project Info
import { MY_PROJECTS } from "../../../globals/project-info";

// Photos
import japanBannerAi from "../../../assets/discover-japan/japan-design2.png";
import japanBanner from "../../../assets/discover-japan/japan-design1.png";
import oldMobileGif from "../../../assets/discover-japan/old-japan-mobile.gif";
import newMobileGif from "../../../assets/discover-japan/new-japan-mobile.gif";

import oldDesktopHome from "../../../assets/discover-japan/old-discover-japan.jpg";
import newDesktopHome from "../../../assets/discover-japan/new-discover-japan.jpg";

// Final Photos
import finalMobile1 from "../../../assets/discover-japan/final-design/japan-final-mobile-1.jpg";
import finalMobile2 from "../../../assets/discover-japan/final-design/japan-final-mobile-2.jpg";
import finalMobile3 from "../../../assets/discover-japan/final-design/japan-final-mobile-3.jpg";
import finalMobile4 from "../../../assets/discover-japan/final-design/japan-final-mobile-4.jpg";

import finalDesktop1 from "../../../assets/discover-japan/final-design/japan-final-desktop-1.jpg";
import finalDesktop2 from "../../../assets/discover-japan/final-design/japan-final-desktop-2.jpg";
import finalDesktop3 from "../../../assets/discover-japan/final-design/japan-final-desktop-3.jpg";
import finalDesktop5 from "../../../assets/discover-japan/final-design/japan-final-desktop-5.jpg";

// Banner
import mobileBanner from "../../../assets/banners/japan-mobile.jpg";
import desktopBanner from "../../../assets/banners/japan-desktop.jpg";

// COde Snippet
import Bem1 from "../../../assets/discover-japan/bem-code-snippet-1.png";
import Bem2 from "../../../assets/discover-japan/bem-code-snippet-2.png";

const SingleMovieApp = () => {
   useEffect(() => {
      window.scrollTo(0, 0);
   }, []);

   // Options for Gallery component
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
            <SPTitle title={MY_PROJECTS[2].title} tagline={MY_PROJECTS[2].tagline} />
            {/* Component for outputting the overview */}
            <SPOverview
               scope={MY_PROJECTS[2].scope}
               devTeam={MY_PROJECTS[2].developmentTeam}
               role={MY_PROJECTS[2].role}
               tools={MY_PROJECTS[2].tools}
               githubLink={MY_PROJECTS[2].github}
               livesiteLink={MY_PROJECTS[2].liveSite}
               mobileBanner={mobileBanner}
               desktopBanner={desktopBanner}
            />
            {/* Component for Design Summary */}
            <SPDesign text={MY_PROJECTS[2].design} />
            <div className="design-gallery">
               <SRLWrapper options={options}>
                  <img
                     src={japanBanner}
                     alt="Final png file for site banner"
                     style={{ width: "70%", maxWidth: "650px" }}
                  />
                  <img src={japanBannerAi} alt="Site banner design with Illustrator" />
               </SRLWrapper>
            </div>
            {/* Component for colors used */}
            <SPColors
               col1={MY_PROJECTS[2].colors[0]}
               col2={MY_PROJECTS[2].colors[1]}
               col3={MY_PROJECTS[2].colors[2]}
            />
            {/* Compare mobile designs */}
            <article className="discover-japan-compare--mobile">
               {/* Old Design */}
               <div className="old-mobile">
                  <img src={oldMobileGif} alt="Old Discover Japan Mobile" />
                  <h4>Old Design (HTML/CSS)</h4>
               </div>

               {/* New Design */}
               <div className="new-mobile">
                  <img src={newMobileGif} alt="New Discover Japan Mobile" />
                  <h4>Refactored Design (React)</h4>
               </div>
            </article>
            {/* Compare desktop designs */}
            <article className="discover-japan-compare--desktop">
               <div className="old-desktop">
                  <img src={oldDesktopHome} alt="Old Discover Japan Desktop" width="50" />
                  <h4>Old Design (HTML/CSS)</h4>
               </div>
               <div className="new-desktop">
                  <img src={newDesktopHome} alt="New Discover Japan Desktop" width="50" />
                  <h4>New Design (React)</h4>
               </div>
            </article>
            {/* Compare Desktop Widget */}
            <article className="discover-japan-compare--desktop-slider">
               <ReactCompareImage
                  leftImage={oldDesktopHome}
                  leftImageAlt="Old desktop design"
                  rightImage={newDesktopHome}
                  rightImageAlt="New desktop design"
                  handleSize="0"
                  sliderLineColor="#DA0D05"
                  hover="true"
               />
               ;
            </article>

            {/* Component for Development Summary */}
            <SPDevelopment text={MY_PROJECTS[2].development} />

            {/* Gallery */}
            <article className="final-project-gallery--mobile">
               <h3>Mobile</h3>
               <hr />
               <SRLWrapper options={options}>
                  <img src={finalMobile1} alt="Discover Japan Final Live Site" />
                  <img src={finalMobile2} alt="Discover Japan Final Live Site" />
                  <img src={finalMobile3} alt="Discover Japan Final Live Site" />
                  <img src={finalMobile4} alt="Discover Japan Final Live Site" />
               </SRLWrapper>
            </article>
            <article className="final-project-gallery--desktop">
               <h3>Desktop</h3>
               <hr />
               <SRLWrapper options={options}>
                  <img src={finalDesktop1} alt="Discover Japan Final Live Site" />
                  <img src={finalDesktop2} alt="Discover Japan Final Live Site" />
                  <img src={finalDesktop3} alt="Discover Japan Final Live Site" />
                  <img src={finalDesktop5} alt="Discover Japan Final Live Site" />
               </SRLWrapper>
            </article>

            <article className="bem-code-snippet">
               <div className="bem-code-snippet__text">
                  <h4>Why I chose BEM as a methodology?</h4>
                  <p>
                     For those who aren't familiar with BEM, it is an abbreviation for{" "}
                     <span className="bem-bold">Block, Element and Modifier</span>. It's a CSS
                     methodology that allows stylesheets to have a standardized structure that
                     provides scope and reduce style conflicts when working with CSS
                  </p>
                  <p>
                     {" "}
                     I decided to use this methodology for this project because I wanted to get
                     comfortable with using a different architecture for my stylesheets. I think
                     getting familiar with a different methodology comes in handy when I eventually
                     tackle bigger projects where scalability is crucial.
                  </p>
               </div>

               <div className="bem-code-snippet__imgs">
                  <SRLWrapper options={options}>
                     <img src={Bem2} alt="BEM in HTML" />
                     <img src={Bem1} alt="BEM in Sass" />
                  </SRLWrapper>
               </div>
            </article>

            {/* Component for CTA */}
            <SPCta
               home="/"
               nextProject="/butter-db"
               livesite={MY_PROJECTS[2].liveSite}
               github={MY_PROJECTS[2].github}
            />
         </SimpleReactLightbox>
      </section>
   );
};

export default SingleMovieApp;

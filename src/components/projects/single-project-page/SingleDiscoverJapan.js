import React from "react";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import ReactCompareImage from "react-compare-image";
import { useEffect } from "react";
import { Helmet } from "react-helmet";

// Components
import SPOverview from "../single-page-components/SPOverview";
import SPDesign from "../single-page-components/SPDesign";
import SPDevelopment from "../single-page-components/SPDevelopment";
import SPTitle from "../single-page-components/SPTitle";
import SPColors from "../single-page-components/SPColors";
import SPCta from "../single-page-components/SPCta";
import SPTypography from "../single-page-components/SPTypography";

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

// AOS
import AOS from "aos";

const SingleMovieApp = () => {
   useEffect(() => {
      window.scrollTo(0, 0);
   }, []);

   // AOS Plugin
   AOS.init();

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
         <Helmet>
            <title>Vincent Casilla - Discover Japan</title>
            <meta
               name="description"
               content="A mock, travel brochure for Japan. This is my first project using HTML and CSS."
            />
         </Helmet>
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
               duration="2 Weeks"
            />
            {/* Component for Design Summary */}
            <SPDesign text={MY_PROJECTS[2].design} />
            <SRLWrapper options={options}>
               <div className="design-gallery">
                  <img
                     src={japanBanner}
                     alt="Final png file for site banner"
                     loading="lazy"
                     style={{ width: "70%", maxWidth: "650px" }}
                     data-aos="fade-up"
                     data-aos-easing="ease-out-quart"
                     data-aos-once="false"
                  />
                  <img
                     src={japanBannerAi}
                     alt="Site banner design with Illustrator"
                     loading="lazy"
                     data-aos="fade-up"
                     data-aos-easing="ease-out-quart"
                     data-aos-once="false"
                  />
               </div>
               {/* Component for colors used */}
               <SPColors
                  col1={MY_PROJECTS[2].colors[0]}
                  col2={MY_PROJECTS[2].colors[1]}
                  col3={MY_PROJECTS[2].colors[2]}
               />

               {/* Component for typography */}
               <SPTypography
                  f1="Bebas Neue, cursive"
                  f2="Montserrat, sans-serif"
                  fam1="Bebas Neue, cursive"
                  fam2="Montserrat, sans-serif"
               />

               {/* Compare mobile designs */}
               <article className="discover-japan-compare--mobile">
                  {/* Old Design */}
                  <div className="old-mobile">
                     <img src={oldMobileGif} alt="Old Discover Japan Mobile" loading="lazy" />
                     <h4>Old Design (HTML/CSS)</h4>
                  </div>

                  {/* New Design */}
                  <div className="new-mobile">
                     <img src={newMobileGif} alt="New Discover Japan Mobile" loading="lazy" />
                     <h4>New Design (React)</h4>
                  </div>
               </article>
               {/* Compare desktop designs */}
               <article className="discover-japan-compare--desktop">
                  <div className="old-desktop">
                     <img
                        src={oldDesktopHome}
                        alt="Old Discover Japan Desktop"
                        width="50"
                        loading="lazy"
                     />
                     <h4>Old Design (HTML/CSS)</h4>
                  </div>
                  <div className="new-desktop">
                     <img
                        src={newDesktopHome}
                        alt="New Discover Japan Desktop"
                        width="50"
                        loading="lazy"
                     />
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
               <article
                  className="final-project-gallery--mobile"
                  data-aos="fade-up"
                  data-aos-easing="ease-out-quart"
                  data-aos-once="false"
               >
                  <h3>Mobile</h3>
                  <hr />
                  <div className="mobile-gallery">
                     <img src={finalMobile1} alt="Discover Japan Final Live Site" loading="lazy" />
                     <img src={finalMobile2} alt="Discover Japan Final Live Site" loading="lazy" />
                     <img src={finalMobile3} alt="Discover Japan Final Live Site" loading="lazy" />
                     <img src={finalMobile4} alt="Discover Japan Final Live Site" loading="lazy" />
                  </div>
               </article>
               <article className="final-project-gallery--desktop">
                  <h3>Desktop</h3>
                  <hr />
                  <div className="desktop-gallery">
                     <img
                        src={finalDesktop1}
                        alt="Discover Japan Final Live Site"
                        loading="lazy"
                        data-aos="fade-up"
                        data-aos-easing="ease-out-quart"
                        data-aos-once="false"
                     />
                     <img
                        src={finalDesktop2}
                        alt="Discover Japan Final Live Site"
                        loading="lazy"
                        data-aos="fade-up"
                        data-aos-easing="ease-out-quart"
                        data-aos-once="false"
                     />
                     <img
                        src={finalDesktop3}
                        alt="Discover Japan Final Live Site"
                        loading="lazy"
                        data-aos="fade-up"
                        data-aos-easing="ease-out-quart"
                        data-aos-once="false"
                     />
                     <img
                        src={finalDesktop5}
                        alt="Discover Japan Final Live Site"
                        loading="lazy"
                        data-aos="fade-up"
                        data-aos-easing="ease-out-quart"
                        data-aos-once="false"
                        data-aos-anchor-placement="center-bottom"
                     />
                  </div>
               </article>

               <article className="bem-code-snippet">
                  <div className="bem-code-snippet__text">
                     <h4>Why I chose BEM as a methodology?</h4>
                     <p>
                        If you aren't familiar with BEM, it means;
                        <span className="bem-bold"> Block, Element and Modifier</span>. It is simply
                        one of many CSS methodology that allows stylesheets to have a standardized
                        structure that provides scope and reduce style conflicts when working with
                        CSS
                     </p>
                     <p>
                        I decided to use this methodology for this project because I wanted to
                        experiment with methods to organize my stylesheets and CSS properties.
                        Employing BEM and SMACSS methodologies has greatly improved the efficiency
                        of reading my code when working on larger and more complicated projects. I
                        think getting comfortable with exploring different methodologies will come
                        in handy when tackling projects where scalability is crucial.
                     </p>
                  </div>

                  <div className="bem-code-snippet__code">
                     <iframe
                        height="265"
                        scrolling="no"
                        title="Discover Japan React"
                        src="https://codepen.io/casillavincent/embed/RwoYBON?height=265&theme-id=dark&default-tab=js"
                        frameborder="no"
                        loading="lazy"
                        allowtransparency="true"
                     >
                        See the Pen{" "}
                        <a href="https://codepen.io/casillavincent/pen/RwoYBON">
                           Discover Japan React
                        </a>{" "}
                        by Vincent Casilla (
                        <a href="https://codepen.io/casillavincent">@casillavincent</a>) on{" "}
                        <a href="https://codepen.io">CodePen</a>.
                     </iframe>
                     <iframe
                        height="265"
                        scrolling="no"
                        title="yLVxqWp"
                        src="https://codepen.io/casillavincent/embed/yLVxqWp?height=265&theme-id=dark&default-tab=css"
                        frameborder="no"
                        loading="lazy"
                        allowtransparency="true"
                     >
                        See the Pen{" "}
                        <a href="https://codepen.io/casillavincent/pen/yLVxqWp">yLVxqWp</a> by
                        Vincent Casilla (
                        <a href="https://codepen.io/casillavincent">@casillavincent</a>) on{" "}
                        <a href="https://codepen.io">CodePen</a>.
                     </iframe>
                  </div>
               </article>
            </SRLWrapper>

            {/* Component for CTA */}
            <SPCta
               home="/"
               nextProject="/personal-portfolio"
               livesite={MY_PROJECTS[2].liveSite}
               github={MY_PROJECTS[2].github}
            />
         </SimpleReactLightbox>
      </section>
   );
};

export default SingleMovieApp;

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
import SPComingSoon from "../single-page-components/SPComingSoon";

// Project Info
import { MY_PROJECTS } from "../../../globals/project-info";

// Photos
import mobileBanner from "../../../assets/banners/rollingpin-mobile.jpg";
import desktopBanner from "../../../assets/banners/rollingpin-desktop.jpg";

// Archetype
import archetypes1 from "../../../assets/capstone-imgs/archetypes1.jpg";
import archetypes2 from "../../../assets/capstone-imgs/archetypes2.jpg";

// Content Plan
import contentPlan from "../../../assets/capstone-imgs/content-plan.jpg";
import infoArchitecture from "../../../assets/capstone-imgs/info-architecture.jpg";
import MOU from "../../../assets/capstone-imgs/memo-of-understanding.jpg";
import Journey from "../../../assets/capstone-imgs/journey.jpg";

// Wireframes
import wireframe1 from "../../../assets/capstone-imgs/wireframes1.jpg";
import wireframe2 from "../../../assets/capstone-imgs/wireframes2.jpg";
import wireframe3 from "../../../assets/capstone-imgs/wireframes3.jpg";
import wireframe4 from "../../../assets/capstone-imgs/wireframes4.jpg";

// AOS
import AOS from "aos";

const SingleMovieApp = () => {
   useEffect(() => {
      window.scrollTo(0, 0);
   }, []);

   // AOS Plugin
   AOS.init();

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
            <SPTitle title={MY_PROJECTS[1].title} tagline={MY_PROJECTS[1].tagline} />

            {/* Component for outputting the overview */}
            <SPOverview
               scope={MY_PROJECTS[1].scope}
               devTeam={MY_PROJECTS[1].developmentTeam}
               role={MY_PROJECTS[1].role}
               tools={MY_PROJECTS[1].tools}
               mobileBanner={mobileBanner}
               desktopBanner={desktopBanner}
            />

            <article className="single-project-info__process">
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

               {/* Discovery Meeting */}
               <div className="process-item discovery-meeting">
                  <h4> Discovery Meeting </h4>
                  <p className="excerpt">
                     The purpose of this meeting was to discuss with a fictional client regarding
                     the website's primary goals, potential competition, products and services
                     offered, ideal audience, website inspirations and brainstorm ideas pertaining
                     to the website’s functionalities and features.{" "}
                  </p>
                  <div className="process-item__gallery">
                     <SRLWrapper options={options}>
                        <img src={MOU} alt="Memo Of Understanding" />
                        <img src={archetypes1} alt="Ideal User - Angela Johnson" />
                        <img src={archetypes2} alt="Ideal User - Jessica Campbell" />
                        <img src={Journey} alt="Journey Map" />
                     </SRLWrapper>
                  </div>
               </div>

               <div className="timeline"></div>

               {/* Content Plan */}
               <div className="process-item information-architecture">
                  <h4> Information Architecture </h4>
                  <div className="process-item__gallery">
                     <SRLWrapper options={options}>
                        <img src={contentPlan} alt="Content Plan" />
                     </SRLWrapper>
                  </div>
               </div>

               <div className="timeline"></div>

               {/* Content Plan */}
               <div className="process-item wireframes">
                  <h4> Wireframing </h4>
                  <div className="process-item__gallery">
                     <SRLWrapper options={options}>
                        <img src={wireframe1} alt="The Rolling Pin Wireframes" />
                        <img src={wireframe2} alt="The Rolling Pin Wireframes" />
                        <img src={wireframe3} alt="The Rolling Pin Wireframes" />
                        <img src={wireframe4} alt="The Rolling Pin Wireframes" />
                     </SRLWrapper>
                  </div>
               </div>

               <div className="timeline"></div>

               {/* Development Plan */}
               <div className="process-item development-plan">
                  <h4> Development Plan </h4>
                  <SRLWrapper options={options}>
                     <img src={infoArchitecture} alt="Information Architecture" />
                  </SRLWrapper>
               </div>

               <div className="timeline"></div>

               {/* Functional Website */}
               <div className="process-item discovery-meeting">
                  <h4> Functional Website </h4>
                  <p className="excerpt">
                     After creating a detailed development plan, our team moved on to writing the
                     HTML and PHP markup of our website. At this point we have a functional website
                     needing styling and content.
                  </p>
               </div>
            </article>

            {/* Component for Design Summary */}
            {/* <SPDesign text={MY_PROJECTS[0].design} /> */}

            {/* <div className="design-gallery">
               <SRLWrapper options={options}></SRLWrapper>
            </div> */}

            {/* Component for colors used */}
            {/* <SPColors
               col1={MY_PROJECTS[0].colors[0]}
               col2={MY_PROJECTS[0].colors[1]}
               col3={MY_PROJECTS[0].colors[2]}
            /> */}

            {/* Final Project Gallery */}
            {/* <article className="final-project-gallery--mobile">
               <h3>Mobile</h3>
               <hr />
               <SRLWrapper options={options}></SRLWrapper>
            </article>
            <article className="final-project-gallery--desktop">
               <h3>Desktop</h3>
               <hr />
               <SRLWrapper options={options}></SRLWrapper>
            </article> */}

            <SPComingSoon />

            {/* Component for CTA */}
            <SPCta home="/" nextProject="/discover-japan" livesite={"none"} github={"none"} />
         </SimpleReactLightbox>
      </section>
   );
};

export default SingleMovieApp;

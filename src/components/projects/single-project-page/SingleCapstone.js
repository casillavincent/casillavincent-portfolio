import React from "react";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import { useEffect } from "react";
import { Helmet } from "react-helmet";

// Components
import SPOverview from "../single-page-components/SPOverview";
import SPDesign from "../single-page-components/SPDesign";
import SPTitle from "../single-page-components/SPTitle";
import SPColors from "../single-page-components/SPColors";
import SPCta from "../single-page-components/SPCta";
import SPTypography from "../single-page-components/SPTypography";
import SPDevelopment from "../single-page-components/SPDevelopment";

// Project Info
import { MY_PROJECTS } from "../../../globals/project-info";

// Photos
import mobileBanner from "../../../assets/banners/rollingpin-mobile.jpg";
import desktopBanner from "../../../assets/banners/rollingpin-desktop.jpg";

// Archetype
import archetypes1 from "../../../assets/capstone-imgs/archetypes1.jpg";
import archetypes2 from "../../../assets/capstone-imgs/archetypes2.jpg";

// MOU
import MOU1 from "../../../assets/capstone-imgs/mou/mou-1.png";
import MOU2 from "../../../assets/capstone-imgs/mou/mou-2.png";
import MOU3 from "../../../assets/capstone-imgs/mou/mou-3.png";
import MOU4 from "../../../assets/capstone-imgs/mou/mou-4.png";
import MOU5 from "../../../assets/capstone-imgs/mou/mou-5.png";
import MOU6 from "../../../assets/capstone-imgs/mou/mou-6.png";

// Content Plan
import infoArchitecture from "../../../assets/capstone-imgs/info-architecture.jpg";
import Journey from "../../../assets/capstone-imgs/journey.png";
import Features from "../../../assets/capstone-imgs/features.png";

// Wireframes
import wireframe1 from "../../../assets/capstone-imgs/wireframes1.jpg";
import wireframe2 from "../../../assets/capstone-imgs/wireframes2.jpg";
import wireframe3 from "../../../assets/capstone-imgs/wireframes3.jpg";
import wireframe4 from "../../../assets/capstone-imgs/wireframes4.jpg";

// Inspo
import Inspo1 from "../../../assets/capstone-imgs/inspo/capstone-inspo-1.jpg";
import Inspo2 from "../../../assets/capstone-imgs/inspo/capstone-inspo-2.jpg";
import Inspo3 from "../../../assets/capstone-imgs/inspo/capstone-inspo-3.jpg";
import Inspo4 from "../../../assets/capstone-imgs/inspo/capstone-inspo-4.jpg";

// IA
import IA3 from "../../../assets/capstone-imgs/ia/ia-3.png";
import IA4 from "../../../assets/capstone-imgs/ia/ia-4.png";
import IA1 from "../../../assets/capstone-imgs/ia/ia-final.png";

// HFMU
import HFMU1 from "../../../assets/capstone-imgs/high-fidelity-mockups/mockup-overview.png";
import HFMU2 from "../../../assets/capstone-imgs/high-fidelity-mockups/careers.jpg";
import HFMU3 from "../../../assets/capstone-imgs/high-fidelity-mockups/catering.jpg";
import HFMU4 from "../../../assets/capstone-imgs/high-fidelity-mockups/shop.jpg";
import HFMU5 from "../../../assets/capstone-imgs/high-fidelity-mockups/home.jpg";

// Logo
import Logo1 from "../../../assets/capstone-imgs/rp-logo-dark.png";
import Logo2 from "../../../assets/capstone-imgs/rp-logo-light.png";

// Trello
import Trello from "../../../assets/capstone-imgs/trello.png";

// Code Snippet
import CodeS1 from "../../../assets/capstone-imgs/rp-code-snippet/code-snippet1.png";
import CodeS2 from "../../../assets/capstone-imgs/rp-code-snippet/code-snippet2.png";

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
         <Helmet>
            <title>Vincent Casilla - The Rolling Pin</title>
            <meta
               name="description"
               content="An eCommerce website for a local bakery. This project is built using WordPress and WooCommerce."
            />
         </Helmet>
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
               livesiteLink="https://vcasilla.com/the-rolling-pin/"
               duration={"5 Weeks"}
            />
            <SRLWrapper options={options}>
               <article className="single-project-info__process">
                  <div className="project-item planning">
                     <h3>Planning</h3>
                     <hr />

                     <p>
                        Our team started off by gathering various inspirations from different
                        bakeries across Vancouver. We then discussed what design components and
                        features stood out to us. The objective of our first meeting was to generate
                        questions that reflect the goals of the client that will later serve as a
                        guide for the design and development of the site.
                     </p>
                  </div>

                  {/* Inspirations */}
                  <div className="process-item inspirations">
                     <h4>Inspirations</h4>
                     <hr />
                     <div className="inspirations__imgs">
                        <img
                           src={Inspo1}
                           alt="Bakery website inspiration"
                           width="150"
                           loading="lazy"
                        />
                        <img
                           src={Inspo2}
                           alt="Bakery website inspiration"
                           width="150"
                           loading="lazy"
                        />
                        <img
                           src={Inspo3}
                           alt="Bakery website inspiration"
                           width="150"
                           loading="lazy"
                        />
                        <img
                           src={Inspo4}
                           alt="Bakery website inspiration"
                           width="150"
                           loading="lazy"
                        />
                     </div>
                  </div>

                  {/* Guiding Questions */}
                  <div className="process-item guiding-questions--client">
                     <h4>Questions for the client ... </h4>
                     <ul>
                        <li>Who are your current audience and who is your target audience?</li>
                        <li>What are the top 3 goals you wish to achieve with a website?</li>
                        <li>
                           What tasks do you want your clients to be able to complete on your
                           website?
                        </li>
                     </ul>
                  </div>

                  <div className="process-item guiding-questions--team">
                     <h4>Questions for our dev team ... </h4>
                     <ul>
                        <li>What is the main purpose or message of the site?</li>
                        <li>How will the users use the site?</li>
                        <li>What information do they need to find?</li>
                        <li>What tasks do they need to complete?</li>
                     </ul>
                  </div>

                  <div className="timeline"></div>

                  <h3 className="process-heading">Discovery Meeting</h3>

                  {/* Discovery Meeting */}
                  <div className="process-item discovery-meeting">
                     <h4> Memo of Understanding </h4>
                     <p className="excerpt">
                        The purpose of this meeting was to discuss with a fictional client regarding
                        the website's primary goals, potential competition, products, services
                        offered, ideal audience, website inspirations, and brainstorm ideas about
                        the website’s functionalities and features. Our team then created a Memo of
                        Understanding summarizing everything we discussed in our meeting{" "}
                        <span>(Click the images below to see the document)</span>
                     </p>

                     <div className="memo-of-understanding__gallery">
                        <img
                           src={MOU1}
                           alt="Memo of Understanding Document"
                           width="250"
                           loading="lazy"
                        />
                        <img
                           src={MOU2}
                           alt="Memo of Understanding Document"
                           width="250"
                           loading="lazy"
                        />
                        <img
                           src={MOU3}
                           alt="Memo of Understanding Document"
                           width="250"
                           loading="lazy"
                        />
                        <img
                           src={MOU4}
                           alt="Memo of Understanding Document"
                           width="250"
                           loading="lazy"
                        />
                        <img
                           src={MOU5}
                           alt="Memo of Understanding Document"
                           width="250"
                           loading="lazy"
                        />
                        <img
                           src={MOU6}
                           alt="Memo of Understanding Document"
                           width="250"
                           loading="lazy"
                        />
                     </div>
                  </div>
                  {/* end of discovery meeting */}

                  <div className="audience">
                     <h4>Journey Map</h4>
                     <p className="journey-map-excerpt">
                        To help our team develop a solid content plan and features, we had to first
                        understand the target audience and their primary goals. Creating a journey
                        map allowed our team to identify where the user's pain points exist and
                        develop solutions to improve user experience. This was super helpful for our
                        team because this guided us on what facets of the website are crucial.
                        <span>(Click the image below to read the user's journey)</span>
                     </p>
                     <img src={Journey} alt="Journey Map" loading="lazy" />

                     <div className="personas">
                        <h4>User Personas</h4>
                        <p>
                           Creating user personas allowed our development team to separate our own
                           biases and create a development plan that caters to the user's needs,
                           frustrations and goals.
                        </p>
                        <img
                           src={archetypes1}
                           alt="Angela Johnson User Persona"
                           width="250"
                           loading="lazy"
                        />
                        <img
                           src={archetypes2}
                           alt="Jessica Campbell User Persona"
                           width="250"
                           loading="lazy"
                        />
                     </div>
                  </div>

                  <div className="timeline"></div>

                  {/* Content Plan */}
                  <h3 className="process-heading">Development Plan</h3>
                  <div className="content-plan">
                     <h4>Site Map</h4>
                     <img
                        src={infoArchitecture}
                        alt="Site Map"
                        width="250"
                        loading="lazy"
                        className="site-map-01"
                     />

                     <h4>Feature Prioritization</h4>
                     <img src={Features} alt="Site Map" width="250" loading="lazy" />

                     <h4>Information Architecture</h4>
                     <p>
                        Through multiple meetings over Zoom, we began compiling all the essential
                        information into one content plan. This stage was exhaustive because we
                        needed a concrete map for what files would contain each piece of
                        information. Since we were using WordPress as our CMS, we had to examine
                        WordPress’s template hierarchy to determine the best approach in creating a
                        clean markup.
                     </p>

                     <div className="ia-gallery-container">
                        <img
                           src={IA4}
                           alt="Information Architecture"
                           width="250"
                           loading="lazy"
                           className="ia-gallery-item"
                        />
                        <img
                           src={IA3}
                           alt="Information Architecture"
                           width="250"
                           loading="lazy"
                           className="ia-gallery-item"
                        />
                     </div>
                     <img
                        src={IA1}
                        alt="Information Architecture with PHP"
                        width="150"
                        loading="lazy"
                        className="ia-template-heirarchy site-map-02"
                     />
                  </div>

                  <div className="timeline"></div>

                  {/* Wireframes */}
                  <div className="process-item wireframes">
                     <h3 className="process-heading">Wireframes</h3>
                     <img src={wireframe1} alt="The Rolling Pin Wireframes" loading="lazy" />
                     <img src={wireframe2} alt="The Rolling Pin Wireframes" loading="lazy" />
                     <img src={wireframe3} alt="The Rolling Pin Wireframes" loading="lazy" />
                     <img src={wireframe4} alt="The Rolling Pin Wireframes" loading="lazy" />
                  </div>

                  <div className="timeline"></div>

                  {/* High Fidelity Mockups */}
                  <div className="hfmu-container">
                     <h3 className="process-heading">High Fidelity Mockups</h3>

                     {/* Photo with Adobe XD */}
                     <div className="hfmu-overview">
                        <img src={HFMU1} alt="Adobe XD All Mockup" width="750" loading="lazy" />
                     </div>

                     {/* Single Page Items */}
                     <div className="hfmu-single-pages">
                        <img
                           src={HFMU5}
                           alt="Home Mockup Page"
                           width="750"
                           height="350"
                           loading="lazy"
                        />
                        <img
                           src={HFMU3}
                           alt="Catering Mockup Page"
                           width="750"
                           height="350"
                           loading="lazy"
                        />
                        <img
                           src={HFMU4}
                           alt="Shop Mockup Page"
                           width="750"
                           height="350"
                           loading="lazy"
                        />
                        <img
                           src={HFMU2}
                           alt="Careers Mockup Page"
                           width="750"
                           height="350"
                           loading="lazy"
                        />
                     </div>
                  </div>

                  <div className="timeline"></div>
               </article>

               {/* Component for Design Summary */}
               <SPDesign text={MY_PROJECTS[1].design} />

               {/* Colors */}
               <SPColors
                  col1={MY_PROJECTS[1].colors[0]}
                  col2={MY_PROJECTS[1].colors[1]}
                  col3={MY_PROJECTS[1].colors[2]}
               />

               {/* Typography */}
               <SPTypography
                  f1="Oswald, sans-serif"
                  f2="Montserrat, sans-serif"
                  fam1="Oswald, sans-serif"
                  fam2="Montserrat, sans-serif"
               />

               {/* Logo */}
               <div className="rolling-pin-logo">
                  <h3>Logo</h3>
                  <hr />
                  <div className="logo-items">
                     <img src={Logo1} alt="The Rolling Pin Logo Dark" width="250" loading="lazy" />
                     <img src={Logo2} alt="The Rolling Pin Logo Light" width="250" loading="lazy" />
                  </div>
               </div>

               <div className="timeline"></div>

               <SPDevelopment text={MY_PROJECTS[1].development} />
               <div className="project-management">
                  <h4>Project Management</h4>
                  <img
                     src={Trello}
                     alt="Trello; Project Management Split"
                     width="800"
                     loading="lazy"
                  />
               </div>

               <div className="timeline"></div>

               {/* Code Snippet */}
               <div className="rp-code-snippets">
                  <h3 className="process-heading"> Code Snippets</h3>
                  <div className="code-snippet code-snippet-1">
                     <p>
                        Function for displaying the Featured Items ACF{" "}
                        <span>(Click the image to see the code)</span>
                     </p>
                     <img src={CodeS1} alt="ACF Code Snippet" width="500" loading="lazy" />
                  </div>

                  <div className="code-snippet code-snippet-2">
                     <p>
                        Conditional rendering of additional class for Header{" "}
                        <span>(Click the image to see the code)</span>
                     </p>
                     <img
                        src={CodeS2}
                        alt="Conditional Rendering for class attribute in Header"
                        width="500"
                        loading="lazy"
                     />
                  </div>
               </div>

               {/* Component for CTA */}
               <SPCta
                  home="/"
                  nextProject="/personal-portfolio-project"
                  livesite="https://vcasilla.com/the-rolling-pin/"
                  github={"none"}
               />
            </SRLWrapper>
         </SimpleReactLightbox>
      </section>
   );
};

export default SingleMovieApp;

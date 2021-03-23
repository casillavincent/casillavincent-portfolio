import React from "react";
import { useEffect } from "react";
import Splash from "./Splash";
import ProjectsSummary from "./projects/ProjectsSummary";
import ProjectMovieApp from "./projects/ProjectMovieApp";
import ProjectPortfolio from "./projects/ProjectPortfolio";
import ProjectCapstone from "./projects/ProjectCapstone";
import ProjectJapan from "./projects/ProjectJapan";
import { Helmet } from "react-helmet";

const Homepage = () => {
   useEffect(() => {
      window.scrollTo(0, 0);
   }, []);
   return (
      <React.Fragment>
         {/* <----- React Helmet -----> */}
         <Helmet>
            <title>Vincent Casilla - Portfolio</title>
            <meta
               name="description"
               content="A personal portfolio that highlights my work as a front-end web developer."
            />
         </Helmet>

         <Splash />
         <ProjectsSummary />
         <div
            className="home-page-line-break"
            data-aos="fade-down"
            data-aos-easing="ease-in-quad"
            data-aos-once="true"
            data-aos-anchor-placement="top-center"
         ></div>
         <ProjectMovieApp />
         <ProjectCapstone />
         <ProjectPortfolio />
         <ProjectJapan />
      </React.Fragment>
   );
};

export default Homepage;

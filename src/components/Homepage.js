import React from "react";
import Splash from "./Splash";
import ProjectsSummary from "./projects/ProjectsSummary";
import ProjectMovieApp from "./projects/ProjectMovieApp";
import ProjectPortfolio from "./projects/ProjectPortfolio";
import ProjectCapstone from "./projects/ProjectCapstone";
import ProjectJapan from "./projects/ProjectJapan";

const Homepage = () => {
   return (
      <React.Fragment>
         <Splash />
         <ProjectsSummary />
         <ProjectMovieApp />
         <ProjectCapstone />
         <ProjectPortfolio />
         <ProjectJapan />
      </React.Fragment>
   );
};

export default Homepage;

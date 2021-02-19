import React from "react";
import Splash from "./Splash";
import ProjectsSummary from "./projects/ProjectsSummary";

const Homepage = () => {
   return (
      <React.Fragment>
         <Splash />
         <ProjectsSummary />
      </React.Fragment>
   );
};

export default Homepage;

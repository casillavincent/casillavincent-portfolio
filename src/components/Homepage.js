import React from "react";
import { useEffect } from "react";
import Splash from "./Splash";
import ProjectsSummary from "./projects/ProjectsSummary";
import { Helmet } from "react-helmet";
import Work from "./projects-thumn/Work";

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
            <script src="https://cdn.lordicon.com//libs/frhvbuzj/lord-icon-2.0.2.js"></script>
         </Helmet>

         <Splash />
         <ProjectsSummary />

         <Work />
      </React.Fragment>
   );
};

export default Homepage;

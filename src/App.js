// React
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Layouts
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";

// Pages
import Splash from "./components/Splash";
import Social from "./components/widgets/Social";
import ProjectsSummary from "./components/ProjectsSummary";
import MovieApp from "./components/projects/MovieApp";
import DiscoverJapan from "./components/projects/DiscoverJapan";
import Capstone from "./components/projects/Capstone";
import Portfolio from "./components/projects/Portfolio";
function App() {
   return (
      <Router>
         <React.Fragment>
            <Header />
            <div className="wrapper">
               <main className="main main-page">
                  <Splash />
                  <ProjectsSummary />
                  <MovieApp />
                  <DiscoverJapan />
                  <Capstone />
                  <Portfolio />
               </main>
            </div>
            <Social />
            <Footer />
         </React.Fragment>
      </Router>
   );
}

export default App;

// React
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect, useState } from "react";

// Google Analytics
import ReactGA from "react-ga";

// Layouts
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";

// Widgets
import Social from "./components/widgets/Social";

// Pages
import Homepage from "./components/Homepage";
import About from "./components/About";

// More Info Pages for Projects
import SingleMovieApp from "./components/projects/single-project-page/SingleMovieApp";
import SingleDiscoverJapan from "./components/projects/single-project-page/SingleDiscoverJapan";
import SingleCapstone from "./components/projects/single-project-page/SingleCapstone";
import SinglePortfolio from "./components/projects/single-project-page/SinglePortfolio";

function App() {
   const [isDesktop, setIsDesktop] = useState(true);

   // Google Analytics
   useEffect(() => {
      ReactGA.initialize("UA-187291517-1");
      // Report views in each page
      ReactGA.pageview(window.location.pathname + window.location.search);
   }, []); // end of GA useEffect

   // Custom Cursor
   useEffect(() => {
      // Check if the user is on window or mobile
      toggleCursor();
      const cursor = document.querySelector(".cursor");
      document.addEventListener("mousemove", (e) => {
         cursor.setAttribute(
            "style",
            "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;"
         );
      });
      document.addEventListener("click", () => {
         cursor.classList.add("expand");
         setTimeout(() => {
            cursor.classList.remove("expand");
         }, 500);
      });
   }, []);

   const toggleCursor = () => {
      if (window.innerWidth >= 800) {
         setIsDesktop(true);
      } else {
         setIsDesktop(false);
      }
   };

   return (
      <Router>
         <React.Fragment>
            <Header />
            {/* Custom Cursor */}
            {isDesktop === true && <div className="cursor"></div>}

            <div className="wrapper">
               <main className="main main-page">
                  <Switch>
                     <Route path="/" exact component={Homepage} />
                     <Route path="/about" component={About} />
                     <Route path="/butter-db-project" component={SingleMovieApp} />
                     <Route path="/discover-japan-project" component={SingleDiscoverJapan} />
                     <Route path="/the-rolling-pin-project" component={SingleCapstone} />
                     <Route path="/personal-portfolio" component={SinglePortfolio} />
                     <Route path="*" component={Homepage} />
                  </Switch>
               </main>
            </div>
            <Social />
            <Footer />
         </React.Fragment>
      </Router>
   );
}

export default App;

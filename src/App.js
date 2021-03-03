// React
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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
   return (
      <Router>
         <React.Fragment>
            <Header />
            <div className="wrapper">
               <main className="main main-page">
                  <Switch>
                     <Route path="/" exact component={Homepage} />
                     <Route path="/about" component={About} />
                     <Route path="/butter-db" component={SingleMovieApp} />
                     <Route path="/discover-japan" component={SingleDiscoverJapan} />
                     <Route path="/the-rolling-pin" component={SingleCapstone} />
                     <Route path="/personal-portfolio" component={SinglePortfolio} />
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

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

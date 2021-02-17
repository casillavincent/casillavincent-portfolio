// React
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Layouts
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";

// Pages
import Splash from "./components/Splash";
import Projects from "./components/Projects";
function App() {
   return (
      <Router>
         <React.Fragment>
            <Header />
            <div className="wrapper">
               <main className="main main-page">
                  <Splash />
                  <Projects />
               </main>
            </div>
            <Footer />
         </React.Fragment>
      </Router>
   );
}

export default App;

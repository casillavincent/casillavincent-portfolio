// React
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./components/Homepage";

// Layouts
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";

// Pages

function App() {
   return (
      <Router>
         <React.Fragment>
            <Header />
            <div className="wrapper">
               <Homepage />
            </div>
            <Footer />
         </React.Fragment>
      </Router>
   );
}

export default App;

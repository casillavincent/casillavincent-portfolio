import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "aos/dist/aos.css";

// Stylesheet
import "./scss/styles.scss";
// scss
import "swiper/swiper.scss";

ReactDOM.render(
   <React.StrictMode>
      <App />
   </React.StrictMode>,
   document.getElementById("root")
);

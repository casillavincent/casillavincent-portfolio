import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// AOS Plugin
import AOS from "aos";
import "aos/dist/aos.css";

// Stylesheet
import "./scss/styles.scss";

// scss
import "swiper/swiper.scss";

AOS.init({ easing: "ease-in-out-quad", duration: "800", once: "true" });

ReactDOM.render(
   <React.StrictMode>
      <App />
   </React.StrictMode>,
   document.getElementById("root")
);

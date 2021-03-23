import React from "react";
import Portrait from "../assets/portrait.jpg";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

// Plugins
import AOS from "aos";

const About = () => {
   const [isDesktop, setIsDesktop] = useState(null);

   useEffect(() => {
      window.scrollTo(0, 0);
      if (window.innerWidth >= 800) {
         setIsDesktop(true);
      } else {
         setIsDesktop(false);
      }
   }, []);

   // AOS Plugin initiate
   AOS.init();
   // <--- Keen Slider --->
   const [pause, setPause] = React.useState(false);
   const timer = React.useRef();
   const [sliderRef, slider] = useKeenSlider({
      loop: true,
      duration: 1250,
      dragStart: () => {
         setPause(true);
      },
      dragEnd: () => {
         setPause(false);
      },
   });

   React.useEffect(() => {
      sliderRef.current.addEventListener("mouseover", () => {
         setPause(true);
      });
      sliderRef.current.addEventListener("mouseout", () => {
         setPause(false);
      });
   }, [sliderRef]);

   React.useEffect(() => {
      timer.current = setInterval(() => {
         if (!pause && slider) {
            slider.next();
         }
      }, 2000);
      return () => {
         clearInterval(timer.current);
      };
   }, [pause, slider]);
   // <--- End of Keen Slider --->
   return (
      <article className="section about">
         <Helmet>
            <title>Vincent Casilla - About Me</title>
            <meta
               name="description"
               content="A short summary of who I am and my goals as a UX/UI designer and Front-end web developer."
            />
         </Helmet>
         {/* My Summary */}
         <section className="about-item my-summary">
            {/* Text */}
            <div className="my-summary__text">
               <h1
                  className="name"
                  data-aos="fade-right"
                  data-aos-easing="ease-out-cubic"
                  data-aos-once="true"
                  data-aos-duration="750"
               >
                  Who am I?
               </h1>
               <h2
                  className="headline"
                  data-aos="fade-right"
                  data-aos-easing="ease-out-cubic"
                  data-aos-once="true"
                  data-aos-duration="750"
                  data-aos-delay="250"
               >
                  Web designer and Front-end developer
               </h2>
               <hr
                  data-aos="fade-right"
                  data-aos-easing="ease-out-cubic"
                  data-aos-once="true"
                  data-aos-duration="750"
                  data-aos-delay="500"
               />
               <p
                  className="summary"
                  data-aos="fade-right"
                  data-aos-easing="ease-out-cubic"
                  data-aos-once="true"
                  data-aos-duration="750"
                  data-aos-delay="750"
               >
                  There was a time I thought writing code was strictly for those who are wildly
                  intelligent. After jumping into web development, I am beginning to recognize that
                  the only prerequisite to successfully learning how to code is to be inquisitive.
                  As someone who is esteemed to challenges and solving problems, web development has
                  indeed found a way to engage my creativity and structured way of thinking.
               </p>
               <p
                  className="summary"
                  data-aos="fade-right"
                  data-aos-easing="ease-out-cubic"
                  data-aos-once="true"
                  data-aos-duration="750"
                  data-aos-delay="850"
               >
                  As a front-end developer, I aim to keep getting inspired by new technologies and
                  continue developing my ideas with like-minded individuals to create robust web
                  applications tailored to clients’ goals.
               </p>
               <p
                  className="summary"
                  data-aos="fade-right"
                  data-aos-easing="ease-out-cubic"
                  data-aos-once="true"
                  data-aos-duration="750"
                  data-aos-delay="950"
                  data-aos-anchor-placement="bottom-bottom"
               >
                  My life isn’t just writing code. When I’m not sitting in front of my laptop,
                  you’ll most likely find me first in line at a new boba place, watching my stocks
                  crumble, boxing or create mixtapes in my bedroom.
               </p>
            </div>

            {/* Portrait */}
            <div className="my-summary__portrait">
               <img
                  src={Portrait}
                  alt="My Portrait"
                  data-aos={isDesktop === true ? "fade-left" : "zoom-out-down"}
                  data-aos-easing="ease-out-cubic"
                  data-aos-once="true"
                  data-aos-duration="750"
               />
            </div>
         </section>

         {/* Technical Skills */}
         <section className="about-item artillery">
            {/* Development Stack */}
            <div className="col-development-stack">
               <h3>Development Stack</h3>
               <hr />
               <ul className="development-stack" title="Scroll Me">
                  <li className="development-stack__item">React.JS</li>
                  <li className="development-stack__item">HTML5</li>
                  <li className="development-stack__item">CSS3</li>
                  <li className="development-stack__item">Sass</li>
                  <li className="development-stack__item">Javascript</li>
                  <li className="development-stack__item">jQuery</li>
                  <li className="development-stack__item">PHP</li>
                  <li className="development-stack__item">Wordpress</li>
                  <li className="development-stack__item">WooCommerce</li>
                  <li className="development-stack__item">Adobe XD</li>
                  <li className="development-stack__item">Photshop</li>
                  <li className="development-stack__item">Github</li>
                  <li className="development-stack__item">MySQL</li>
               </ul>
            </div>

            {/* Technical Skills */}
            <div className="col-technical-skills">
               <h3>Technical Skills</h3>
               <hr />
               <ul className="technical-skills">
                  <li className="technical-skills__item">
                     Fully responsive web design (mobile first)
                  </li>
                  <li className="technical-skills__item">
                     Wireframing and high-fidelity prototyping
                  </li>
                  <li className="technical-skills__item">
                     Search Engine Optimization (SEO) and Analytics
                  </li>
                  <li className="technical-skills__item">Single page web applications</li>
                  <li className="technical-skills__item">Front-end frameworks</li>
                  <li className="technical-skills__item">CMS Development</li>
               </ul>
            </div>
         </section>

         {/* My Inspirations */}
         <section className="about-item inspirations">
            <h4>Here's some things that inspire me ... </h4>

            <ul ref={sliderRef} className="inspirations-list keen-slider">
               <li
                  className="inspirations-list__item keen-slider__slide number-slide1"
                  title="Scroll Me"
               >
                  Music
               </li>
               <li
                  className="inspirations-list__item keen-slider__slide number-slide1"
                  title="Scroll Me"
               >
                  Technology
               </li>
               <li
                  className="inspirations-list__item keen-slider__slide number-slide1"
                  title="Scroll Me"
               >
                  Comic Book Films
               </li>
               <li
                  className="inspirations-list__item keen-slider__slide number-slide1"
                  title="Scroll Me"
               >
                  Fitness/Health
               </li>
               <li
                  className="inspirations-list__item keen-slider__slide number-slide1"
                  title="Scroll Me"
               >
                  MMA
               </li>
               <li
                  className="inspirations-list__item keen-slider__slide number-slide1"
                  title="Scroll Me"
               >
                  Stocks
               </li>
            </ul>
         </section>
      </article>
   );
};

export default About;

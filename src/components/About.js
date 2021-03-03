import React from "react";
import Portrait from "../assets/portrait-placeholder.jpg";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useEffect } from "react";

// Plugins
import AOS from "aos";

const About = () => {
   useEffect(() => {
      window.scrollTo(0, 0);
   }, []);

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
      <section className="section about">
         {/* My Summary */}
         <article className="about-item my-summary">
            {/* Text */}
            <div className="my-summary__text">
               <h1
                  className="name"
                  data-aos="fade-right"
                  data-aos-easing="ease-out-cubic"
                  data-aos-once="true"
                  data-aos-duration="750"
               >
                  Vincent Casilla
               </h1>
               <h2
                  className="headline"
                  data-aos="fade-right"
                  data-aos-easing="ease-out-cubic"
                  data-aos-once="true"
                  data-aos-duration="750"
                  data-aos-delay="250"
               >
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
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
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos totam
                  consequatur dolores commodi labore quos modi eveniet provident facilis unde,
                  cumque impedit! Autem nihil assumenda officiis nam laborum ab distinctio.
               </p>
            </div>

            {/* Portrait */}
            <div className="my-summary__portrait">
               <img
                  src={Portrait}
                  alt="My Portrait"
                  data-aos="fade-left"
                  data-aos-easing="ease-out-cubic"
                  data-aos-once="true"
                  data-aos-duration="750"
               />
            </div>
         </article>

         {/* Technical Skills */}
         <article
            className="about-item artillery"
            data-aos="fade-down"
            data-aos-easing="ease-out"
            data-aos-once="true"
            data-aos-duration="750"
            data-aos-anchor-placement="center-bottom"
         >
            {/* Development Stack */}
            <div className="col-development-stack">
               <h3>Development Stack</h3>
               <ul className="development-stack" title="Scroll Me">
                  <li className="development-stack__item">React.JS</li>
                  <li className="development-stack__item">HTML5</li>
                  <li className="development-stack__item">CSS3</li>
                  <li className="development-stack__item">Sass</li>
                  <li className="development-stack__item">Javascript</li>
                  <li className="development-stack__item">jQuery</li>
                  <li className="development-stack__item">PHP</li>
                  <li className="development-stack__item">Wordpress</li>
                  <li className="development-stack__item">Adobe XD</li>
                  <li className="development-stack__item">Photshop</li>
                  <li className="development-stack__item">Github</li>
               </ul>
            </div>

            {/* Technical Skills */}
            <div className="col-technical-skills">
               <h3>Technical Skills</h3>
               <ul className="technical-skills">
                  <li className="technical-skills__item">Fully responsive web design</li>
                  <li className="technical-skills__item">
                     Wireframing and high-fidelity prototyping
                  </li>
                  <li className="technical-skills__item">
                     Search Engine Optimization (SEO) and Analytics
                  </li>
                  <li className="technical-skills__item">Develop single page web applications</li>
               </ul>
            </div>
         </article>

         {/* My Inspirations */}
         <article
            className="about-item inspirations"
            data-aos="fade-down"
            data-aos-easing="ease-out-cubic"
            data-aos-once="true"
            data-aos-duration="750"
         >
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
                  Superhero Movies
               </li>
               <li
                  className="inspirations-list__item keen-slider__slide number-slide1"
                  title="Scroll Me"
               >
                  Fitness
               </li>
               <li
                  className="inspirations-list__item keen-slider__slide number-slide1"
                  title="Scroll Me"
               >
                  MMA
               </li>
            </ul>
         </article>
      </section>
   );
};

export default About;

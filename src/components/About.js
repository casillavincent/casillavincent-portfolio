import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { Helmet } from "react-helmet";

// Plugins
import AOS from "aos";

// Images
import MY_PORTAIT from "../assets/portrait.png";

const About = () => {
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
         <section className="about-item my-summary" data-aos="fade-up" data-aos-duration="800">
            {/* Portrait */}
            <div className="my-summary__portrait">
               <img src={MY_PORTAIT} alt="Self Portrait" />
            </div>
            {/* Text */}
            <div className="my-summary__text">
               <h1 className="name">About Me</h1>
               <p className="headline">A creative problem solver.</p>
               <hr />
               <p className="summary">
                  Jumping into web development has taught me that the only prerequisite to learning
                  how to write code is to be inquisitive. As someone who is adapted to challenges
                  and solving problems, this industry has managed to engage my creativity and
                  structured thinking.
               </p>
               <p className="summary">
                  I aim to build user interfaces that create a seamless online experience by
                  leveraging new front-end technologies with design fundamentals.
               </p>
               <p className="summary">
                  When I’m not sitting in front of my laptop coding away, you’ll most likely find me
                  first in line at a new boba place, watching my stocks crumble, boxing and
                  exploring music.
               </p>
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
                  <li className="development-stack__item">JavaScript ES6+</li>
                  <li className="development-stack__item">TypeScript</li>
                  <li className="development-stack__item">jQuery</li>
                  <li className="development-stack__item">PHP</li>
                  <li className="development-stack__item">Wordpress</li>
                  <li className="development-stack__item">Shopify</li>
                  <li className="development-stack__item">Liquid</li>
                  <li className="development-stack__item">WooCommerce</li>
                  <li className="development-stack__item">Adobe XD</li>
                  <li className="development-stack__item">Github</li>
                  <li className="development-stack__item">MySQL</li>
               </ul>
            </div>

            {/* Technical Skills */}
            <div className="col-technical-skills">
               <h3>Technical Skills</h3>
               <hr />
               <ul className="technical-skills">
                  <li className="technical-skills__item">Responsive web design (mobile first)</li>
                  <li className="technical-skills__item">
                     Wireframing and high-fidelity prototyping
                  </li>
                  <li className="technical-skills__item">
                     Search Engine Optimization (SEO) and Accessibility
                  </li>
                  <li className="technical-skills__item">Single page web applications</li>
                  <li className="technical-skills__item">CMS Development(WordPress & Shopify)</li>
                  <li className="technical-skills__item">UX/UI Design</li>
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
                  Cats
               </li>
            </ul>
         </section>
      </article>
   );
};

export default About;

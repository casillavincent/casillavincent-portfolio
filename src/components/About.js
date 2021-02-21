import React from "react";
import Portrait from "../assets/portrait-placeholder.jpg";

// Plugins
import Swiper from "react-id-swiper";
import AOS from "aos";

const About = () => {
   AOS.init();
   const params = {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      pagination: {
         el: ".swiper-pagination",
         clickable: true,
      },
      navigation: {
         nextEl: ".swiper-button-next",
         prevEl: ".swiper-button-prev",
      },
      autoplay: {
         delay: 1000,
         disableOnInteraction: false,
      },
   };
   return (
      <section className="section about">
         {/* My Summary */}
         <article
            className="about-item my-summary"
            data-aos="zoom-out-down"
            data-aos-easing="ease-out-quart"
            data-aos-once="true"
         >
            {/* Text */}
            <div className="my-summary__text">
               <h1 className="name">Vincent Casilla</h1>
               <h2 className="headline">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
               </h2>
               <hr />
               <p className="summary">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos totam
                  consequatur dolores commodi labore quos modi eveniet provident facilis unde,
                  cumque impedit! Autem nihil assumenda officiis nam laborum ab distinctio.
               </p>
            </div>

            {/* Portrait */}
            <div className="my-summary__portrait">
               <img src={Portrait} alt="My Portrait" />
            </div>
         </article>

         {/* Technical Skills */}
         <article className="about-item artillery">
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
         <article className="about-item inspirations">
            <h4
               data-aos="fade-right"
               data-aos-anchor-placement="bottom-bottom"
               data-aos-easing="ease-out"
               data-aos-once="true"
               data-aos-duration="500"
            >
               Here's some things that inspire me ...{" "}
            </h4>

            <ul
               className="inspirations-list"
               data-aos="fade-left"
               data-aos-anchor-placement="bottom-bottom"
               data-aos-easing="ease-out"
               data-aos-once="true"
               data-aos-duration="500"
            >
               <Swiper {...params}>
                  <li className="inspirations-list__item" title="Scroll Me">
                     Music
                  </li>
                  <li className="inspirations-list__item" title="Scroll Me">
                     Health
                  </li>
                  <li className="inspirations-list__item" title="Scroll Me">
                     {" "}
                     Travelling
                  </li>
                  <li className="inspirations-list__item" title="Scroll Me">
                     Video Games
                  </li>
                  <li className="inspirations-list__item" title="Scroll Me">
                     Superhero Films
                  </li>
                  <li className="inspirations-list__item" title="Scroll Me">
                     Stocks
                  </li>
                  <li className="inspirations-list__item" title="Scroll Me">
                     Desserts
                  </li>
                  <li className="inspirations-list__item" title="Scroll Me">
                     Photography
                  </li>
               </Swiper>
            </ul>
         </article>
      </section>
   );
};

export default About;

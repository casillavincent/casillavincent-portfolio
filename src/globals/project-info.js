export const MY_PROJECTS = [
   {
      title: "Butter.DB",
      tagline: "A dynamic movie database built with ReactJS ",
      scope:
         "Butter.DB is a small, full stack application that allows users to get information on movies based on what’s trending, popular, upcoming and new releases. This application fetches data from the TMDB Rest API that outputs and updates them realtime onto a  component making it completely dynamic. This is definitely one of the more challenging projects I have completed during my time at BCIT. However, building this application made me fall head over heels with React and Javascript.",
      developmentTeam: ["Vincent Casilla"],
      role: ["Full Stack Developer"],
      tools: ["React", "Javascript", "HTML5", "CSS3", "Sass", "Github", "Adobe XD", "Photoshop"],
      design:
         "I created high-fidelity mockups using Photoshop and Adobe XD over the course of our design tools course. Although it’s not identical to the final product, I wanted to keep aspects from my initial design once I started with development. I knew I wanted to have a sidebar, a fixed navigation at the bottom and maintain the general layout of the mockup. For the basic design, I wanted to use colors that are dark and easy on the eyes. Considering that the backbone of this project was to create a spin on IMDB and TMDB, I wanted to keep the general layout that are familiar and make them less crowded.",
      development:
         "Since this would be my first react application, I started building a static webpage using HTML and JSX. I wanted to ensure that the template and architecture was clear as I would be replacing the content with dynamic content. Off the bat, I knew I would be working with a mix between static pages and dynamic pages so I organized my components based on those categories.",
      github: "https://github.com/casillavincent/movie-app",
      liveSite: "https://vcasilla.com/butter-db/",
      colors: ["#748FDC", "#1A1E2B", "#2E3344"],
      challenge:
         "The challenging part about this application was fetching data from the TMDB Rest API. This concept was the first time dipping into a bit of backend development. Way before this project’s deadline, I decided to explore concepts of promises, callback functions, the call stack and asynchronous functions. These were by far the most complicated Javascript concepts I came across and began practicing them using setTimeout to mimic fetching data. I later took these concepts and took baby steps until I was able to create a function that would fetch the data asynchronously.",
   },

   {
      title: "The Rolling Pin",
      tagline: "A WordPress eCommerce site for a fictional bakery.",
      scope:
         "The Rolling Pin is a fictional eCommerce project that encompasses everything we have learned in frontend web development. This is a collaborative project consisting of 4 team members including myself where we were involved in team meetings, project management, branding & UX/UI design, content architecture, development planning and user experience research. This project utilizes WordPress and WooCommerce.",
      developmentTeam: "Vincent Casilla, Seraphina White, Robyn Abe, Olivia Feilden",
      role: "Front-end Developer",
      tools: [
         "WordPress",
         "PHP",
         "MySQL",
         "HTML5",
         "CSS3/Sass",
         "Javascript",
         "Gulp",
         "Adobe XD",
         "Github",
      ],
      github: "",
      liveSite: "",
   },
   {
      title: "Discover Japan",
      tagline: "A fictional travel brochure for Japan.",
      scope:
         "Discover Japan is a fictional travel brochure for a Japan. This was an introductory project to web development fundamentals and  HTML5/CSS3.",
      developmentTeam: ["Vincent Casilla"],
      role: "UI/UX Designer, Front-end Developer",
      tools: ["HTML5", "CSS3", "Sass", "React", "Javascript", "AOS JS Library", "Github"],
      design:
         "When designing this project, I wanted to use the colors associated with the Japanese flag - white and red. My initial live site, I used a lot of rounded corners but later I found that they looked very tacky and outdated. For the React version, I decided to stick with a layout that is more linear and sharp. As a person who watches a lot of anime, I find the Japanese calligraphy very unique and I wanted to incorporate them in my design. I translated the headings into Kanji and placed them underneath and it really makes the webpage more modern.",
      development:
         "When I decided to rebuild this website using React, I knew I wanted to experiment with different methodologies and architecture. For my React version, I decided to use BEM (Block Element Modifier) CSS methodology and SMACSS for the architecture. I thought this side project would be a good start getting comfortable with building an initial architecture and standardized format that would make it scalable.",
      liveSite: "https://vcasilla.com/discover-japan/",
      github: "https://github.com/casillavincent/japan-brochure-react",
      colors: ["#DA0D05", "#FFFFFF", "#FE573E"],
   },

   {
      title: "Personal Portfolio",
      tagline: "A React app that highlights my technical projects.",
      scope:
         "The site you’re seeing … I made it! My portfolio project is ultimately my opportunity to spotlight my technical abilities and present the process of building websites. In the end, I decided to build my portfolio using React (my favourite language) because I knew my portfolio would be a piece I would need to update regularly. The ability to build and reuse components has made the development of my portfolio effortless.",
      developmentTeam: "Vincent Casilla",
      role: "UI/UX Designer, Front-end Developer",
      tools: ["React", "Javascript", "HTML5", "CSS3", "Github", "Adobe XD"],
      github: "https://github.com/casillavincent/casillavincent-portfolio",
      liveSite: "https://vcasilla.com/",
      colors: ["#EC2341", "#FFFFFF", "#0C0C0E"],
      design:
         "When I was coming up with the design of my portfolio, I knew I wanted to keep it extremely minimal. My aim was to showcase more of my abilities as a developer but still maintain a tasteful design. A way I accomplished this is making use of a lot of white space. The purpose of doing this is to present my information seamlessly and really consider the natural way users read content. I must admit, my initial wireframes were a bit ambitious but the general layout I established is exactly what I envisioned for the final product.",
      development:
         "When I began with development, I wanted to maintain a central idea of scalability and reusable components. I knew that all my projects included the same topic with different content. To get around making this easier for myself, I created child components for each topic that I eventually prop drill. Building each page was simply calling all the necessary components.",
   },
];

export const MY_PROJECTS = [
   {
      title: "Butter.DB",
      tagline: "Get updates on movies you want to see. ",
      scope:
         "Butter.DB is a small, single-page web application that allows users to get information on movies based on what’s trending, popular, upcoming, and new releases. This application fetches data from the TMDB Rest API that outputs and updates them in real-time onto a component making it completely dynamic. This is by far one of the more challenging projects I have completed during my time at BCIT. However, building this web application made me fall head over heels with React and Javascript.",
      developmentTeam: ["Vincent Casilla"],
      role: ["Front-end Developer"],
      tools: ["React", "Javascript", "HTML5", "CSS3", "Sass", "Github", "Adobe XD", "Photoshop"],
      design:
         "I created high-fidelity mockups using Photoshop and Adobe XD throughout our design tools course. Although it’s not identical to the final product, I wanted to keep parts of my initial layout once I started with the development phase. For the basic design, I wanted to use colors that are dark and easy on the eyes. Considering that the backbone of this project was to re-create IMDB and TMDB, I wanted to keep their layout that's familiar to users.",
      development:
         "Since this would be my first React application, I started building a static webpage using HTML and JSX. I wanted to ensure that the template and architecture were clear as I would be replacing the content with dynamic content. Off the bat, I knew I would be working with a mix between static pages and dynamic pages so I organized my components based on those groups.",
      github: "https://github.com/casillavincent/movie-app",
      liveSite: "https://vcasilla.com/butter-db/",
      colors: ["#748FDC", "#1A1E2B", "#2E3344"],
      challenge:
         "The challenging part about this application was fetching data from the TMDB Rest API. This concept was the first time dipping into a bit of back-end development. Way before this project’s deadline, I decided to explore concepts of promises, callback functions, the call stack, and asynchronous functions. These were the more complicated Javascript concepts I came across and I began practicing them using setTimeout to mimic fetching data. I later took these concepts and took baby steps until I was able to create a function that would fetch the data asynchronously.",
   },

   {
      title: "The Rolling Pin",
      tagline: "Artisanal bakery eCommerce made with WordPress & WooCommerce",
      scope:
         "The Rolling Pin is a fictional eCommerce project that encompasses everything I have learned in front-end web development. This is a collaborative project alongside 3 team members where we were involved in team meetings, project management, branding & UX/UI design, content architecture, development planning, and user experience research. This project utilizes WordPress and WooCommerce.",
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
      colors: ["#F8F8F8", "#2F242C", "#605052"],
      github: "",
      liveSite: "https://vcasilla.com/the-rolling-pin/",
      development:
         "Before we started coding and styling, our team went over our development setup. This included our Github repository, Gulp files, FTP, and WordPress development plugins. Since this was a collaborative project, communication would play a  critical role in preventing any conflicts. Our team utilized Discord and Zoom as our main line of communication and Trello as our project management. This allowed our team to know which files are being edited and pushed onto our Github repo.",
      design:
         "Our team decided to keep our layout, colors, and typography very minimal. Since the products are colorful on their own, we wanted a design that does not take away from each item. ",
   },
   {
      title: "Discover Japan",
      tagline: "A fictional travel brochure for Japan.",
      scope:
         "Discover Japan is a fictional travel brochure for Japan. This was an introductory project into web development fundamentals and HTML5/CSS3",
      developmentTeam: ["Vincent Casilla"],
      role: "Front-end Developer",
      tools: ["HTML5", "CSS3", "Sass", "React", "Javascript", "AOS JS Library", "Github"],
      design:
         "When designing this project, I wanted to use the colors that were associated with the Japanese flag - white and red. On my initial live site, I used a lot of rounded corners but later I found them to be very distracting. For the React version, I decided to stick with a layout that is more linear and sharp. As someone who watches anime, I find Japanese calligraphy very unique and I wanted to incorporate them in my design. I translated the headings into Katakana/Hiragana and placed them under each heading.",
      development:
         "When I decided to rebuild this website using React, I knew I wanted to experiment with different methodologies and architecture. For my React version, I decided to use BEM (Block Element Modifier) CSS methodology and SMACSS for the architecture. I thought this side project would be a good start in getting comfortable using a more standardized approach for scalability.",
      liveSite: "https://vcasilla.com/discover-japan/",
      github: "https://github.com/casillavincent/japan-brochure-react",
      colors: ["#DA0D05", "#FFFFFF", "#FE573E"],
   },

   {
      title: "Personal Portfolio",
      tagline: "A React app that highlights my technical projects.",
      scope:
         "My portfolio project is ultimately my opportunity to spotlight my technical abilities and present my process of building websites. In the end, I decided to build my portfolio using React because I knew my portfolio would be a piece I would need to update regularly. React's npm environment and the ability to reuse components have made this project more manageable.",
      developmentTeam: "Vincent Casilla",
      role: "UI/UX Designer, Front-end Developer",
      tools: ["React", "Javascript", "HTML5", "CSS3", "Github", "Adobe XD"],
      github: "https://github.com/casillavincent/casillavincent-portfolio",
      liveSite: "https://vcasilla.com/",
      colors: ["#EC2341", "#FFFFFF", "#0C0C0E"],
      design:
         "When I was coming up with the design of my portfolio, I knew I wanted to keep it extremely minimal. I aimed to showcase more of my abilities as a developer but still maintain a tasteful design. A way I accomplished this is by making use of a lot of white space. The purpose of doing this is to present my information seamlessly and consider the natural way users read the content. My initial wireframes were a bit ambitious. However, the layout I established was what I envisioned the final product would look like.",
      development:
         "When I began with development, I wanted to focus on scalability and reusable components. I knew that all my projects would include the same topic with different content. To make this easier for myself, I created child components for each section that I prop drill details from a large object containing each project's information. Building each page was simply calling all the child components.",
   },
];

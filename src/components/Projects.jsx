import { motion } from "framer-motion";
import Card from "./Card";

function Projects({ theme }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.5, duration: 1 } }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      <section id="projects">
        <h2>Projects</h2>
        <Card
          theme={theme}
          title={"NC News"}
          body={
            <div>
              <p>
                {" "}
                A full stack news application built over a period of 2 weeks.
                The intention here is to mimic the building of a real world
                backend service (such as reddit) which provides this information
                to the front end architecture.
              </p>
              <p>
                {" "}
                The back end of the app was build with PostgreSQL, Node.js and
                Javascript. The front end was build with React and CSS.
              </p>
            </div>
          }
          image={"./assets/logo.png"}
          alt={"nc news applications logo"}
          demoLink={"https://ncnewsapp.netlify.app/"}
          gitLink={"https://github.com/BGS89/nc-news-fe"}
        />
        <Card
          theme={theme}
          title={"Weather Today"}
          body={
            <div>
              <p>
                A weather app built with react and the
                https://www.weatherapi.com/ API. The user can search for a
                specific city or location and get the overall forecast for today
                as well as the hourly forecast.
              </p>
              <p>
                The project was built as an exercise in using external API's in
                order to display data to a front end end application.
              </p>
            </div>
          }
          image={"./assets/weather.png"}
          alt={"weather app front page"}
          demoLink={"https://bgsweather.netlify.app/"}
          gitLink={"https://github.com/BGS89/weather-today"}
        />
        <Card
          theme={theme}
          title={"POV Maze"}
          body={
            <div>
              <p>
                POVMAZE is a game built in just 7 days using React, Phaser, and
                Firebase. The project began as a 2D version of Pacman, but over
                the course of the week, the team expanded it into a
                fully-realized 3D maze runner with raycasting.
              </p>
              <p>
                The game is designed to be played from a first-person point of
                view, immersing the player in the game world.
              </p>
              <p>
                One of the key features of the game is the use of raycasting, a
                technique that simulates the behavior of light rays to create 3D
                graphics in real-time. This allows for realistic rendering of
                the maze and its surroundings, and creates a more immersive
                experience for the player.
              </p>
            </div>
          }
          image={"./assets/povmaze.png"}
          alt={"povmaze game logo"}
          demoLink={"https://povmaze.netlify.app/"}
          gitLink={"https://github.com/BGS89/povmaze"}
        />
      </section>
    </motion.div>
  );
}

export default Projects;

import React from "react";
import Heading from "./Heading";
import Card from "./Card";
import "../app/styles/Projects.css";
const data = [
  {
    id: 0,
    title: "Tic Tac Toe",
    desc: "A HTML, CSS and JavaScript based Tic Tac Toe game.",
    img: "/tic.png",
    tags: ["HTML", "CSS", "JavaScript"],
  },

  {
    id: 1,
    title: "Stop Watch",
    desc: "A HTML, CSS and JavaScript based Stop Watch.",
    img: "/stop.png",
    tags: ["HTML", "CSS", "JavaScript"],
  },

  {
    id: 2,
    title: "Static Resume",
    desc: "A HTML, CSS, Typescript based Static and Interactive Resume.",
    img: "/static.png",
    tags: ["HTML", "CSS", "Typescript"],
  },

  {
    id: 3,
    title: "Shareable Resume",
    desc: "A HTML, CSS and Typescript based responsive Resume",
    img: "/Shareable.png",
    tags: ["HTML", "CSS", "Typescript"],
  },

  {
    id: 4,
    title: "Portfolio",
    desc: "A Wordpress based portfolio with Custom CSS and JavaScript.",
    img: "/word.png",
    tags: ["Wordpress", "CSS", "JavaScript"],
  },
];

const Projects = () => {
  return (
    <div id="projects" className="projects-container">
      <Heading title="My Projects" />
      <div className="projects-grid projects-grid-xl projects-grid-md-2 projects-grid-lg-3 projects-center">
        {data.map((el) => (
          <Card
            key={el.id}
            title={el.title}
            desc={el.desc}
            image={el.img}
            tags={el.tags}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;

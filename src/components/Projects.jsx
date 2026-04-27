import React, { useState } from "react";
import Navbar from "./Navbar";
import "../App.css";

const projects = [
  {
    id: 1,
    name: "Project 1",
    category: "Product",
    date: "JAN 1st 2023",
    image: "../images/emss.png",
    link: "#",
  },
  {
    id: 2,
    name: "Project 2",
    category: "websites",
    date: "JAN 1st 2023",
    image: "../images/travel.png",
    link: "https://traveling-website-7ffb0.web.app/index.html",
  },
  {
    id: 3,
    name: "Project 3",
    category: "websites",
    date: "Jan 30th 2026",
    image: "../images/doctor7.png",
    link: "http://dev.kodextech.com:3029/admin/signin",
  },
  {
    id: 4,
    name: "Project 4",
    category: "websites",
    date: "Aug 25th 2023",
    image: "../images/psd6.jpeg",
    link: "https://kms-next.vercel.app/",
  },
  {
    id: 5,
    name: "Project 5",
    category: "websites",
    date: "DEC 1st 2025",
    image: "../images/SILUETAII.png",
    link: "http://dev.kodextech.com:3007/dashboard",
  },
  {
    id: 6,
    name: "Project 6",
    category: "websites",
    date: "JAN 1st 2023",
    image: "../images/psd5.jpeg",
    link: "https://islamic-web-react-2b32f.web.app/",
  },
  {
    id: 7,
    name: "Project 7",
    category: "design",
    date: "SEP 15th 2022",
    image: "../images/apperls.jpg",
    link: "https://two-core.vercel.app/",
  },
  {
    id: 8,
    name: "Project 8",
    category: "design",
    date: "SEP 15th 2022",
    image: "../images/psd3.png",
    link: "#",
  },
  {
    id: 9,
    name: "Project 9",
    category: "design",
    date: "NOV 13th 2022",
    image: "../images/psd1.png",
    link: "#",
  },
  {
    id: 10,
    name: "Project 10",
    category: "design",
    date: "DEC 20th 2022",
    image: "../images/psd2.png",
    link: "#",
  },
  {
    id: 11,
    name: "Project 11",
    category: "design",
    date: "July 30th 2022",
    image: "../images/dash11.jpeg",
    link: "#",
  },
  {
    id: 12,
    name: "Project 12",
    category: "design",
    date: "July 30th 2022",
    image: "../images/dash2.1.jpeg",
    link: "#",
  },
  {
    id: 13,
    name: "Project 13",
    category: "website",
    date: "Feb 30th 2026",
    image: "../images/resturant.jpg",
    link: "#",
  },
];

const filters = ["all", "websites", "design", "Product"];

function Projects() {
  const [active, setActive] = useState("all");

  const filtered =
    active === "all" ? projects : projects.filter((p) => p.category === active);

  return (
    <div className="BODY">
      <Navbar />
      <section className="projects-section">
        <div className="projects-header">
          <span className="projects-label">Portfolio</span>
          <h1 className="projects-title">PROJECTS</h1>
        </div>

        <div className="projects-filters">
          {filters.map((f) => (
            <button
              key={f}
              className={`filter-btn ${active === f ? "filter-btn--active" : ""}`}
              onClick={() => setActive(f)}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filtered.map((project) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="project-card"
            >
              <img
                src={project.image}
                alt={project.name}
                className="project-card__img"
              />
              <div className="project-card__overlay">
                <p className="project-card__name">{project.name}</p>
                <p className="project-card__cat">{project.category}</p>
                <p className="project-card__date">{project.date}</p>
                <div className="project-card__icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Projects;

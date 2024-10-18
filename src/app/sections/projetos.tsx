import Image from "next/image";
import { useState } from "react";
"use client";
import TCC from "../assets/projects/eestock.png";
import EM_BREVE from "../assets/projects/em-breve.png";
import ProjectCard, { IProject } from "../components/project-card";

export default function ProjetosSection() {
  const projectData: IProject[] = [
    {
      title: "E-ESTOCK",
      description:
        "Projeto criado durante o curso de análise e desenvolvimento de sistemas, utilizando ASP.NET com arquitetura MVC e Bootstrap.",
      imageSrc: TCC,
      repoLink: "https://github.com/kaykymatos/TCC",
    },

    {
      title: "EM BREVE",
      description:
        "Em breve",
      imageSrc: EM_BREVE,
      repoLink: null,
    },
    {
      title: "EM BREVE",
      description:
        "Em breve",
      imageSrc: EM_BREVE,
      repoLink: null,
    },
    {
      title: "EM BREVE",
      description:
        "Em breve",
      imageSrc: EM_BREVE,
      repoLink: null,
    },
  ];

  return (
    <section id="projects">
    <div className="text-center mb-3">
      <h1
        className="display-5 fw-bolder mb-0"
        style={{ color: "#BB86FC" }} // Título com cor de destaque
      >
        <span className="titulos d-inline">Projetos</span>
      </h1>
    </div>
    <div className="row justify-content-center project-imgs">
          {projectData.map((project, index) => (
            <ProjectCard
              key={index}
              description={project.description}
              imageSrc={project.imageSrc}
              repoLink={project.repoLink}
              title={project.title}
            />
          ))}
    </div>
  </section>
  );
}

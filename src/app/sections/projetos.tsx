"use client";

import TCC from "../assets/projects/eestock.png";
import EM_BREVE from "../assets/projects/em-breve.png";
import SimulInvest from "../assets/projects/SimulInvestLogo.png";
import ProjectCard, { IProject } from "../components/project-card";

export default function ProjetosSection() {
  const projectData: IProject[] = [
    {
      title: "E-ESTOCK",
      buttonText: "Código Fonte",
      description:
        "Projeto criado durante o curso de análise e desenvolvimento de sistemas, utilizando ASP.NET com arquitetura MVC e Bootstrap.",
      imageSrc: TCC,
      link: "https://github.com/kaykymatos/TCC",
      imagePosition:'left'
    },
    {
      title: "Simulinvest",
      buttonText: "Acesse",
      description:
        "O SimuleInvest é um simulador de investimentos em Angular que permite ao usuário calcular e visualizar facilmente a evolução de investimentos, inserindo parâmetros como valor inicial, aporte mensal, taxa de juros e duração. A ferramenta, com interface intuitiva, foi implantada na plataforma Render.",
      imageSrc: SimulInvest,
      link: "https://simuleinvest.onrender.com/",
      imagePosition:'right'
    },
    {
      title: "EM BREVE",
      buttonText: "Acesse",
      description: "Em breve",
      imageSrc: EM_BREVE,
      link: null,
      imagePosition:'left'
    },
    {
      title: "EM BREVE",
      buttonText: "Acesse",
      description: "Em breve",
      imageSrc: EM_BREVE,
      link: null,
      imagePosition:'right'
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

        {projectData.map((project, index) => (
          <ProjectCard
            key={index}
            description={project.description}
            imageSrc={project.imageSrc}
            buttonText={project.buttonText}
            link={project.link}
            title={project.title}
            imagePosition={project.imagePosition}
          />
        ))}
    </section>
  );
}

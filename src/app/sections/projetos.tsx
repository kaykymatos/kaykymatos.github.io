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
      description: "Em breve",
      imageSrc: EM_BREVE,
      repoLink: null,
    },
    {
      title: "EM BREVE",
      description: "Em breve",
      imageSrc: EM_BREVE,
      repoLink: null,
    },
    {
      title: "EM BREVE",
      description: "Em breve",
      imageSrc: EM_BREVE,
      repoLink: null,
    }
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

      <div className="row row-cols-1 row-cols-md-5 text-center justify-content-center mb-5">
              

              {projectData.map((project, index) => (
          <ProjectCard
            key={index}
            description={project.description}
            imageSrc={project.imageSrc}
            repoLink={project.repoLink}
            title={project.title}
          />
        ))}
                {/* <Image
                  width={130}
                  height={130}
                  src="https://img.icons8.com/ios-filled/130/690da1/c-sharp-logo.png"
                  alt="C#"
                />
                <p className="mt-1">C#</p>
              </div>
              <div className="col">
                <Image
                  width={130}
                  height={130}
                  src="https://img.icons8.com/color/130/bootstrap.png"
                  alt="Bootstrap"
                />
                <p className="mt-1">Bootstrap</p>
              </div>
              <div className="col">
                <Image
                  width={130}
                  height={130}
                  src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/130/external-angular-a-typescript-based-open-source-web-application-framework-logo-shadow-tal-revivo.png"
                  alt="Angular"
                />
                <p className="mt-1">Angular</p>
              </div>
              <div className="col">
                <Image
                  width={130}
                  height={130}
                  src="https://img.icons8.com/office/130/react.png"
                  alt="React"
                />
                <p className="mt-1">React</p>
              </div>
              <div className="col">
                <Image
                  width={130}
                  
                  height={130}
                  src="https://img.icons8.com/fluency/130/github.png
"
                  alt="GitHub"
                />
                <p className="mt-1">GitHub</p>
                */}
            </div>



{/* 


      <div className="row justify-content-center">
        {projectData.map((project, index) => (
          <ProjectCard
            key={index}
            description={project.description}
            imageSrc={project.imageSrc}
            repoLink={project.repoLink}
            title={project.title}
          />
        ))}
      </div> */}
    </section>
  );
}

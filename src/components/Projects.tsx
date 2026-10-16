import { ExternalLink } from "lucide-react";
import eestockImage from "../assets/projects/eestock.png";
import simulInvest from "../assets/projects/SimulInvestLogo.png";
import Image from "next/image";
import { Github } from "lucide-react";

const projects = [
  {
    title: "E-ESTOCK",
    description:
      "Projeto criado durante o curso de análise e desenvolvimento de sistemas, utilizando ASP.NET com arquitetura MVC e Bootstrap.",
    image: eestockImage,
    tech: ["ASPNET.CORE", "C#", "SQLServer"],
    demo: null,
    github: "https://github.com/kaykymatos/TCC",
  },
  {
    title: "Simulinvest",
    description:
      "O SimuleInvest é um simulador de investimentos em Angular que permite ao usuário calcular e visualizar facilmente a evolução de investimentos, inserindo parâmetros como valor inicial, aporte mensal, taxa de juros e duração. A ferramenta, com interface intuitiva, foi implantada na plataforma Render.",
    image: simulInvest,
    tech: ["Angular", "TypeScript"],
    demo: "https://simuleinvest.onrender.com/",
    github: null,
  },
];

export const Projects = () => {
  return (
    <section id="projetos" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Projetos
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white/80 shadow-sm transition-colors hover:border-blue-400 dark:border-gray-800 dark:bg-gray-900/50 dark:hover:border-purple-500"
            >
              <div className="relative aspect-video overflow-hidden bg-gray-100 dark:bg-gray-950">
                <Image
                  src={project.image}
                  alt={`${project.title} - imagem do projeto`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="dark:text-gray-300 text-gray-700 mb-5 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800 dark:bg-blue-500/15 dark:text-blue-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-2.5 font-semibold text-white transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2"
                    >
                      <ExternalLink size={18} aria-hidden="true" />
                      Acessar projeto
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-2.5 font-semibold text-gray-800 transition-colors hover:border-blue-400 hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 dark:border-gray-700 dark:text-gray-200 dark:hover:border-blue-400 dark:hover:text-blue-300"
                    >
                      <Github size={18} aria-hidden="true" />
                      Código
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

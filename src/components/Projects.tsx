import { ExternalLink, Github as GithubIcon } from "lucide-react";
import eestockImage from "../assets/projects/eestock.png";
import simulInvest from "../assets/projects/SimulInvestLogo.png";
import Image from "next/image";

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
              className="group relative rounded-xl overflow-hidden"
            >
              <div className="aspect-video relative">
              <Image
              src={project.image}
              alt={project.title}
              width={500} // Defina uma largura padrão
              height={500} // Defina uma altura padrão
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
                <div className="absolute inset-0 bg-gradient-to-t dark:from-black/80 dark:via-black/50 from-white/80 dark:via-thite/50 to-transparent"></div>
              </div>

              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="dark:text-gray-300 text-dark mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm dark:bg-blue-500/20 bg-blue-900/20 text-blue-900 dark:text-blue-400 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {project.demo != null ? (
                    <a
                      href={project.demo}
                      target="_blanck"
                      className="flex items-center gap-2 px-4 py-2 bg-blue-500 dark:bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors "
                    >
                      <ExternalLink size={18} />
                      Demo
                    </a>
                  ) : (
                    <></>
                  )}
                  {project.github != null ? (
                    <a
                      href={project.github}
                      target="_blanck"
                      className="flex items-center gap-2 px-4 py-2 dark:bg-gray-800 bg-gray-400 rounded-lg hover:bg-gray-700 transition-colors"
                    >
                      <GithubIcon size={18} />
                      Código
                    </a>
                  ) : (
                    <></>
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

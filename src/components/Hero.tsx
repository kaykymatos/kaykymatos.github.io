import { GithubIcon, Linkedin, Mail } from "lucide-react";

export const Hero = () => {
  return (
    <section
      id="sobre"
      className="min-h-screen flex items-center justify-center"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h1 className="text-4xl lg:text-6xl font-bold mb-6">
          <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Olá, eu sou
          </span>
          <br />
          <span className="dark:text-white text-dark">Kayky</span>
        </h1>

        <p className="dark:text-gray-400 text-dark text-lg mb-8">
          Desenvolvedor Full Stack com experiência no desenvolvimento de
          soluções digitais inovadoras. Com habilidades em C#, ASP.NET Core,
          Blazor, React, Angular e SQL Server, sou focado em criar aplicações
          modernas e escaláveis, utilizando boas práticas de desenvolvimento
          tanto no front-end quanto no back-end.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <div className="flex gap-4">
            <a
              href="https://github.com/kaykymatos"
              target="_blank"
              className="p-3 rounded-full dark:bg-gray-800 bg-gray-400 dark:hover:bg-gray-700 hover:bg-gray-500 transition-colors"
            >
              <GithubIcon size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/kayky-matos-santana-0911991a6/"
              target="_blank"
              className="p-3 rounded-full dark:bg-gray-800 bg-gray-400 dark:hover:bg-gray-700 hover:bg-gray-500 transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:kayky.m.santana@gmail.com"
              className="p-3 rounded-full dark:bg-gray-800 bg-gray-400 dark:hover:bg-gray-700 hover:bg-gray-500 transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

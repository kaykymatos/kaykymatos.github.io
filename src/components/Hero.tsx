import { FaGithub, FaLinkedin } from "react-icons/fa6";

export const Hero = () => {
  return (
    <section
      id="sobre"
      className="min-h-screen flex items-center justify-center px-4 py-28 sm:px-6"
    >
      <div className="max-w-3xl mx-auto text-center">
        <p className="inline-flex items-center rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-700 dark:text-blue-300 mb-6">
          Back-end · C# · .NET · Agentes de IA
        </p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
          <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Olá, eu sou
          </span>
          <br />
          <span className="dark:text-white text-gray-950">Kayky Matos</span>
        </h1>

        <p className="dark:text-gray-400 text-gray-700 text-lg leading-relaxed mb-8">
          Analista de Sistemas na CI&T, com foco no desenvolvimento back-end
          utilizando C# e .NET, com conhecimentos em Inteligência Artificial e
          criação de agentes com Microsoft Foundry.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <a
            href="#projetos"
            className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 font-semibold text-white transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950"
          >
            Ver projetos
          </a>
          <a
            href="#contato"
            className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-6 py-3 font-semibold text-gray-800 transition-colors hover:border-blue-400 hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 dark:border-gray-700 dark:text-gray-200 dark:hover:text-blue-300"
          >
            Entrar em contato
          </a>
        </div>

        <div className="flex justify-center gap-3">
          <a
            href="https://github.com/kaykymatos"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="rounded-full border border-blue-200 bg-blue-100 p-3 text-blue-800 transition-colors hover:bg-blue-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700"
          >
            <FaGithub size={20} aria-hidden="true" />
          </a>
          <a
            href="https://www.linkedin.com/in/kayky-matos-santana-0911991a6/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="rounded-full border border-blue-200 bg-blue-100 p-3 text-blue-800 transition-colors hover:bg-blue-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700"
          >
            <FaLinkedin size={20} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
};

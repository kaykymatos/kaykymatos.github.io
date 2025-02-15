import { Briefcase } from "lucide-react";

const experiences = [
  {
    period: "2022 - Atual",
    role: "Desenvolvedor Full Stack Junior",
    company: "Senior Sistemas S/A",
    description:
      "Atuação no desenvolvimento e manutenção de aplicações robustas, garantindo a entrega de soluções eficientes e escaláveis para atender às necessidades dos clientes.",
    achievements: [
      "Implementação de novos recursos no sistema",
      "Otimização de processos e melhoria contínua das aplicações",
    ],
  },
  {
    period: "2021 - 2022",
    role: "Analista de Suporte Técnico",
    company: "Tecklink",
    description:
      "Responsável por oferecer suporte técnico a clientes, diagnosticando e solucionando problemas relacionados à conectividade de internet e infraestrutura de rede, garantindo a satisfação do cliente e a continuidade dos serviços.",
    achievements: [
      "Redução do tempo médio de resolução de problemas",
      "Melhoria na satisfação dos clientes através de suporte ágil e eficaz",
    ],
  },
];

export const Experience = () => {
  return (
    <section id="experiencia" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Experiência Profissional
          </span>
        </h2>

        <div className="relative">
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-600"></div>

          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-8 h-8 dark:bg-gray-900 bg-white rounded-full border-4 border-purple-600 z-10"></div>

              <div className="md:w-1/2"></div>

              <div
                className={`md:w-1/2 p-6 dark:bg-gray-900/50 bg-gray-300 backdrop-blur-lg rounded-xl border border-gray-800 ${
                  index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                }`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <Briefcase className="text-purple-500" />
                  <span className="dark:text-blue-400 text-blue-700">
                    {exp.period}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-2">{exp.role}</h3>
                <p className="dark:text-purple-400 text-purple-900 mb-4">
                  {exp.company}
                </p>
                <p className="dark:text-gray-400 text-dark mb-4">
                  {exp.description}
                </p>

                <ul className="list-disc list-inside dark:text-gray-400 text-dark">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

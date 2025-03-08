import { Award, GraduationCap } from "lucide-react";

const education = [
  {
    type: "academic",
    title: "Curso técnico de Análise e Desenvolvimento de Sistemas",
    institution: "Etec Martinho Di Ciero",
    period: "2020 - 2021",
    description:
      "Formação abrangente em Análise e Desenvolvimento de Sistemas.",
  },
  {
    type: "academic",
    title: "Graduação em Análise e Desenvolvimento de Sistemas",
    institution: "Centro Universitário Nossa Senhora do Patrocínio (CEUNSP)",
    period: "2023 - 2024",
    description:
      "Formação abrangente em Análise e Desenvolvimento de Sistemas.",
  },
];

export const Education = () => {
  return (
    <section id="formacao" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Formação Acadêmica
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {education.map((item, index) => (
            <div
              key={index}
              className="p-6 dark:bg-gray-900/50 bg-gray-300 backdrop-blur-lg rounded-xl border border-gray-800 hover:border-purple-500 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                {item.type === "academic" ? (
                  <GraduationCap className="text-purple-500" size={24} />
                ) : (
                  <Award className="text-blue-500" size={24} />
                )}
                <span className="dark:text-gray-400 text-black">
                  {item.period}
                </span>
              </div>

              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="dark:text-purple-400 text-purple-900 mb-4">
                {item.institution}
              </p>
              <p className="dark:text-gray-400 text-dark">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

import { Award, GraduationCap } from "lucide-react";

const education = [{
  type: "academic",
  title: "Curso técnico de Análise e Desenvolvimento de Sistemas",
  institution: "Etec Martinho Di Ciero",
  period: "2020 - 2021",
  description: "Formação abrangente em Análise e Desenvolvimento de Sistemas.",
 },
  {
    type: "academic",
    title: "Graduação em Análise e Desenvolvimento de Sistemas",
    institution: "Centro Universitário Nossa Senhora do Patrocínio (CEUNSP)",
    period: "2023 - 2024",
    description: "Formação abrangente em Análise e Desenvolvimento de Sistemas.",
   },
  // {
  //   type: "certification",
  //   title: "AWS Certified Solutions Architect",
  //   institution: "Amazon Web Services",
  //   period: "2023",
  //   description: "Certificação profissional em arquitetura de soluções cloud",
  // },
];

export const Education = () => {
  return (
    <section id="formacao" className="py-20 bg-gray-900/50">
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
              className="p-6 bg-black/40 backdrop-blur-lg rounded-xl border border-gray-800 hover:border-purple-500 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                {item.type === "academic" ? (
                  <GraduationCap className="text-purple-500" size={24} />
                ) : (
                  <Award className="text-blue-500" size={24} />
                )}
                <span className="text-gray-400">{item.period}</span>
              </div>

              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-purple-400 mb-4">{item.institution}</p>
              <p className="text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

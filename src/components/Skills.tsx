import { Brain, Code, Users } from "lucide-react";
import { skillsData } from "../data/skills";
import { SkillIcon } from "./SkillIcon";

export const Skills = () => {
  return (
    <section id="habilidades" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Habilidades
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {skillsData.map((category, index) => (
            <div
              key={index}
              className="p-6 sm:p-8 dark:bg-gray-900/50 bg-white/80 backdrop-blur-lg rounded-xl border border-gray-200 dark:border-gray-800 hover:border-purple-400 dark:hover:border-purple-500 transition-colors"
            >
              <div className="flex items-center gap-3 mb-6">
                {category.title === "Soft Skills" ? (
                  <Users className="text-purple-500" size={24} />
                ) : category.title === "Inteligência Artificial" ? (
                  <Brain className="text-purple-500" size={24} />
                ) : (
                  <Code className="text-blue-500" size={24} />
                )}
                <h3 className="text-xl font-bold">
                  {category.title}
                </h3>
              </div>
              <ul className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <li
                    key={skill.name}
                    className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-gray-100 px-3 py-2 text-sm font-medium text-gray-800 dark:border-gray-700 dark:bg-gray-800/70 dark:text-gray-200"
                  >
                    <SkillIcon
                      name={skill.name}
                      className="text-blue-700 dark:text-blue-400"
                    />
                    {skill.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

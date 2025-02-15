import { Code, Users } from "lucide-react";
import { skillsData } from "../data/skills";
import { SkillBar } from "./SkillBar";

export const Skills = () => {
  return (
    <section id="habilidades" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Habilidades
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillsData.map((category, index) => (
            <div
              key={index}
              className="p-8 dark:bg-gray-900/50 bg-gray-300 backdrop-blur-lg rounded-xl border border-gray-800 hover:border-purple-500 transition-colors"
            >
              <div className="flex items-center gap-3 mb-6">
                {index < skillsData.length - 1 ? (
                  <Code className="text-blue-500" size={24} />
                ) : (
                  <Users className="text-purple-500" size={24} />
                )}
                <h3 className="text-xl font-bold text-dark">
                  {category.title}
                </h3>
              </div>
              {category.skills.map((skill, skillIndex) => (
                <SkillBar
                  key={skillIndex}
                  name={skill.name}
                  level={skill.level}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

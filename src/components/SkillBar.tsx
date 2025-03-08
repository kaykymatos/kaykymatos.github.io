import { SkillIcon } from "./SkillIcon";

interface SkillBarProps {
  name: string;
  level: number;
}

export const SkillBar = ({ name, level }: SkillBarProps) => (
  <div className="mb-6">
    <div className="flex justify-between mb-2">
      <span className="dark:text-gray-300 flex items-center">
        <SkillIcon name={name} className="dark:text-blue-400 text-blue-900" />
        {name}
      </span>
      <span className="dark:text-blue-400 text-blue-900">{level}%</span>
    </div>
    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
      <div
        className="h-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-1000"
        style={{ width: `${level}%` }}
      ></div>
    </div>
  </div>
);

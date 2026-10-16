import {
  Box,
  Brain,
  Code2,
  Database,
  GitBranch,
  LayoutGrid,
  MessagesSquare,
  Puzzle,
  Users,
} from "lucide-react";
import { FaGithub } from "react-icons/fa6";

const iconMap = {
  react: Code2,
  reacttypescript: Code2,
  angular: Box,
  angulartypescript: Box,
  bootstrap: LayoutGrid,
  git: GitBranch,
  teamwork: Users,
  trabalhoemequipe: Users,
  communication: MessagesSquare,
  comunicacao: MessagesSquare,
  problemSolving: Puzzle,
  resolucaodeproblemas: Puzzle,
  csharp: Code2,
  dotnet: Box,
  node: Code2,
  java: Code2,
  entityframework: Database,
  agentesdeia: Brain,
  microsoftfoundry: Brain,
  default: Brain,
};

interface SkillIconProps {
  name: string;
  className?: string;
}

export const SkillIcon = ({ name, className = "" }: SkillIconProps) => {
  const iconKey = name
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z]/g, "");
  if (iconKey === "github") {
    return <FaGithub size={20} className={`${className} inline-block mr-2`} />;
  }
  const Icon = iconMap[iconKey as keyof typeof iconMap] || iconMap.default;

  return <Icon className={`${className} inline-block mr-2`} size={20} />;
};

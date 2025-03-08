import {
  Box,
  Brain,
  Code2,
  GitBranch,
  GithubIcon,
  LayoutGrid,
  MessagesSquare,
  Puzzle,
  Users,
} from "lucide-react";

const iconMap = {
  react: Code2,
  angular: Box,
  bootstrap: LayoutGrid,
  git: GitBranch,
  github: GithubIcon,
  teamwork: Users,
  communication: MessagesSquare,
  problemSolving: Puzzle,
  csharp: Code2,
  dotnet: Box,
  default: Brain,
};

interface SkillIconProps {
  name: string;
  className?: string;
}

export const SkillIcon = ({ name, className = "" }: SkillIconProps) => {
  const iconKey = name.toLowerCase().replace(/[^a-z]/g, "");
  const Icon = iconMap[iconKey as keyof typeof iconMap] || iconMap.default;

  return <Icon className={`${className} inline-block mr-2`} size={20} />;
};

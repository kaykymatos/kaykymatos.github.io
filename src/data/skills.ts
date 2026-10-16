export interface Skill {
  name: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export const skillsData: SkillCategory[] = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React + TypeScript' },
      { name: 'Angular + TypeScript' },
      { name: 'Bootstrap' },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'C#' },
      { name: 'Node' },
      { name: 'Java' },
    ],
  },
  {
    title: 'Ferramentas',
    skills: [
      { name: 'Git' },
      { name: 'EntityFramework' },
    ],
  },
  {
    title: 'Inteligência Artificial',
    skills: [
      { name: 'Agentes de IA' },
      { name: 'Microsoft Foundry' },
    ],
  },
  {
    title: 'Soft Skills',
    skills: [
      { name: 'Trabalho em Equipe' },
      { name: 'Resolução de Problemas' },
      { name: 'Comunicação' },
    ],
  },
];
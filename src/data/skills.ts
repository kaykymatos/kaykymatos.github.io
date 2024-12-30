export interface Skill {
  name: string;
  level: number;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export const skillsData: SkillCategory[] = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React + TypeScript', level: 90 },
      { name: 'Angular + TypeScript', level: 85 },
      { name: 'Bootstrap', level: 88 },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'C#', level: 92 }
    ],
  },
  {
    title: 'Ferramentas',
    skills: [
      { name: 'GitHub', level: 90 },
      { name: 'Git', level: 85 },
      { name: 'EntityFramework', level: 70 },
    ],
  },
  {
    title: 'Soft Skills',
    skills: [
      { name: 'Trabalho em Equipe', level: 95 },
      { name: 'Resolução de Problemas', level: 90 },
      { name: 'Comunicação', level: 85 },
    ],
  },
];
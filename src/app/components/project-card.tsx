import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export interface IProject {
  imageSrc: StaticImport;
  description: string;
  title: string;
  buttonText:string;
  link: string | null;
  imagePosition :'right'|'left'
}

export default function ProjectCard(project: IProject) {
  
  
  return (
    <div className={`project-card ${project.imagePosition === 'right' ? 'reverse' : ''}`}>
      <Image src={project.imageSrc} alt={project.title} className="project-image" />
      <div className="project-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <a hidden={project.link==null} href={project.link ? project.link : ""} target="_blank" rel="noopener noreferrer" className="project-button">
          Ver Projeto
        </a>
      </div>
    </div>
  );
}

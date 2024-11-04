import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export interface IProject {
  imageSrc: StaticImport;
  description: string;
  title: string;
  buttonText:string;
  link: string | null;
}

export default function ProjectCard(project: IProject) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isCollapsing, setIsCollapsing] = useState(false);
  const [height, setHeight] = useState("50px");
  const descriptionLimit = 50;
  const descriptionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (descriptionRef.current) {
      if (isExpanded) {
        setHeight(`${descriptionRef.current.scrollHeight}px`);
      } else {
        setHeight(`${descriptionRef.current.scrollHeight}px`);
        setTimeout(() => {
          setHeight("50px");
          setIsCollapsing(true);
        }, 10);
      }
    }
  }, [isExpanded]);

  useEffect(() => {
    if (!isExpanded && isCollapsing) {
      const timer = setTimeout(() => {
        setIsCollapsing(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isExpanded, isCollapsing]);

  const truncateText = (text: string, limit: number) => {
    if (text.length > limit) {
      return text.slice(0, limit) + "...";
    }
    return text;
  };

  const handleCollapse = () => {
    setIsExpanded(false);
    setTimeout(() => {
      setIsCollapsing(false);
    }, 500);
  };

  return (
    <div
      className="col mx-2 p-2 projects-div mb-3"
      style={{
        borderRadius: "10%",minHeight:"350px",
        backgroundColor: "#121212",
        color: "#E0E0E0",
      }}
    >
      <Image
        style={{
          borderRadius: "10%",
        }}
        className="card-img-top img-fluid mb-2"
        src={project.imageSrc}
        width={200}
        alt={project.title}
      />

      <div className="card-body">
        <h5 className="card-title">{project.title}</h5>

        <div
          className="card-text  p-2"
          style={{
            maxHeight: height,
            overflow: "hidden",
            transition: "max-height 0.5s ease",
          }}
          ref={descriptionRef}
        >
          {isExpanded || isCollapsing
            ? project.description
            : truncateText(project.description, descriptionLimit)}
        </div>

        {!isExpanded && project.description.length > descriptionLimit && (
          <>
            <a
              style={{ cursor: "pointer" }}
              onClick={() => setIsExpanded(true)}
              className="text-primary"
            >
              Ler mais
            </a>
          </>
        )}

        {isExpanded && (
          <>
            <a
              style={{ cursor: "pointer" }}
              onClick={handleCollapse}
              className="text-primary"
            >
              Ler menos
            </a>
          </>
        )}
        <br />
        <a
          hidden={project.link ? false : true}
          href={project.link ? project.link : ""}
          target="_blank"
          className="btn btn-primary text-white mt-2"
        >
         {project.buttonText}
        </a>
      </div>
    </div>
  );
}

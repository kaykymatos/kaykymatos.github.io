"use client";
import Image, { ImageLoader } from "next/image";
import { ImageProps } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";

export default function SkillsSection() {
  return (
    <section id="skills">
      <div className="card shadow border-0 rounded-4 mb-5">
        <div className="card-body card-body-padding">
          <div className="mb-5">
            <div className="d-flex align-items-center mb-4">
              <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3">
                <Icon.Tools />
              </div>
              <h3 className="fw-bolder mb-0">
                <span className="text-gradient d-inline">
                  Professional Skills
                </span>
              </h3>
            </div>
            <div className="row row-cols-1 row-cols-md-3 mb-4">
              <div className="col mb-2">
                <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                  Desenvolvimento Web
                </div>
              </div>
              <div className="col mb-2">
                <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                  Desenvolvimento Back-end
                </div>
              </div>
              <div className="col mb-2">
                <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                  Banco de dados relacional
                </div>
              </div>
            </div>

            <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3">
              <Icon.CodeSlash />
            </div>
            <h3 className="fw-bolder mb-5">
              <span className="text-gradient d-inline">Conhecimento</span>
            </h3>
            <div className="row-cols-1 text-center row-cols-md-3 mb-4 svgs-skills">
              
            <Image
                width="130"
                height="130"
                src="https://img.icons8.com/ios-filled/130/7F0080/c-sharp-logo.png"
                alt="c-sharp-logo"
              />
              <Image
                width="130"
                height="130"
                src="https://img.icons8.com/color/130/bootstrap.png"
                alt="bootstrap"
              />
              <Image
                width="130"
                height="130"
                src="https://img.icons8.com/color/130/html-5--v1.png"
                alt="html-5--v1"
              />
              <Image
                width="130"
                height="130"
                src="https://img.icons8.com/color/130/css3.png"
                alt="css3"
              />
              <Image
                width="130"
                height="130"
                src="https://img.icons8.com/fluency/130/javascript.png"
                alt="javascript"
              />
              <Image
                width="130"
                height="130"
                src="https://img.icons8.com/office/130/react.png"
                alt="react"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

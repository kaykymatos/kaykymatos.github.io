"use client";
import Image from "next/image";
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
                <span className="titulos d-inline">Professional Skills</span>
              </h3>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-2 text-center mb-3">
              <div className="col">
                <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                  Desenvolvimento front-end
                </div>
              </div>
              <div className="col">
                <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                  Desenvolvimento Back-end
                </div>
              </div>
              <div className="col">
                <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                  Banco de dados relacional
                </div>
              </div>
              <div className="col">
                <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                Resolução de Problemas
                </div>
              </div>
              <div className="col">
                <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                Comunicação
                </div>
              </div>
              <div className="col">
                <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                Trabalho em Equipe
                </div>
              </div>
            </div>

            <div className="d-flex align-items-center mb-4">
              <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3">
                <Icon.CodeSlash />
              </div>
              <h3 className="fw-bolder mb-0">
                <span className="titulos d-inline">Conhecimento</span>
              </h3>
            </div>

            <div className="row row-cols-1 row-cols-md-5 text-center">
              <div className="col">
                <Image
                  width={130}
                  height={130}
                  src="https://img.icons8.com/ios-filled/130/690da1/c-sharp-logo.png"
                  alt="C#"
                />
                <p className="mt-1">C#</p>
              </div>
              <div className="col">
                <Image
                  width={130}
                  height={130}
                  src="https://img.icons8.com/color/130/bootstrap.png"
                  alt="Bootstrap"
                />
                <p className="mt-1">Bootstrap</p>
              </div>
              <div className="col">
                <Image
                  width={130}
                  height={130}
                  src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/130/external-angular-a-typescript-based-open-source-web-application-framework-logo-shadow-tal-revivo.png"
                  alt="Angular"
                />
                <p className="mt-1">Angular</p>
              </div>
              <div className="col">
                <Image
                  width={130}
                  height={130}
                  src="https://img.icons8.com/office/130/react.png"
                  alt="React"
                />
                <p className="mt-1">React</p>
              </div>
              <div className="col">
                <Image
                  width={130}
                  height={130}
                  src="https://img.icons8.com/ios-glyphs/130/github.png"
                  alt="GitHub"
                />
                <p className="mt-1">GitHub</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

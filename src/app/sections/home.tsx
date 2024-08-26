import Image from "next/image";
import Profile from "../assets/profile.png";
import { SVGProps } from "react";
import { Nav, Navbar } from "react-bootstrap";

export default function HomeSetion() {
  
  return (
    <section id="howAmI" style={{marginBottom:'15em'}}>
        
      <div className=" gx-5 align-items-center mt-5">
        <div className="col-xxl-5">
          <div className="text-center text-xxl-start">
            <div className="badge bg-gradient-primary-to-secondary text-white mb-4">
              <div className="text-uppercase">Desenvolvedor</div>
            </div>
            <h1 className="display-3 fw-bolder">
              <span className="text-gradient d-inline circled-text ">
                Construindo o futuro, uma aplicação de cada vez.
              </span>
            </h1>
          </div>
        </div>
        <div className="col-xxl-7">
          <div className="d-flex justify-content-center mt-5 mt-xxl-0">
            <div className="text-center">
              <div className="container mt-5">
                <div className="row">
                  <div className="col-md-6 text-start">
                  <h1 className="text-gradient titulos circled-text">Citação</h1>
                    <blockquote className="blockquote text-left citacao">
                        
                      <p className="circled-text mb-0 text-star citacao2t"style={{color:"#8BC34A"}}>
                        A tecnologia é a arte de transformar o impossível em
                        realidade.
                      </p>
                      <span style={{color:"#2900ff",fontSize: '0.8em',top:'1em',position:'relative'}} className="circled-text">- Kayky Matos Santana</span>
                    </blockquote>
                  </div>

                  <div className="col-md-6 text-start">
                    <div className="text-right text-light">
                      <h1 className="text-gradient circled-text titulos ">Olá</h1>
                      <p className="circled-text " style={{color:"#8BC34A"}}>
                        Sou um desenvolvedor de software com mais de 2 anos de
                        experiência, especializado em C# e .NET. Tenho
                        conhecimento em Angular, React, e TypeScript, com foco
                        em construir aplicações robustas e eficientes. Ao longo
                        da minha carreira, participei de projetos variados, onde
                        pude aplicar minhas habilidades para desenvolver
                        soluções escaláveis e de alto desempenho.
                      </p>
                      <p className="circled-text "style={{color:"#8BC34A"}}>
                        Estou sempre em busca de novos desafios e oportunidades
                        para aprender, aprimorar minhas habilidades e colaborar
                        em projetos inovadores. Minha paixão por tecnologia me
                        impulsiona a explorar constantemente novas ferramentas e
                        frameworks, garantindo que estou atualizado com as
                        melhores práticas do mercado.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image"
import TCC from  "../assets/projects/eestock.png"

export default function ProjetosSection(){
    return (
        <section id="projects">
        <div className="text-center mb-5">
            <h1 className="display-5 fw-bolder mb-0"><span className="text-gradient d-inline">Projetos</span></h1>
        </div>
        <div className="row gx-5 justify-content-center project-imgs">
            <div className="col-lg-11 col-xl-9 col-xxl-8">
                <div className="card overflow-hidden shadow rounded-4 border-0 mb-5">
                    <div className="card-body p-0">
                        <div className="d-flex align-items-center">
                            <div className="p-5">
                                <h2 className="fw-bolder">E-ESTOCK</h2>
                            <Image  className="img-fluid img-project-min" src={TCC} alt="E-ESTOCK" />

                                <p>Projeto criado durante o curso de análise e desenvolvimento de sistemas, o
                                    projeto se trata de uma implementação utilizando ASP.NET com o modelo de
                                    arquitetura MVC. Além disso, fizemos uso do framework Bootstrap para a
                                    estilização do projeto, garantindo uma interface moderna e responsiva.
                                </p>
                                <p>
                                    O foco principal do nosso projeto é desenvolver um site dedicado a
                                    vendedores em geral, oferecendo a eles uma plataforma versátil para
                                    gerenciar suas atividades comerciais de forma eficiente.
                                </p>
                            </div>
                            <Image  className="img-fluid img-project-normal" src={TCC} alt="E-ESTOCK" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
        )
}
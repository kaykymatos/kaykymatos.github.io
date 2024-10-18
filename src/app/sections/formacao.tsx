export default function FormacaoSection() {
  return (
    <section id="education">
      <div className="text-center mb-3">
        <h1 className="display-5 fw-bolder mb-0" style={{ color: "#BB86FC" }}>
          <span className="titulos d-inline">Formação</span>
        </h1>
      </div>

      {/* Primeira Formação */}
      <div
        className="card shadow border-0 rounded-4 mb-5 card-div"
        style={{
          backgroundColor: "#1E1E1E", // Fundo do card
          color: "#E0E0E0", // Texto do card
        }}
      >
        <div className="card-body card-body-padding">
          <div className="row align-items-center gx-5">
            <div className="col text-center text-lg-start mb-4 mb-lg-0">
              <div
                className="p-4 rounded-4"
                style={{
                  backgroundColor: "#121212", // Fundo da formação
                  color: "#E0E0E0", // Texto da formação
                }}
              >
                <div className="fw-bolder mb-2" style={{ color: "#BB86FC" }}>
                  2020 - 2021
                </div>
                <div className="mb-2">
                  <div className="small fw-bolder">Etec Martinho Di Ciero</div>
                  <div className="small text-muted">Itu, SP</div>
                </div>
                <div className="fst-italic">
                  <div className="small text-muted">Curso técnico</div>
                  <div className="small text-muted">
                    Análise e desenvolvimendo de sistemas
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <p>
                Ter concluído o Curso Técnico em Análise e Desenvolvimento de
                Sistemas foi uma jornada incrivelmente enriquecedora que ampliou
                meu entendimento do mundo da programação. Durante o curso,
                mergulhei nas profundezas do desenvolvimento de sistemas, com um
                foco especialmente empolgante na construção de soluções tanto no
                front-end quanto no back-end.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Segunda Formação */}
      <div
        className="card shadow border-0 rounded-4 mb-5 card-div"
        style={{
          backgroundColor: "#1E1E1E",
          color: "#E0E0E0",
        }}
      >
        <div className="card-body card-body-padding">
          <div className="row align-items-center gx-5">
            <div className="col text-center text-lg-start mb-4 mb-lg-0">
              <div
                className="p-4 rounded-4"
                style={{
                  backgroundColor: "#121212",
                  color: "#E0E0E0",
                }}
              >
                <div className="fw-bolder mb-2" style={{ color: "#BB86FC" }}>
                  2023 - Em andamento...
                </div>
                <div className="mb-2">
                  <div className="small fw-bolder">
                    CEUNSP - Centro Universitário Nossa Senhora do Patrocínio
                  </div>
                  <div className="small text-muted">Itu, SP</div>
                </div>
                <div className="fst-italic">
                  <div className="small text-muted">Formação</div>
                  <div className="small text-muted">
                    Análise e desenvolvimendo de sistemas
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <p>
                Minha jornada acadêmica na faculdade de Análise e
                Desenvolvimento de Sistemas tem sido uma experiência
                genuinamente transformadora, pois estou atualmente imerso no
                processo de explorar profundamente o vasto campo da Análise e
                desenvolvimento de sistemas e suas aplicações
                interdisciplinares. A medida que sigo adiante nessa jornada
                empolgante, tenho a oportunidade de aprofundar meu conhecimento
                e habilidades em diversas áreas, moldando minha compreensão do
                mundo tecnológico em constante evolução.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

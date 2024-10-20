export default function ExperienciaSection() {
  return (
    <section id="experience">
      <div className="text-center mb-3">
        <h1 className="display-5 fw-bolder mb-0">
          <span className="titulos d-inline">Experiência</span>
        </h1>
      </div>
      <div className="card shadow border-0 rounded-4 mb-5 card-div ">
        <div className="card-body card-body-padding">
          <div className="row align-items-center gx-5">
            <div className="col text-center text-lg-start mb-4 mb-lg-0">
              <div className="p-4 rounded-4"  style={{
                  backgroundColor: "#121212", // Fundo da formação
                  color: "#E0E0E0", // Texto da formação
                }}>
                <div className="text-primary fw-bolder mb-2">
                  2022 - Presente
                </div>
                <div className="mb-2">
                  <div className="small fw-bolder">Desenvolvedor</div>
                  <div className="small text-muted">
                    Gestão do seu Negócio com ERP e soluções tecnologicas para
                    clientes
                  </div>
                  <div className="small text-muted">Itu, SP</div>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <p>
                Trabalhar na Senior tem sido uma experiência incrível e
                enriquecedora. Esta empresa de grande sucesso é cuidadosa na
                escolha dos colaboradores, buscando indivíduos comprometidos com
                seus deveres e motivados pelo prazer de contribuir. A cultura
                organizacional valoriza a excelência e a responsabilidade, o que
                me inspira a me dedicar completamente aos desafios do dia a dia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

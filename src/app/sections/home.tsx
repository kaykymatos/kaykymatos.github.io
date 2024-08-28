export default function HomeSetion() {
  return (
    <section id="howAmI" className="mb-5 home-about-us circled-text">
      <div className="container mt-5">
        <div className="row gx-5 align-items-center">
          <div className="col-12 col-xxl-5 text-center text-xxl-start">
            <div className="badge bg-gradient-primary-to-secondary text-white mb-4">
              <div className="text-uppercase">Desenvolvedor</div>
            </div>
            <h1 className="display-5 fw-bolder">
              <span className="text-gradient d-inline circled-text">
                Construindo o futuro, uma aplicação de cada vez.
              </span>
            </h1>
          </div>

          <div className="container px-5">
            <div className="row align-items-center">
              <div className="col-xl-5">
                <div className="quote">
                  <div className="label">CITAÇÃO</div>
                  <div className="p-2"></div>
                  <div className="content">
                    <i style={{ color: "#8BC34A" }}>
                      A tecnologia é a arte de transformar o impossível em
                      realidade.
                    </i>
                  </div>
                  <div className="p-3"></div>
                  <div className="author">- Kayky Matos Santana</div>
                  <div className="p-3"></div>
                  <div className="label">OCUPAÇÕES ATUAIS</div>
                  <div className="p-1"></div>
                  <span style={{color:"#c4343c"}}>Desenvolvedor fullstack</span>
                </div>
              </div>
              <div className="col-xl-3 text-center divThumb">
                <div className="profile">
                  <div className="thumb"></div>
                </div>
              </div>
              <div className="col-xl-4">
                <h2>Olá,</h2>

                <p style={{ color: "#8BC34A", fontSize:"0.9rem !important" }}>
                  Sou um desenvolvedor de software com mais de 2 anos de
                  experiência, especializado em C# e .NET. Tenho conhecimento em
                  Angular, React, e TypeScript, com foco em construir aplicações
                  robustas e eficientes. Ao longo da minha carreira, participei
                  de projetos variados, onde pude aplicar minhas habilidades
                  para desenvolver soluções escaláveis e de alto
                  desempenho.&nbsp;
                </p>

                <p style={{ color: "#8BC34A", fontSize:"0.9rem !important" }}>
                  Estou sempre em busca de novos desafios e oportunidades para
                  aprender, aprimorar minhas habilidades e colaborar em projetos
                  inovadores. Minha paixão por tecnologia me impulsiona a
                  explorar constantemente novas ferramentas e frameworks,
                  garantindo que estou atualizado com as melhores práticas do
                  mercado.
                </p>

                <p></p>
                <div className="p-2"></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

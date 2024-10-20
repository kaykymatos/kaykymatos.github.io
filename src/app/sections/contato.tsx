import Link from "next/link";
import { CSSProperties } from "react";
import Image from "next/image";

export default function ContatoSection() {
  let styleLinks: CSSProperties = {
    color: "#1826c2 !important",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "1.5em",
  };
  return (
    
    <footer id="contact" className=" py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10 text-center">
            <p className="mb-4">
              Desenvolvedor de software especializado em C# e .NET com
              experiência em Angular, React e TypeScript. Focado em construir
              aplicações robustas e eficientes.
            </p>

            {/* Links de navegação */}
            <div className="d-flex flex-wrap justify-content-center mb-4">
              <Link style={styleLinks} className="mx-3" href="#home">
                Home
              </Link>
              <Link style={styleLinks} className="mx-3" href="#howAmI">
                Quem sou
              </Link>
              <Link style={styleLinks} className="mx-3" href="#experience">
                Experiência
              </Link>
              <Link style={styleLinks} className="mx-3" href="#projects">
                Projetos
              </Link>
              <Link style={styleLinks} className="mx-3" href="#education">
                Formação
              </Link>
              <Link style={styleLinks} className="mx-3" href="#skills">
                Skills
              </Link>
              <Link style={styleLinks} className="mx-3" href="#contact">
                Contato
              </Link>
            </div>

            {/* Redes Sociais */}
            <div className="d-flex justify-content-center fs-2 gap-4 social-icons">
              <Link
                href="https://www.linkedin.com/in/kayky-matos-santana-0911991a6/"
                target="_blank"
              >
                <img src="https://img.icons8.com/fluency/48/linkedin-circled.png" />
              </Link>
              <Link href="https://github.com/kaykymatos" target="_blank">
                
              <img src="https://img.icons8.com/fluency/48/github.png" />
              </Link>
              <Link
                href="https://www.instagram.com/kayky_matos_santana/"
                target="_blank"
              >
                
                <img src="https://img.icons8.com/fluency/48/instagram-new.png" />
              </Link>
            </div>

            <h2
              className="fw-bolder mt-4"
              style={{ color: "#1826c2 !important" }}
            >
              Contato
            </h2>
            <p className="lead">
              Envie sua mensagem preenchendo o formulário abaixo:
            </p>
            <form
              style={{ maxWidth: "600px", margin: "0 auto" }}
              action="https://api.staticforms.xyz/submit"
              method="post"
            >
              <div className="mb-3">
                <label htmlFor="nome" className="form-label">
                  Nome
                </label>
                <input
                  name="name"
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Nome"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="Seu email"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="mensagem" className="form-label">
                  Mensagem
                </label>
                <textarea
                  className="form-control"
                  id="mensagem"
                  name="message"
                  rows={4}
                  placeholder="Sua mensagem"
                  required
                ></textarea>
              </div>

              <input type="text" name="honeypot" style={{ display: "none" }} />
              <input
                type="hidden"
                readOnly
                name="accessKey"
                value="9ccd2d43-6725-4574-bd74-59544c7ddb6c"
              />
              <input
                type="hidden"
                readOnly
                name="subject"
                value="Contact us from - example.com"
              />
              <input type="hidden" name="replyTo" value="@" />
              <input
                type="hidden"
                readOnly
                name="redirectTo"
                value="https://kaykymatos.github.io/#contact"
              />

              <input
                type="text"
                name="$From"
                readOnly
                hidden
                value="kaykymatos.github.io"
              />
              <button type="submit" className="btn btn-primary">
                Enviar
              </button>
            </form>
          </div>

        </div>
      </div>
    </footer>
  );
}

import ContatoSection from "./sections/contato";
import ExperienciaSection from "./sections/experiencia";
import FormacaoSection from "./sections/formacao";
import HomeSetion from "./sections/home";
import ProjetosSection from "./sections/projetos";
import SkillsSection from "./sections/skills";

export default function Home() {
  return (
    <>
      <header className="py-5">
        <HomeSetion />
      </header>
      <ExperienciaSection />
      <ProjetosSection />
      <FormacaoSection />
      <SkillsSection />
      <ContatoSection />
    </>
  );
}

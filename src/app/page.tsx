import ContatoSection from "./sections/contato";
import ExperienciaSection from "./sections/experiencia";
import FormacaoSection from "./sections/formacao";
import HomeSetion from "./sections/home";
import HowAmI from "./sections/howAmI";
import ProjetosSection from "./sections/projetos";
import SkillsSection from "./sections/skills";

export default function Home() {
  return (
    <>
      <header className="py-5">
        <div className="container px-5 padding-page pb-5"></div>

        <HomeSetion />
        <HowAmI />
        <ExperienciaSection />

        <ProjetosSection />

        <FormacaoSection />
        <SkillsSection />
      </header>
      <ContatoSection />
    </>
  );
}

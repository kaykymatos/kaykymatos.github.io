import ContatoSection from './sections/contato'
import ExperienciaSection from './sections/experiencia'
import FormacaoSection from './sections/formacao'
import HomeSetion from './sections/home'
import InteressesSection from './sections/interesses'
import ProjetosSection from './sections/projetos'
import SkillsSection from './sections/skills'
import SobreSection from './sections/sobre'

export default function Home() {
  return (
  <>
  <header className="py-5">
  <div className="container px-5 padding-page pb-5"></div>
  
  <HomeSetion/>
    <ExperienciaSection/>
    
    <ProjetosSection/>

    <FormacaoSection/>
    <SkillsSection/>
    </header>
    <ContatoSection/>
    </>

  )
}

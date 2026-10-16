import { ArrowUpRight, Link2 } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contato" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Entre em Contato
          </span>
        </h2>

        <div className="max-w-2xl mx-auto p-8 sm:p-10 text-center dark:bg-gray-900/50 bg-gray-300 backdrop-blur-lg rounded-xl border border-gray-800 hover:border-purple-500 transition-colors">
          <div className="w-14 h-14 mx-auto mb-5 bg-blue-500/20 rounded-full flex items-center justify-center">
            <Link2 className="text-blue-400" size={28} />
          </div>
          <h3 className="text-2xl font-bold mb-3">Vamos Conversar!</h3>
          <p className="dark:text-gray-400 text-gray-800 mb-8">
            Acesse meu Linktree para encontrar minhas redes e outras formas de
            entrar em contato.
          </p>
          <a
            href="https://linktr.ee/kaykymatos"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg hover:opacity-90 transition-opacity font-medium"
          >
            Meu Linktree
            <ArrowUpRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

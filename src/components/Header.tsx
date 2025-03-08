import { Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";

export const Header = ({
  darkMode,
  toggleDarkMode,
}: {
  darkMode: boolean;
  toggleDarkMode: () => void;
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { id: "sobre", label: "Quem Sou" },
    { id: "experiencia", label: "Experiência" },
    { id: "projetos", label: "Projetos" },
    { id: "formacao", label: "Formação" },
    { id: "habilidades", label: "Habilidades" },
    { id: "contato", label: "Contato" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "dark:bg-black/80 bg-black/40 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Portfolio
          </h1>

          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="dark:text-gray-300 text-dark hover:text-blue-400 transition-colors"
              >
                {item.label}
              </button>
            ))}
            {/* <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full dark:hover:bg-gray-800 hover:bg-gray-500 transition-colors"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button> */}
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-800 transition-colors mr-2"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-full hover:bg-gray-800 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-md">
          <div className="px-4 py-2">
            {menuItems.map((item) => (
              <button
                key={item.id}
                
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left py-3 text-gray-300 hover:text-blue-400 transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

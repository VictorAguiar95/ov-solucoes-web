
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Instagram, Mail } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/e63f0e80-f28a-48f7-bae7-a8984d1f6b8c.png" 
              alt="O.V Soluções" 
              className="h-10 w-auto"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('inicio')}
              className="text-secondary-500 hover:text-primary transition-colors"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection('servicos')}
              className="text-secondary-500 hover:text-primary transition-colors"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection('projetos')}
              className="text-secondary-500 hover:text-primary transition-colors"
            >
              Projetos
            </button>
            <button
              onClick={() => scrollToSection('depoimentos')}
              className="text-secondary-500 hover:text-primary transition-colors"
            >
              Depoimentos
            </button>
            <button
              onClick={() => scrollToSection('contato')}
              className="text-secondary-500 hover:text-primary transition-colors"
            >
              Contato
            </button>
          </div>

          {/* Contact Info Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4 text-primary" />
              <a 
                href="tel:+5511969490655" 
                className="text-sm text-secondary-500 hover:text-primary transition-colors"
              >
                (11) 9.6949-0655
              </a>
            </div>
            <div className="flex space-x-2">
              <a 
                href="mailto:vendas.ovsolucoes@gmail.com"
                className="p-2 text-secondary-500 hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4" />
              </a>
              <a 
                href="https://instagram.com/o.vsolucoes" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 text-secondary-500 hover:text-primary transition-colors"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <button
                onClick={() => scrollToSection('inicio')}
                className="block px-3 py-2 text-secondary-500 hover:text-primary transition-colors w-full text-left"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection('servicos')}
                className="block px-3 py-2 text-secondary-500 hover:text-primary transition-colors w-full text-left"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection('projetos')}
                className="block px-3 py-2 text-secondary-500 hover:text-primary transition-colors w-full text-left"
              >
                Projetos
              </button>
              <button
                onClick={() => scrollToSection('depoimentos')}
                className="block px-3 py-2 text-secondary-500 hover:text-primary transition-colors w-full text-left"
              >
                Depoimentos
              </button>
              <button
                onClick={() => scrollToSection('contato')}
                className="block px-3 py-2 text-secondary-500 hover:text-primary transition-colors w-full text-left"
              >
                Contato
              </button>
              <div className="px-3 py-2 border-t">
                <div className="flex items-center space-x-2 mb-2">
                  <Phone className="h-4 w-4 text-primary" />
                  <a 
                    href="tel:+5511969490655" 
                    className="text-sm text-secondary-500"
                  >
                    (11) 9.6949-0655
                  </a>
                </div>
                <div className="flex space-x-2">
                  <a 
                    href="mailto:vendas.ovsolucoes@gmail.com"
                    className="p-2 text-secondary-500 hover:text-primary transition-colors"
                  >
                    <Mail className="h-4 w-4" />
                  </a>
                  <a 
                    href="https://instagram.com/o.vsolucoes" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 text-secondary-500 hover:text-primary transition-colors"
                  >
                    <Instagram className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;

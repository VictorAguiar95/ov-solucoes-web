
import { Mail, Instagram, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary-500 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quem Somos</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Especialistas em estruturas metálicas e coberturas personalizadas. 
              Novo ciclo de excelência técnica com foco total em soluções estruturais.
            </p>
            <div className="text-sm text-gray-400">
              <p className="font-semibold text-white mb-1">CNPJ: 61.431.261/0001-50</p>
              <p>Empresa regularizada e certificada</p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Nossas Especialidades</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <button 
                  onClick={() => document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-primary transition-colors"
                >
                  Estruturas Metálicas
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-primary transition-colors"
                >
                  Coberturas Personalizadas
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-primary transition-colors"
                >
                  Materiais Premium
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-primary transition-colors"
                >
                  Projetos Completos
                </button>
              </li>
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Navegação</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <button 
                  onClick={() => document.getElementById('inicio')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-primary transition-colors"
                >
                  Início
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('projetos')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-primary transition-colors"
                >
                  Projetos Executados
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('depoimentos')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-primary transition-colors"
                >
                  Reconhecimento
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-primary transition-colors"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato Técnico</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <a 
                  href="tel:+5511969490655"
                  className="text-gray-300 hover:text-primary transition-colors text-sm"
                >
                  (11) 9.6949-0655
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <a 
                  href="mailto:vendas.ovsolucoes@gmail.com"
                  className="text-gray-300 hover:text-primary transition-colors text-sm break-all"
                >
                  vendas.ovsolucoes@gmail.com
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Instagram className="h-4 w-4 text-primary flex-shrink-0" />
                <a 
                  href="https://instagram.com/o.vsolucoes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-primary transition-colors text-sm"
                >
                  @o.vsolucoes
                </a>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                <div className="text-gray-300 text-sm">
                  <p>Grande São Paulo e Região</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-3">Conecte-se</h4>
              <div className="flex space-x-3">
                <a
                  href="https://instagram.com/o.vsolucoes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-primary hover:bg-primary-600 rounded-full flex items-center justify-center transition-colors"
                >
                  <Instagram className="h-4 w-4 text-white" />
                </a>
                <a
                  href="https://wa.me/5511969490655"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center transition-colors"
                >
                  <Phone className="h-4 w-4 text-white" />
                </a>
                <a
                  href="mailto:vendas.ovsolucoes@gmail.com"
                  className="w-8 h-8 bg-blue-500 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors"
                >
                  <Mail className="h-4 w-4 text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              <p>&copy; {currentYear} O.V Soluções em Estruturas Metálicas. Todos os direitos reservados.</p>
              <p className="mt-1">CNPJ: 61.431.261/0001-50 - Novo ciclo de excelência técnica</p>
            </div>
            
            <div className="flex space-x-6 text-sm text-gray-400">
              <span>Qualidade Industrial</span>
              <span>•</span>
              <span>Suporte Técnico 24h</span>
              <span>•</span>
              <span>Precisão Estrutural</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

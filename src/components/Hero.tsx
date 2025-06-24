import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Clock, Users } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative pt-16 pb-20 lg:pt-20 lg:pb-28 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <h1 className="text-4xl lg:text-6xl font-bold text-secondary-500 mb-6 leading-tight">
              Soluções em 
              <span className="text-primary block">Estruturas Metálicas</span>
            </h1>
            <p className="text-xl text-accent mb-8 leading-relaxed">
              Especialistas em estruturas metálicas robustas e coberturas sob medida para projetos residenciais e comerciais. 
              Engenharia de precisão, materiais premium e execução impecável em cada obra.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                onClick={scrollToContact}
                size="lg" 
                className="bg-primary hover:bg-primary-600 text-white px-8 py-4 text-lg font-semibold"
              >
                Solicitar Orçamento
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 text-lg font-semibold"
                onClick={() => {
                  const element = document.getElementById('projetos');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Ver Projetos
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-secondary-500">Engenharia Certificada</h3>
                  <p className="text-sm text-accent">Materiais industriais</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-secondary-500">Execução Precisa</h3>
                  <p className="text-sm text-accent">Cronograma rigoroso</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-secondary-500">Expertise Técnica</h3>
                  <p className="text-sm text-accent">Novo ciclo de excelência</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative lg:ml-8">
            <div className="relative">
              <img
                src="/lovable-uploads/dc9807a0-224a-4e7f-9708-bc7d7c19211b.png"
                alt="Cobertura de vidro com estrutura metálica em terraço"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary-500/20 to-transparent rounded-2xl"></div>
            </div>
            
            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 animate-slide-in-right">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">+</span>
                </div>
                <div>
                  <p className="text-2xl font-bold text-secondary-500">500</p>
                  <p className="text-sm text-accent">Estruturas Executadas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

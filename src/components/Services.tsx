
import { Card, CardContent } from "@/components/ui/card";
import { Building, Home, Wrench, Layers } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Building,
      title: "Estruturas Metálicas",
      description: "Projetos estruturais robustos para construções residenciais e comerciais com acabamento de qualidade superior.",
      features: ["Galpões industriais", "Mezaninos", "Estruturas para telhados", "Reformas estruturais"]
    },
    {
      icon: Home,
      title: "Coberturas Sob Medida",
      description: "Soluções personalizadas em cobertura para proteger e valorizar seu patrimônio com design moderno.",
      features: ["Telhados metálicos", "Coberturas residenciais", "Pergolados", "Garagens cobertas"]
    },
    {
      icon: Wrench,
      title: "Esquadrias de Alumínio",
      description: "Janelas, portas e fachadas em alumínio com isolamento térmico e acústico de alta performance.",
      features: ["Janelas de correr", "Portas de vidro", "Fachadas comerciais", "Guarda-corpos"]
    },
    {
      icon: Layers,
      title: "Projetos Completos",
      description: "Do planejamento à execução, oferecemos soluções completas para seus projetos em estruturas metálicas.",
      features: ["Consultoria técnica", "Projeto personalizado", "Execução completa", "Garantia estendida"]
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-secondary-500 mb-4">
            Nossos Serviços
          </h2>
          <p className="text-xl text-accent max-w-3xl mx-auto">
            Oferecemos soluções completas em estruturas metálicas, coberturas e esquadrias de alumínio 
            para atender todas as suas necessidades de construção.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <service.icon className="h-8 w-8 text-primary group-hover:text-white transition-colors duration-300" />
                </div>
                
                <h3 className="text-xl font-semibold text-secondary-500 mb-4">
                  {service.title}
                </h3>
                
                <p className="text-accent mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-accent">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-secondary-500 mb-4">
              Precisa de um orçamento personalizado?
            </h3>
            <p className="text-accent mb-6">
              Nossa equipe está pronta para desenvolver a solução ideal para seu projeto. 
              Entre em contato e receba um orçamento sem compromisso.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/5511969490655?text=Olá! Gostaria de solicitar um orçamento para estruturas metálicas."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 bg-primary hover:bg-primary-600 text-white font-semibold rounded-lg transition-colors"
              >
                WhatsApp Direto
              </a>
              <button 
                onClick={() => {
                  const element = document.getElementById('contato');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold rounded-lg transition-colors"
              >
                Formulário de Contato
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

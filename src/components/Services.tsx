
import { Card, CardContent } from "@/components/ui/card";
import { Building, Home, Wrench, Layers } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Building,
      title: "Estruturas Metálicas Industriais",
      description: "Projetos estruturais robustos e dimensionados para suportar cargas industriais e comerciais com máxima segurança e durabilidade.",
      features: ["Galpões industriais", "Mezaninos estruturais", "Estruturas para equipamentos", "Reformas e reforços"]
    },
    {
      icon: Home,
      title: "Coberturas Personalizadas",
      description: "Soluções técnicas em cobertura utilizando materiais de alta performance para proteção e valorização patrimonial.",
      features: ["Lona tensionada", "Telha termoacústica", "Policarbonato alveolar", "Vidro laminado"]
    },
    {
      icon: Wrench,
      title: "Materiais Premium",
      description: "Ampla gama de materiais industriais para atender especificações técnicas rigorosas em qualquer tipo de projeto.",
      features: ["Policarbonato compacto", "Policarbonato trapezoidal", "Laminado industrial", "Vidro temperado"]
    },
    {
      icon: Layers,
      title: "Projetos Completos",
      description: "Desenvolvimento técnico integral desde o dimensionamento estrutural até a execução final, garantindo precisão em cada etapa.",
      features: ["Análise estrutural", "Projeto executivo", "Supervisão técnica", "Garantia estendida"]
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-secondary-500 mb-4">
            Nossas Especialidades
          </h2>
          <p className="text-xl text-accent max-w-3xl mx-auto">
            Oferecemos soluções técnicas completas em estruturas metálicas e coberturas personalizadas, 
            atendendo projetos residenciais e comerciais com precisão industrial.
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
              Precisa de uma solução estrutural sob medida?
            </h3>
            <p className="text-accent mb-6">
              Nossa equipe técnica está preparada para desenvolver a solução ideal para seu projeto. 
              Entre em contato e receba um dimensionamento técnico sem compromisso.
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

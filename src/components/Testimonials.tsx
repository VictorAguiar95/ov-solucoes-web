
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Carlos Mendes",
      role: "Proprietário - Residencial",
      content: "Execução impecável! A O.V Soluções entregou minha estrutura metálica com cobertura no prazo exato e com acabamento de qualidade industrial. Recomendo pela seriedade e competência técnica.",
      rating: 5,
      project: "Cobertura estrutural para área de lazer"
    },
    {
      id: 2,
      name: "Marina Silva",
      role: "Proprietário – Residencial",
      content: "Profissionais altamente qualificados. Desenvolveram todo o projeto estrutural e supervisionaram a execução com precisão técnica exemplar. Resultado superou nossas expectativas.",
      rating: 5,
      project: "Cobertura em vidro laminado para área gourmet"
    },
    {
      id: 3,
      name: "Roberto Santos",
      role: "Engenheiro - Industrial",
      content: "Parceria técnica consolidada há mais de 3 anos. Sempre entregam projetos estruturais de alta qualidade, cumprindo rigorosamente prazos e especificações técnicas. Equipe extremamente competente.",
      rating: 5,
      project: "Múltiplos projetos industriais"
    },
    {
      id: 4,
      name: "Ana Paula",
      role: "Arquiteta",
      content: "Colaboração técnica excepcional. A O.V Soluções sempre desenvolve as melhores soluções estruturais para nossos projetos arquitetônicos. Parceria de total confiança técnica.",
      rating: 5,
      project: "Projetos residenciais de alto padrão"
    },
    {
      id: 5,
      name: "João Pereira",
      role: "Proprietário - Residencial",
      content: "Executaram toda a reforma estrutural da minha propriedade. Trabalho organizado, limpo e com excelente acabamento técnico. Cumpriram rigorosamente o cronograma estabelecido.",
      rating: 5,
      project: "Reforma estrutural completa"
    },
    {
      id: 6,
      name: "Luciana Costa",
      role: "Administradora",
      content: "Atendimento técnico excepcional desde o primeiro contato. Equipe sempre disponível para esclarecimentos e ajustes no projeto. Execução final com precisão absoluta!",
      rating: 5,
      project: "Estrutura metálica comercial"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star 
        key={index} 
        className={`h-4 w-4 ${index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <section id="depoimentos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-secondary-500 mb-4">
            Reconhecimento Técnico
          </h2>
          <p className="text-xl text-accent max-w-3xl mx-auto">
            A excelência dos nossos projetos estruturais é reconhecida por clientes que valorizam 
            precisão técnica e qualidade executiva em estruturas metálicas.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">500+</div>
            <div className="text-accent">Estruturas Executadas</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">Novo</div>
            <div className="text-accent">Ciclo de Excelência</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">100%</div>
            <div className="text-accent">Precisão Técnica</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">24h</div>
            <div className="text-accent">Resposta Garantida</div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-0 bg-white">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex space-x-1">
                    {renderStars(testimonial.rating)}
                  </div>
                  <Quote className="h-8 w-8 text-primary-200" />
                </div>
                
                <p className="text-accent mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                
                <div className="border-t pt-4">
                  <h4 className="font-semibold text-secondary-500">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-accent mb-2">
                    {testimonial.role}
                  </p>
                  <p className="text-xs text-primary font-medium">
                    {testimonial.project}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-secondary-500 mb-4">
              Por Que Escolher a O.V Soluções?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-secondary-500">Empresa Regularizada</h4>
                  <p className="text-sm text-accent">CNPJ: 61.431.261/0001-50</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">★</span>
                  </div>
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-secondary-500">Qualidade Industrial</h4>
                  <p className="text-sm text-accent">Materiais certificados</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">⚡</span>
                  </div>
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-secondary-500">Suporte Técnico</h4>
                  <p className="text-sm text-accent">Acompanhamento integral</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;


import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Eye } from "lucide-react";

const Gallery = () => {
  const [filter, setFilter] = useState("todos");
  
  const projects = [
    {
      id: 1,
      title: "Galpão Industrial - Zona Sul",
      category: "industrial",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Estrutura metálica completa para galpão industrial de 1.200m²"
    },
    {
      id: 2,
      title: "Cobertura Residencial - Morumbi",
      category: "residencial",
      image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Cobertura metálica moderna para área de lazer residencial"
    },
    {
      id: 3,
      title: "Fachada Comercial - Centro",
      category: "comercial",
      image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Esquadrias de alumínio para fachada de edifício comercial"
    },
    {
      id: 4,
      title: "Mezanino Corporativo",
      category: "comercial",
      image: "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Estrutura de mezanino para ampliação de escritório"
    },
    {
      id: 5,
      title: "Garagem Residencial",
      category: "residencial",
      image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Cobertura metálica para garagem com acabamento em telha galvanizada"
    },
    {
      id: 6,
      title: "Estrutura Comercial",
      category: "comercial",
      image: "https://images.unsplash.com/photo-1486718448742-163732cd1544?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Projeto estrutural para centro comercial"
    }
  ];

  const categories = [
    { id: "todos", label: "Todos os Projetos" },
    { id: "residencial", label: "Residencial" },
    { id: "comercial", label: "Comercial" },
    { id: "industrial", label: "Industrial" }
  ];

  const filteredProjects = filter === "todos" 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projetos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-secondary-500 mb-4">
            Nossos Projetos
          </h2>
          <p className="text-xl text-accent max-w-3xl mx-auto mb-8">
            Conheça alguns dos projetos que realizamos com excelência e qualidade. 
            Cada obra é única e desenvolvida com atenção aos detalhes.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  filter === category.id
                    ? "bg-primary text-white shadow-lg"
                    : "bg-gray-100 text-accent hover:bg-gray-200"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="group overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Eye className="h-8 w-8 text-white" />
                </div>
                <Badge 
                  className={`absolute top-4 left-4 ${
                    project.category === 'residencial' ? 'bg-blue-500' :
                    project.category === 'comercial' ? 'bg-green-500' :
                    'bg-purple-500'
                  } text-white`}
                >
                  {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                </Badge>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-secondary-500 mb-3">
                  {project.title}
                </h3>
                <p className="text-accent leading-relaxed">
                  {project.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Seu Projeto Pode Estar Aqui!
            </h3>
            <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
              Transforme sua ideia em realidade com nossa expertise em estruturas metálicas. 
              Solicite um orçamento personalizado e comece seu projeto hoje mesmo.
            </p>
            <a 
              href="https://wa.me/5511969490655?text=Olá! Vi os projetos no site e gostaria de solicitar um orçamento."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Solicitar Orçamento Agora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;

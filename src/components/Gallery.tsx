
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Eye, ChevronLeft, ChevronRight } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const Gallery = () => {
  const [filter, setFilter] = useState("todos");
  
  // Imagens do projeto Grand Tolle
  const grandTolleImages = [
    "/lovable-uploads/809d68e8-1b66-43cc-b9a3-c69cc1d01346.png",
    "/lovable-uploads/30086758-919e-4d6e-a19b-20fe15d829ea.png",
    "/lovable-uploads/676b389e-652d-4763-b3ca-cd9fa8edd095.png",
    "/lovable-uploads/a07a04d8-c71d-4101-b2b2-e8f67a5deff9.png"
  ];
  
  // Imagens da cobertura automatizada
  const coberturaAutomatizadaImages = [
    "/lovable-uploads/ae482c82-d705-424a-b559-0c8c81d7e56e.png",
    "/lovable-uploads/fb6ec1b1-cdb1-449c-926e-0a03e3d431be.png"
  ];
  
  // Imagens das cortinas rolô
  const cortinasRoloImages = [
    "/lovable-uploads/f0daed5b-5315-4dc1-a472-3f105c0b5e39.png",
    "/lovable-uploads/843c1ac2-0ad3-43bd-8749-d51ea038c989.png",
    "/lovable-uploads/21a2556f-e55b-4202-8b3d-0ec7c914a2b7.png"
  ];

  // Imagens da garagem residencial
  const garagemResidencialImages = [
    "/lovable-uploads/558708a9-766a-4a22-88e0-04dcdca66b99.png",
    "/lovable-uploads/6ad69e4e-50f3-4380-8f7e-7426225926e8.png",
    "/lovable-uploads/f1f83af6-7174-4486-b6d7-22a3d27a3703.png"
  ];

  // Imagens da estrutura comercial
  const estruturaComercialImages = [
    "/lovable-uploads/b94c0f26-a099-4fc5-a13a-87fe60d71768.png",
    "/lovable-uploads/5e79089c-4a10-4457-818b-26b83114c75d.png",
    "/lovable-uploads/e82ba6ee-828d-46e9-9cd2-b80480635831.png",
    "/lovable-uploads/31f356fc-c8c0-4a98-b311-5bce9ac80c22.png"
  ];

  // Imagens do Fórum João Mendes Junior
  const forumJoaoMendesImages = [
    "/lovable-uploads/843fce20-61cc-4d77-a7ca-f4a21b1b0bbe.png",
    "/lovable-uploads/071038bf-74bf-4043-aec4-09744acf6355.png",
    "/lovable-uploads/1bcb3e1c-3eb4-4801-85d1-30cef69fca9e.png"
  ];
  
  const projects = [
    {
      id: 1,
      title: "Cobertura Automatizada Retrátil",
      category: "residencial",
      images: coberturaAutomatizadaImages,
      description: "Cobertura automatizada retrátil em vidro refletivo 4+4. Estrutura mista entre aço galvanizado e alumínio.",
      isCarousel: true
    },
    {
      id: 2,
      title: "Residencial Grand Tolle - Construtora RFM",
      category: "residencial",
      images: grandTolleImages,
      description: "Projeto estrutural completo com 25 toneladas de estrutura metálica. Execução de 243 elementos estruturais integrados ao sistema construtivo.",
      isCarousel: true
    },
    {
      id: 3,
      title: "Cobertura em Lona Tensionada PVC",
      category: "comercial",
      images: cortinasRoloImages,
      description: "Sistema de cobertura em lona laminado de PVC sobre tecido de poliéster, com aditivos anti‑UV, antifungo e antioxidantes.",
      isCarousel: true
    },
    {
      id: 4,
      title: "Estrutura em Telha Termoacústica",
      category: "comercial",
      images: estruturaComercialImages,
      description: "Projeto executivo em telha termoacústica branca. Estrutura em aço galvanizado com tratamento anticorrosivo e pintura industrial.",
      isCarousel: true
    },
    {
      id: 5,
      title: "Cobertura em Policarbonato Compacto",
      category: "residencial",
      images: garagemResidencialImages,
      description: "Cobertura residencial em policarbonato compacto fumê. Estrutura 100% em alumínio estrutural com fixações técnicas.",
      isCarousel: true
    },
    {
      id: 6,
      title: "Obra Fórum João Mendes Junior",
      category: "industrial",
      images: forumJoaoMendesImages,
      description: "100 toneladas de alumínio aonde foi feita a substituição das esquadrias. Parceria feita com a Construtora Augusto Velloso",
      isCarousel: true
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
            Projetos Executados
          </h2>
          <p className="text-xl text-accent max-w-3xl mx-auto mb-8">
            Conheça projetos estruturais que demonstram nossa capacidade técnica e precisão executiva. 
            Cada obra representa nossa expertise em soluções metálicas personalizadas.
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
                {project.isCarousel ? (
                  <div className="h-64 relative">
                    <Carousel className="w-full h-full">
                      <CarouselContent>
                        {project.images?.map((image, index) => (
                          <CarouselItem key={index}>
                            <img
                              src={image}
                              alt={`${project.title} - Imagem ${index + 1}`}
                              className="w-full h-64 object-cover"
                            />
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <CarouselPrevious className="left-2" />
                      <CarouselNext className="right-2" />
                    </Carousel>
                  </div>
                ) : (
                  <>
                    <img
                      src={project.images?.[0]}
                      alt={project.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Eye className="h-8 w-8 text-white" />
                    </div>
                  </>
                )}
                <Badge 
                  className={`absolute top-4 left-4 ${
                    project.category === 'residencial' ? 'bg-blue-500' :
                    project.category === 'comercial' ? 'bg-green-500' :
                    'bg-purple-500'
                  } text-white z-10`}
                >
                  {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                </Badge>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-secondary-500 mb-3">
                  {project.title}
                </h3>
                <p className="text-accent leading-relaxed text-sm">
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
              Sua Estrutura Pode Estar Aqui!
            </h3>
            <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
              Transforme seu projeto em realidade com nossa expertise técnica em estruturas metálicas. 
              Solicite um dimensionamento personalizado e inicie seu projeto com precisão industrial.
            </p>
            <a 
              href="https://wa.me/5511969490655?text=Olá! Vi os projetos no site e gostaria de solicitar um orçamento."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Solicitar Orçamento Técnico
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;

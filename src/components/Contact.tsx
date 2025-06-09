
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock, Instagram } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    servico: "",
    mensagem: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Criar mensagem para WhatsApp
    const message = `Olá! Gostaria de solicitar um orçamento:

*Nome:* ${formData.nome}
*Email:* ${formData.email}
*Telefone:* ${formData.telefone}
*Serviço:* ${formData.servico}
*Mensagem:* ${formData.mensagem}`;
    
    const whatsappUrl = `https://wa.me/5511969490655?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: "Redirecionando para WhatsApp",
      description: "Você será redirecionado para continuar a conversa no WhatsApp.",
    });
    
    // Reset form
    setFormData({
      nome: "",
      email: "",
      telefone: "",
      servico: "",
      mensagem: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <section id="contato" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-secondary-500 mb-4">
            Entre em Contato
          </h2>
          <p className="text-xl text-accent max-w-3xl mx-auto">
            Pronto para iniciar seu projeto? Nossa equipe está preparada para atender você 
            e desenvolver a solução ideal para suas necessidades.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border-0 shadow-xl">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-secondary-500 mb-6">
                Solicite seu Orçamento
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="nome">Nome Completo *</Label>
                    <Input
                      id="nome"
                      value={formData.nome}
                      onChange={(e) => handleInputChange("nome", e.target.value)}
                      placeholder="Seu nome completo"
                      required
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="telefone">Telefone *</Label>
                    <Input
                      id="telefone"
                      type="tel"
                      value={formData.telefone}
                      onChange={(e) => handleInputChange("telefone", e.target.value)}
                      placeholder="(11) 9.9999-9999"
                      required
                      className="mt-1"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">E-mail</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="seu@email.com"
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="servico">Tipo de Serviço *</Label>
                  <Select onValueChange={(value) => handleInputChange("servico", value)} required>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Selecione o serviço desejado" />
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                      <SelectItem value="estruturas-metalicas">Estruturas Metálicas</SelectItem>
                      <SelectItem value="coberturas">Coberturas sob Medida</SelectItem>
                      <SelectItem value="esquadrias">Esquadrias de Alumínio</SelectItem>
                      <SelectItem value="projeto-completo">Projeto Completo</SelectItem>
                      <SelectItem value="reforma">Reforma/Ampliação</SelectItem>
                      <SelectItem value="outro">Outro</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="mensagem">Descrição do Projeto *</Label>
                  <Textarea
                    id="mensagem"
                    value={formData.mensagem}
                    onChange={(e) => handleInputChange("mensagem", e.target.value)}
                    placeholder="Descreva detalhes do seu projeto: dimensões, localização, prazo, etc."
                    rows={4}
                    required
                    className="mt-1"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary-600 text-white py-3 text-lg font-semibold"
                >
                  Solicitar Orçamento via WhatsApp
                </Button>
                
                <p className="text-sm text-accent text-center">
                  * Campos obrigatórios. Resposta garantida em até 24 horas.
                </p>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="border-0 shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-secondary-500 mb-6">
                  Informações de Contato
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-secondary-500">Telefone / WhatsApp</h4>
                      <a 
                        href="tel:+5511969490655"
                        className="text-accent hover:text-primary transition-colors"
                      >
                        (11) 9.6949-0655
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-secondary-500">E-mail</h4>
                      <a 
                        href="mailto:vendas.ovsolucoes@gmail.com"
                        className="text-accent hover:text-primary transition-colors"
                      >
                        vendas.ovsolucoes@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      <Instagram className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-secondary-500">Instagram</h4>
                      <a 
                        href="https://instagram.com/o.vsolucoes"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:text-primary transition-colors"
                      >
                        @o.vsolucoes
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-secondary-500">Horário de Atendimento</h4>
                      <p className="text-accent">Segunda a Sexta: 8h às 18h</p>
                      <p className="text-accent">Sábado: 8h às 12h</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-secondary-500">Área de Atendimento</h4>
                      <p className="text-accent">Grande São Paulo e Região</p>
                      <p className="text-accent">Atendemos todo o estado de SP</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Contact Buttons */}
            <div className="grid grid-cols-2 gap-4">
              <a
                href="https://wa.me/5511969490655?text=Olá! Gostaria de conversar sobre estruturas metálicas."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-4 rounded-lg transition-colors"
              >
                <Phone className="h-5 w-5" />
                <span>WhatsApp</span>
              </a>
              
              <a
                href="mailto:vendas.ovsolucoes@gmail.com?subject=Interesse em Orçamento&body=Olá! Gostaria de solicitar um orçamento para:"
                className="flex items-center justify-center space-x-2 bg-primary hover:bg-primary-600 text-white font-semibold py-4 rounded-lg transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span>E-mail</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

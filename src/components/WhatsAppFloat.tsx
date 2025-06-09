
import { MessageCircle } from "lucide-react";

const WhatsAppFloat = () => {
  const openWhatsApp = () => {
    const message = "Olá! Vi o site da O.V Soluções e gostaria de solicitar um orçamento.";
    const whatsappUrl = `https://wa.me/5511969490655?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={openWhatsApp}
      className="whatsapp-float flex items-center justify-center"
      aria-label="Entrar em contato via WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </button>
  );
};

export default WhatsAppFloat;

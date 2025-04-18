
import { MessageCircle } from 'lucide-react';

type WhatsAppButtonProps = {
  phoneNumber: string;
  message?: string;
};

const WhatsAppButton = ({ 
  phoneNumber,
  message = "Hello! I'm interested in getting a project from Project Wala."
}: WhatsAppButtonProps) => {
  // Format phone number (remove any non-digit characters)
  const formattedPhone = phoneNumber.replace(/\D/g, '');
  
  // Create WhatsApp URL
  const whatsappUrl = `https://wa.me/${formattedPhone}?text=${encodeURIComponent(message)}`;
  
  return (
    <a 
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BA5C] text-white rounded-full p-4 shadow-lg hover-glow flex items-center justify-center transition-all duration-300"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  );
};

export default WhatsAppButton;

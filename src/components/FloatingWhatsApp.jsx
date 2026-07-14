import { MessageCircle } from "lucide-react";
import { contact } from "../data/site";

export default function FloatingWhatsApp() {
  if (!contact.whatsappNumber) return null;

  return (
    <a
      href={`https://wa.me/${contact.whatsappNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-xl hover:scale-110 transition-all duration-300"
      aria-label="WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  );
}
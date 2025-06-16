import React from 'react';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Location = () => {
  // MUDANÇA: A URL de exemplo foi substituída pela URL de incorporação correta para o endereço da loja.
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3637.362943729214!2d-53.0180556238719!3d-24.2635998783247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94921631581452cb%3A0x67332b5f63964e52!2sM%C3%B3veis%20Oeste!5e0!3m2!1spt-BR!2sbr!4v1718508000000!5m2!1spt-BR!2sbr";

  return (
    <section id="location" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-furniture-green">
            Venha nos Conhecer
          </h2>
          <div className="w-20 h-1 bg-furniture-yellow mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto text-gray-600">
            Visite nossa loja para explorar nossa coleção e receber assistência personalizada.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 overflow-hidden rounded-lg shadow-md">
            <div className="h-full w-full min-h-[400px]">
              <iframe 
                src={mapEmbedUrl}
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false}
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Móveis Oeste"
              ></iframe>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-display font-semibold text-furniture-green mb-6">
              Informações da Loja
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-furniture-green/10 p-3 rounded-full mr-4 mt-1">
                  <MapPin className="h-5 w-5 text-furniture-green" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 mb-1 font-display">Endereço</h4>
                  <p className="text-gray-600">
                    Av. João Teotônio Moreira Sáles Neto, 877 - Neto, 819 - Centro, Moreira Sales - PR, 87370-000
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-furniture-green/10 p-3 rounded-full mr-4 mt-1">
                  <Clock className="h-5 w-5 text-furniture-green" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 mb-1 font-display">Horário de Funcionamento</h4>
                  <p className="text-gray-600">
                    Segunda - Sexta: 8:00 - 18:00<br />
                    Sábado: 08:00 - 12:00<br />
                    Domingo: Fechado
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-furniture-green/10 p-3 rounded-full mr-4 mt-1">
                  <Phone className="h-5 w-5 text-furniture-green" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 mb-1 font-display">Telefone</h4>
                  <p className="text-gray-600">
                    <a href="tel:+554435321521" className="hover:text-furniture-green">+55 (44) 3532-1521</a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-furniture-green/10 p-3 rounded-full mr-4 mt-1">
                  <Mail className="h-5 w-5 text-furniture-green" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 mb-1 font-display">Email</h4>
                  <p className="text-gray-600">
                    <a href="mailto:moveisoestems@gmail.com" className="hover:text-furniture-green">moveisoestems@gmail.com</a>
                  </p>
                </div>
              </div>
            </div>
            
            <Button 
              className="w-full mt-8 bg-furniture-yellow text-green-900 hover:bg-yellow-400 font-semibold"
              onClick={() => window.open('https://wa.me/554435321521', '_blank')}
            >
              Agendar visita
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
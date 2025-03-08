
import { useState } from 'react';
import { toast } from '@/components/ui/use-toast';

export function HeroSection() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !phone) {
      toast({
        title: "Please fill all fields",
        description: "Name and phone number are required.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Booking requested!",
      description: "We'll contact you shortly to confirm your appointment.",
    });
    
    setName('');
    setPhone('');
  };

  return (
    <section className="relative pt-16 md:pt-20 lg:pt-24 pb-10 md:pb-16">
      <div className="absolute inset-0 bg-[url('public/lovable-uploads/30c535ce-e0d0-48c8-b272-a322d58a4186.png')] bg-cover bg-center opacity-20"></div>
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Schedule a Service <br/>
              <span className="heading-gradient">Appointment</span> and Enjoy <br/>
              Comfort in Your Home Again!
            </h1>
            <p className="text-gray-600 text-lg mb-8 max-w-lg">
              Expert technicians ready to fix your appliances with fast, reliable, and affordable service.
            </p>
          </div>
          
          <div className="glass-card animate-fade-up p-8 mx-auto w-full max-w-md">
            <h2 className="text-xl font-semibold mb-6 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Book a Service
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple/50"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              
              <div>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple/50"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
              
              <button
                type="submit"
                className="w-full py-3 bg-purple hover:bg-purple-dark text-white rounded-lg transition-colors font-medium"
              >
                Book Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

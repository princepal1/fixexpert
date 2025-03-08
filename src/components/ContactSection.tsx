
import { useState } from 'react';
import { toast } from '@/components/ui/use-toast';

export function ContactSection() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !phone) {
      toast({
        title: "Please fill required fields",
        description: "Name and phone number are required.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
    
    setName('');
    setPhone('');
    setMessage('');
  };

  return (
    <section className="purple-gradient py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="px-4 py-1 rounded-full text-xs uppercase tracking-wider bg-white/20 text-white inline-block">Get in Touch With Us</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 text-white">
            Have a Question or Need Assistance?<br />
            <span className="text-purple-light">Contact Us</span> Today!
          </h2>
        </div>
        
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-8">
          <div className="flex items-center mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            <h3 className="font-semibold">For Service Booking</h3>
          </div>
          
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
            
            <div>
              <textarea
                placeholder="Enter 10-digit phone number"
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple/50"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
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
    </section>
  );
}

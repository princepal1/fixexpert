
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
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
    setEmail('');
    setPhone('');
    setMessage('');
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main>
        <section className="relative pt-24 md:pt-32 pb-16 md:pb-24">
          <div className="absolute inset-0 bg-[url('public/lovable-uploads/33e3e950-29e6-4edc-90bc-bd202bcf3265.png')] bg-cover bg-center opacity-20"></div>
          
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 z-10">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Get in Touch <span className="text-purple">With Us</span>
              </h1>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Have questions about our services or need assistance? We're here to help. Reach out to us using any of the contact methods below.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="glass-card p-8">
                <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex">
                    <div className="mt-1 mr-4 w-10 h-10 flex-shrink-0 bg-purple/10 rounded-full flex items-center justify-center text-purple">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium">Our Location</h3>
                      <p className="text-gray-600 mt-1">123 Service Street, Appliance City, AC 12345</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="mt-1 mr-4 w-10 h-10 flex-shrink-0 bg-purple/10 rounded-full flex items-center justify-center text-purple">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium">Phone Number</h3>
                      <p className="text-gray-600 mt-1">+1 (234) 567-8901</p>
                      <p className="text-gray-600">+1 (234) 567-8902</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="mt-1 mr-4 w-10 h-10 flex-shrink-0 bg-purple/10 rounded-full flex items-center justify-center text-purple">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium">Email Address</h3>
                      <p className="text-gray-600 mt-1">info@easyfix.com</p>
                      <p className="text-gray-600">support@easyfix.com</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="mt-1 mr-4 w-10 h-10 flex-shrink-0 bg-purple/10 rounded-full flex items-center justify-center text-purple">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium">Working Hours</h3>
                      <p className="text-gray-600 mt-1">Monday - Friday: 8:00 AM - 8:00 PM</p>
                      <p className="text-gray-600">Saturday - Sunday: 9:00 AM - 5:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="glass-card p-8">
                <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple/50"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="Your email"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple/50"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      placeholder="Your phone number"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple/50"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      placeholder="How can we help you?"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple/50"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full py-3 bg-purple hover:bg-purple-dark text-white rounded-lg transition-colors font-medium"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;

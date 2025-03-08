
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ServiceSection } from "@/components/ServiceSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { CallToAction } from "@/components/CallToAction";

const Services = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main>
        <section className="relative pt-24 md:pt-32 pb-16 md:pb-24">
          <div className="absolute inset-0 bg-[url('public/lovable-uploads/143d489e-c46a-4f3e-9f9c-0a5fc52d3d2c.png')] bg-cover bg-center opacity-20"></div>
          
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 z-10">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Our <span className="text-purple">Services</span>
              </h1>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We provide comprehensive repair and maintenance services for all your home appliances.
                Our expert technicians are trained to handle any issue, big or small.
              </p>
            </div>
          </div>
        </section>
        
        <ServiceSection />
        
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="service-badge">OUR PROCESS</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-4 heading-gradient">
                How We Work
              </h2>
              <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                Our streamlined service process is designed to provide you with quick, reliable, and hassle-free appliance repairs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="relative">
                <div className="absolute top-0 right-0 -mr-4 mt-8 hidden lg:block">
                  <svg width="72" height="24" viewBox="0 0 72 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M71.0607 13.0607C71.6464 12.4749 71.6464 11.5251 71.0607 10.9393L61.5147 1.3934C60.9289 0.807611 59.9792 0.807611 59.3934 1.3934C58.8076 1.97919 58.8076 2.92893 59.3934 3.51472L67.8787 12L59.3934 20.4853C58.8076 21.0711 58.8076 22.0208 59.3934 22.6066C59.9792 23.1924 60.9289 23.1924 61.5147 22.6066L71.0607 13.0607ZM0 13.5H70V10.5H0V13.5Z" fill="#CBD5E0"/>
                  </svg>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-md h-full">
                  <div className="w-12 h-12 bg-purple rounded-full flex items-center justify-center text-white font-bold text-xl mb-6">1</div>
                  <h3 className="text-xl font-semibold mb-4">Book a Service</h3>
                  <p className="text-gray-600">
                    Schedule an appointment online or call our customer service. Let us know about your appliance issue.
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute top-0 right-0 -mr-4 mt-8 hidden lg:block">
                  <svg width="72" height="24" viewBox="0 0 72 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M71.0607 13.0607C71.6464 12.4749 71.6464 11.5251 71.0607 10.9393L61.5147 1.3934C60.9289 0.807611 59.9792 0.807611 59.3934 1.3934C58.8076 1.97919 58.8076 2.92893 59.3934 3.51472L67.8787 12L59.3934 20.4853C58.8076 21.0711 58.8076 22.0208 59.3934 22.6066C59.9792 23.1924 60.9289 23.1924 61.5147 22.6066L71.0607 13.0607ZM0 13.5H70V10.5H0V13.5Z" fill="#CBD5E0"/>
                  </svg>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-md h-full">
                  <div className="w-12 h-12 bg-purple rounded-full flex items-center justify-center text-white font-bold text-xl mb-6">2</div>
                  <h3 className="text-xl font-semibold mb-4">Diagnostic Visit</h3>
                  <p className="text-gray-600">
                    Our technician will visit your home to diagnose the problem and provide a transparent cost estimate.
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute top-0 right-0 -mr-4 mt-8 hidden lg:block">
                  <svg width="72" height="24" viewBox="0 0 72 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M71.0607 13.0607C71.6464 12.4749 71.6464 11.5251 71.0607 10.9393L61.5147 1.3934C60.9289 0.807611 59.9792 0.807611 59.3934 1.3934C58.8076 1.97919 58.8076 2.92893 59.3934 3.51472L67.8787 12L59.3934 20.4853C58.8076 21.0711 58.8076 22.0208 59.3934 22.6066C59.9792 23.1924 60.9289 23.1924 61.5147 22.6066L71.0607 13.0607ZM0 13.5H70V10.5H0V13.5Z" fill="#CBD5E0"/>
                  </svg>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-md h-full">
                  <div className="w-12 h-12 bg-purple rounded-full flex items-center justify-center text-white font-bold text-xl mb-6">3</div>
                  <h3 className="text-xl font-semibold mb-4">Quick Repair</h3>
                  <p className="text-gray-600">
                    Our expert technician will complete the repair efficiently, often on the same visit if parts are available.
                  </p>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-md h-full">
                <div className="w-12 h-12 bg-purple rounded-full flex items-center justify-center text-white font-bold text-xl mb-6">4</div>
                <h3 className="text-xl font-semibold mb-4">Quality Check</h3>
                <p className="text-gray-600">
                  We'll test the appliance to ensure it's working properly and provide maintenance tips to prevent future issues.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <TestimonialsSection />
        
        <CallToAction />
      </main>
      
      <Footer />
    </div>
  );
};

export default Services;

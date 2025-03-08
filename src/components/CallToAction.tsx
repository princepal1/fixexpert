
import { Link } from 'react-router-dom';

export function CallToAction() {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-purple/80 to-purple-dark rounded-2xl py-12 px-8 md:py-16 md:px-12 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Get Your Appliances Fixed?
          </h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-8">
            Don't wait until your appliance problems get worse. Schedule a service appointment today and our expert technicians will have your appliances running smoothly in no time.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/contact" 
              className="px-8 py-3 bg-white text-purple font-medium rounded-lg hover:bg-gray-100 transition-colors"
            >
              Contact Us
            </Link>
            <Link 
              to="/services" 
              className="px-8 py-3 bg-transparent border border-white text-white font-medium rounded-lg hover:bg-white/10 transition-colors"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

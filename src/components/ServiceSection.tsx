
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
}

function ServiceCard({ title, description, icon, link }: ServiceCardProps) {
  return (
    <Link 
      to={link}
      className="service-card group"
    >
      <div className="flex flex-col h-full">
        <div className="mb-4 text-purple-dark group-hover:text-purple transition-colors">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-2 group-hover:text-purple transition-colors">{title}</h3>
        <p className="text-gray-600 mb-4 flex-grow">{description}</p>
        <div className="mt-auto">
          <span className="inline-flex items-center text-purple font-medium">
            Learn more
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}

export function ServiceSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <span className="service-badge animate-fade-in">Our Services</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 heading-gradient">
            Expert Home Appliance Services
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            We provide professional repair and maintenance services for all major home appliances.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            title="AC Service & Repair"
            description="Professional air conditioner repair, installation, and maintenance services for optimal cooling performance."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            }
            link="/ac-service"
          />
          
          <ServiceCard
            title="Washing Machine Repair"
            description="Expert washing machine repair services to fix all types of issues and restore optimal performance."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.5v15m7.5-7.5h-15m13-3h2a3 3 0 013 3v6a3 3 0 01-3 3h-12a3 3 0 01-3-3v-6a3 3 0 013-3h2" />
              </svg>
            }
            link="/washing-machine"
          />
          
          <ServiceCard
            title="Refrigerator Service"
            description="Comprehensive refrigerator repair and maintenance services to extend the life of your appliance."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-7-7h1V3" />
              </svg>
            }
            link="/fridge-service"
          />
          
          <ServiceCard
            title="Microwave Repair"
            description="Fast and reliable microwave repair services to get your appliance working like new again."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16V3a1 1 0 00-1-1H5a1 1 0 00-1 1v3zm0 3h16v11a1 1 0 01-1 1H5a1 1 0 01-1-1V9z M9 8v8 M12 8v8 M15 8v8" />
              </svg>
            }
            link="/microwave-service"
          />
          
          <ServiceCard
            title="Dishwasher Repair"
            description="Expert dishwasher repair and maintenance services to ensure efficient cleaning and longer appliance life."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0v11a2 2 0 01-2 2H6a2 2 0 01-2-2V7m16 0l-8 4-8-4" />
              </svg>
            }
            link="/dishwasher-service"
          />
          
          <ServiceCard
            title="Water Heater Service"
            description="Comprehensive water heater repair, installation, and maintenance for consistent hot water supply."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
              </svg>
            }
            link="/water-heater-service"
          />
        </div>
      </div>
    </section>
  );
}

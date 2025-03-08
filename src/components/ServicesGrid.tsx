
interface ServiceItem {
  icon: React.ReactNode;
  title: string;
}

interface ServicesGridProps {
  title: string;
  subtitle: string;
  highlight: string;
  description: string;
  services: ServiceItem[];
}

export function ServicesGrid({ title, subtitle, highlight, description, services }: ServicesGridProps) {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="service-badge uppercase">{subtitle}</span>
          <h2 className="text-3xl font-bold mt-4">
            Comprehensive Solutions for<br />
            All Your <span className="text-purple">{highlight}</span> Needs
          </h2>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            {description}
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="flex flex-col items-start p-5 hover:bg-gray-50 rounded-lg transition-all-200"
            >
              <div className="flex items-start">
                <div className="text-purple mr-3">
                  {service.icon}
                </div>
                <h3 className="font-medium text-gray-900">{service.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


interface Location {
  name: string;
  icon: React.ReactNode;
}

interface LocationsSectionProps {
  title: string;
  subtitle: string;
  highlight: string;
  locations: Location[];
}

export function LocationsSection({ title, subtitle, highlight, locations }: LocationsSectionProps) {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 rounded-full text-xs uppercase tracking-wider bg-purple/10 text-purple">{subtitle}</span>
          <h2 className="text-3xl font-bold mt-4">
            {title} <span className="text-purple">{highlight}</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            At EasyFix service, we offer a full range of professional repair and maintenance services to keep your home comfortable throughout the year. From installation and repairs to routine maintenance, our expert technicians are equipped to handle all your needs. No matter the brand or model, we deliver fast, reliable, and affordable service.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {locations.map((location, index) => (
            <div 
              key={index}
              className="flex items-start p-4 hover:bg-gray-50 rounded-lg transition-all-200"
            >
              <div className="text-purple mr-3">
                {location.icon}
              </div>
              <h3 className="font-medium text-gray-900">{location.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

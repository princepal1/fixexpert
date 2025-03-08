
export function BrandsSection() {
  const brands = [
    { name: "LG", id: "lg" },
    { name: "Samsung", id: "samsung" },
    { name: "Whirlpool", id: "whirlpool" },
    { name: "Daikin", id: "daikin" },
    { name: "Haier", id: "haier" },
    { name: "Godrej", id: "godrej" },
    { name: "Bosch", id: "bosch" },
    { name: "Panasonic", id: "panasonic" }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="service-badge">BRANDS</span>
          <h2 className="text-3xl font-bold mt-4">
            Appliance <span className="text-purple">Brands</span> We Service
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Expert repair & maintenance for all leading appliance brands
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {brands.map((brand) => (
            <div 
              key={brand.id}
              className="bg-gray-100 rounded-lg p-6 flex flex-col items-center justify-center hover:shadow-md transition-all-200"
            >
              <div className="h-16 flex items-center justify-center">
                <span className="text-xl font-bold text-gray-800">{brand.name}</span>
              </div>
              <span className="text-sm text-gray-500 mt-2">{brand.id}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

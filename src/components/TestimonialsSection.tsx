
export function TestimonialsSection() {
  const testimonials = [
    {
      quote: "EasyFix repaired my AC unit quickly and professionally. The technician was knowledgeable and courteous, and the pricing was very reasonable.",
      author: "Sarah Johnson",
      role: "Homeowner"
    },
    {
      quote: "I've used EasyFix for multiple appliance repairs, and they never disappoint. Fast service, competitive pricing, and excellent workmanship.",
      author: "Michael Thompson",
      role: "Property Manager"
    },
    {
      quote: "The washing machine repair technician from EasyFix diagnosed and fixed the problem with my washer in under an hour. Impressive service!",
      author: "Jennifer Davis",
      role: "Customer"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="service-badge">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 heading-gradient">
            What Our Customers Say
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about our services.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-md">
              <svg className="h-8 w-8 text-purple/40 mb-4" fill="currentColor" viewBox="0 0 32 32">
                <path d="M10 8c-4.418 0-8 3.582-8 8v8h8v-8h-2c0-3.309 2.691-6 6-6V8zm18 0c-4.418 0-8 3.582-8 8v8h8v-8h-2c0-3.309 2.691-6 6-6V8z" />
              </svg>
              <p className="text-gray-600 mb-6 italic">{testimonial.quote}</p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-purple/20 rounded-full flex items-center justify-center text-purple font-medium">
                  {testimonial.author.charAt(0)}
                </div>
                <div className="ml-3">
                  <p className="font-medium">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

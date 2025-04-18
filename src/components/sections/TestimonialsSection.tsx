
type Testimonial = {
  text: string;
  name: string;
  uni: string;
};

const testimonials: Testimonial[] = [
  {
    text: "Project Wala delivered my web app on time and exceeded my expectations. The documentation was excellent, and I scored an A+ in my final evaluation.",
    name: "Rahul S.",
    uni: "VIT Chennai"
  },
  {
    text: "I was struggling with my machine learning project until I found Project Wala. They not only built a great project but also helped me understand the concepts.",
    name: "Priya M.",
    uni: "IIT Bombay"
  },
  {
    text: "The mobile app they developed for my final year project was professional-grade. My professors were impressed by the quality and documentation.",
    name: "Akash J.",
    uni: "NIT Warangal"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-techblue">
      <div className="container-custom">
        <div className="text-center mb-16">
          <p className="text-teal font-mono mb-2">TESTIMONIALS</p>
          <h2 className="text-white mb-4">What Students Say</h2>
          <div className="w-24 h-1 bg-teal/30 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card p-6 hover-glow">
              <div className="text-teal text-4xl mb-4">"</div>
              <p className="text-gray-300 italic mb-6">{testimonial.text}</p>
              <div>
                <p className="text-white font-medium">{testimonial.name}</p>
                <p className="text-gray-400 text-sm">{testimonial.uni}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

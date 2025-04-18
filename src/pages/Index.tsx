
import { useState } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-techblue">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      
      {/* Projects Section */}
      <section id="projects" className="section-padding bg-techblue-light">
        <div className="container-custom">
          <div className="text-center mb-16">
            <p className="text-teal font-mono mb-2">PROJECTS</p>
            <h2 className="text-white mb-4">Featured Projects</h2>
            <div className="w-24 h-1 bg-teal/30 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Smart HR Management System",
                category: "Web App",
                tech: "React, Node.js, MongoDB",
                image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
              },
              {
                title: "Property Finder App",
                category: "Mobile App",
                tech: "Flutter, Firebase",
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f"
              },
              {
                title: "AI-Based Student Assistant",
                category: "AI/ML",
                tech: "Python, TensorFlow",
                image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
              },
              {
                title: "E-Commerce Platform",
                category: "Web App",
                tech: "Next.js, Stripe, PostgreSQL",
                image: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62"
              },
              {
                title: "Hospital Management System",
                category: "Web App",
                tech: "Django, PostgreSQL, React",
                image: "https://images.unsplash.com/photo-1516549655169-df83a0774514"
              },
              {
                title: "Smart IoT Home System",
                category: "IoT",
                tech: "Arduino, React Native, Firebase",
                image: "https://images.unsplash.com/photo-1558002038-1055907df827"
              },
              {
                title: "Library Management System",
                category: "Web App",
                tech: "Laravel, MySQL, Vue.js",
                image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66"
              },
              {
                title: "Inventory Management",
                category: "Web App",
                tech: "MERN Stack, Redux",
                image: "https://images.unsplash.com/photo-1553413077-190dd305871c"
              },
              {
                title: "Face Recognition Attendance",
                category: "AI/ML",
                tech: "Python, OpenCV, TensorFlow",
                image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5"
              },
              {
                title: "Food Delivery App",
                category: "Mobile App",
                tech: "React Native, Node.js, MongoDB",
                image: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17"
              },
              {
                title: "Car Rental System",
                category: "Web App",
                tech: "Angular, Spring Boot, MySQL",
                image: "https://images.unsplash.com/photo-1485291571150-772bcfc10da5"
              },
              {
                title: "Social Media Analytics",
                category: "AI/ML",
                tech: "Python, NLP, MongoDB",
                image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a"
              },
              {
                title: "School Management System",
                category: "Web App",
                tech: "PHP, MySQL, jQuery",
                image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b"
              },
              {
                title: "Weather Forecasting App",
                category: "Mobile App",
                tech: "Flutter, OpenWeather API",
                image: "https://images.unsplash.com/photo-1561484930-998b6a7b22e8"
              },
              {
                title: "Expense Tracker",
                category: "Mobile App",
                tech: "React Native, Firebase",
                image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07"
              }
            ].map((project, index) => (
              <div key={index} className="card overflow-hidden hover-glow group">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={`${project.image}?auto=format&fit=crop&w=500&q=80`} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-teal font-mono text-sm">{project.category}</span>
                  </div>
                  <h3 className="text-white text-xl mb-2 font-mono">{project.title}</h3>
                  <p className="text-gray-400 mb-4">Technologies: {project.tech}</p>
                  <a href="#contact" className="text-teal font-mono hover:text-teal-light transition-colors duration-300 flex items-center">
                    Request This Project
                    <span className="ml-1">&rarr;</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Simple Contact Section */}
      <section id="contact" className="section-padding bg-techblue">
        <div className="container-custom">
          <div className="text-center mb-16">
            <p className="text-teal font-mono mb-2">CONTACT</p>
            <h2 className="text-white mb-4">Get Your Project Started</h2>
            <div className="w-24 h-1 bg-teal/30 mx-auto"></div>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2 font-mono">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full bg-techblue-light text-gray-200 border border-gray-700 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal/50"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2 font-mono">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full bg-techblue-light text-gray-200 border border-gray-700 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal/50"
                    placeholder="Your Email"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="project" className="block text-gray-300 mb-2 font-mono">Project Requirement</label>
                <textarea 
                  id="project" 
                  rows={6} 
                  className="w-full bg-techblue-light text-gray-200 border border-gray-700 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal/50"
                  placeholder="Describe your project requirements..."
                ></textarea>
              </div>
              
              <div className="text-center">
                <button type="submit" className="btn-primary px-8">
                  Submit Request
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Simple FAQ Section */}
      <section id="faqs" className="section-padding bg-techblue-light">
        <div className="container-custom">
          <div className="text-center mb-16">
            <p className="text-teal font-mono mb-2">FAQs</p>
            <h2 className="text-white mb-4">Frequently Asked Questions</h2>
            <div className="w-24 h-1 bg-teal/30 mx-auto"></div>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "How much time does it take to complete a project?",
                answer: "Project timelines vary based on complexity. Simple projects typically take 2-3 weeks, while more complex ones may require 4-6 weeks. We always work with your deadlines in mind."
              },
              {
                question: "Will you provide source code?",
                answer: "Yes, we provide complete source code with proper documentation for all our projects. You'll have full ownership of the delivered project."
              },
              {
                question: "Do you offer documentation?",
                answer: "Absolutely! All our projects come with comprehensive documentation including requirements, design specification, implementation details, and user guides."
              },
              {
                question: "Is customization available?",
                answer: "Yes, we specialize in customized projects tailored to your specific requirements. You can request any modifications or features you need."
              }
            ].map((faq, index) => (
              <div key={index} className="card p-6 hover-glow">
                <h3 className="text-white text-xl mb-3 font-mono">{faq.question}</h3>
                <p className="text-gray-400">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Simple Testimonials */}
      <section className="section-padding bg-techblue">
        <div className="container-custom">
          <div className="text-center mb-16">
            <p className="text-teal font-mono mb-2">TESTIMONIALS</p>
            <h2 className="text-white mb-4">What Students Say</h2>
            <div className="w-24 h-1 bg-teal/30 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
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
            ].map((testimonial, index) => (
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
      
      <Footer />
      <WhatsAppButton phoneNumber="+919876543210" />
    </div>
  );
};

export default Index;

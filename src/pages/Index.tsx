
import { useState } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const Index = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    console.log("Submitting form with data:", formData);

    try {
      const response = await supabase.functions.invoke('send-contact', {
        body: formData
      });
      
      console.log("Function response:", response);

      if (response.error) {
        throw new Error(`Function error: ${response.error.message || JSON.stringify(response.error)}`);
      }

      toast({
        title: "Success!",
        description: "Your message has been sent successfully. We'll get back to you soon!",
      });

      // Clear form
      setFormData({ name: '', email: '', project: '' });
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to send message. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  return (
    <div className="min-h-screen bg-techblue">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      
      {/* Simple Contact Section */}
      <section id="contact" className="section-padding bg-techblue">
        <div className="container-custom">
          <div className="text-center mb-16">
            <p className="text-teal font-mono mb-2">CONTACT</p>
            <h2 className="text-white mb-4">Get Your Project Started</h2>
            <div className="w-24 h-1 bg-teal/30 mx-auto"></div>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2 font-mono">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-techblue-light text-gray-200 border border-gray-700 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal/50"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2 font-mono">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-techblue-light text-gray-200 border border-gray-700 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal/50"
                    placeholder="Your Email"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="project" className="block text-gray-300 mb-2 font-mono">Project Requirement</label>
                <textarea 
                  id="project" 
                  rows={6} 
                  value={formData.project}
                  onChange={handleInputChange}
                  className="w-full bg-techblue-light text-gray-200 border border-gray-700 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal/50"
                  placeholder="Describe your project requirements..."
                  required
                ></textarea>
              </div>
              
              <div className="text-center">
                <button 
                  type="submit" 
                  className="btn-primary px-8"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Submit Request'}
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
      
      <TestimonialsSection />
      <Footer />
      <WhatsAppButton phoneNumber="+919876543210" />
    </div>
  );
};

export default Index;

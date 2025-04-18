
import { 
  Smartphone, 
  Globe, 
  Server, 
  Code, 
  FileText, 
  Presentation, 
  MonitorSmartphone,
  Database,
  Cpu,
  Network
} from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: <MonitorSmartphone className="w-10 h-10" />,
      title: "Full-Stack Web Applications",
      description: "Complete web solutions from frontend to backend using modern frameworks like React, Angular, Node.js, and more."
    },
    {
      icon: <Smartphone className="w-10 h-10" />,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications using Flutter, React Native, or native Android/iOS development."
    },
    {
      icon: <Database className="w-10 h-10" />,
      title: "Database & Management Systems",
      description: "HRMS, inventory management, and other enterprise systems with robust database architectures."
    },
    {
      icon: <Globe className="w-10 h-10" />,
      title: "Real Estate/Job Portals",
      description: "Custom portals with powerful search capabilities, user management, and interactive features."
    },
    {
      icon: <Cpu className="w-10 h-10" />,
      title: "AI & Machine Learning",
      description: "Intelligent systems with data analytics, machine learning models, and AI-driven solutions."
    },
    {
      icon: <Network className="w-10 h-10" />,
      title: "IoT Projects",
      description: "Internet of Things projects connecting hardware devices with software interfaces and data analytics."
    },
    {
      icon: <FileText className="w-10 h-10" />,
      title: "Documentation Support",
      description: "Comprehensive project documentation including requirements, architecture, and implementation details."
    },
    {
      icon: <Presentation className="w-10 h-10" />,
      title: "Viva & Presentation Prep",
      description: "Thorough preparation for project presentations, viva questions, and demos to ensure confidence."
    },
  ];

  return (
    <section id="services" className="section-padding bg-techblue">
      <div className="container-custom">
        <div className="text-center mb-16">
          <p className="text-teal font-mono mb-2">SERVICES</p>
          <h2 className="text-white mb-4">Comprehensive Project Solutions</h2>
          <div className="w-24 h-1 bg-teal/30 mx-auto"></div>
          <p className="text-gray-400 max-w-2xl mx-auto mt-6">
            We offer a wide range of technical and non-technical project solutions tailored to meet academic requirements while providing real-world value.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={index} className="card p-6 flex flex-col items-center text-center hover-glow group transition-all duration-300">
              <div className="mb-4 bg-teal/10 p-4 rounded-full group-hover:bg-teal/20 transition-all duration-300">
                <div className="text-teal">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-white text-xl mb-3 font-mono">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a href="#contact" className="btn-outline">
            Get Custom Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

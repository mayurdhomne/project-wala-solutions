
import { Code, Laptop, CheckCircle, Users } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: <Code className="w-6 h-6 text-teal" />,
      title: "High-Quality Code",
      description: "Well-documented and clean code that follows modern software engineering practices."
    },
    {
      icon: <Laptop className="w-6 h-6 text-teal" />,
      title: "Latest Technologies",
      description: "Projects built with the latest and most in-demand technologies in the industry."
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-teal" />,
      title: "Plagiarism Free",
      description: "100% original projects built from scratch, ensuring uniqueness and academic integrity."
    },
    {
      icon: <Users className="w-6 h-6 text-teal" />,
      title: "Expert Support",
      description: "Dedicated team of developers to help you understand your project for confident presentations."
    },
  ];
  
  return (
    <section id="about" className="section-padding bg-techblue-light">
      <div className="container-custom">
        <div className="text-center mb-16">
          <p className="text-teal font-mono mb-2">ABOUT US</p>
          <h2 className="text-white mb-4">The Smart Way to Complete Your Final Year Project</h2>
          <div className="w-24 h-1 bg-teal/30 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-white text-2xl mb-6 font-mono">
              Helping Students Succeed Since 2020
            </h3>
            
            <p className="text-gray-400 mb-6">
              Project Wala was founded with a simple mission: to help students overcome the challenges of creating high-quality academic projects while balancing other academic responsibilities.
            </p>
            
            <p className="text-gray-400 mb-6">
              Our team of experienced developers and academic professionals work together to deliver exceptional projects that not only meet academic standards but also provide valuable learning experiences for students.
            </p>
            
            <p className="text-gray-400 mb-6">
              We understand the pressure and time constraints students face, which is why we handle everything from concept development and coding to documentation and viva preparation.
            </p>
            
            <div className="mb-8 p-4 border-l-4 border-teal bg-techblue/40 rounded">
              <p className="text-teal italic">
                "Our vision is to be the bridge between academic requirements and practical industry skills, helping students create projects they can be proud of."
              </p>
              <p className="text-white mt-2">— Founder, Project Wala</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="card p-6 hover-glow">
                <div className="mb-4 bg-teal/10 inline-block p-3 rounded-lg">
                  {feature.icon}
                </div>
                <h4 className="text-white mb-3 font-mono">{feature.title}</h4>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;


import { ArrowRight } from 'lucide-react';
import TypingAnimation from '../TypingAnimation';

const HeroSection = () => {
  const typingTexts = [
    "Get Your Final Year Project Done, The Smart Way!",
    "Academic Projects That Stand Out From The Rest",
    "From Concept To Submission - We Handle It All",
    "Tech & Non-Tech Projects For Every Academic Need"
  ];

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 bg-techblue relative overflow-hidden">
      {/* Background decor */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-96 h-96 bg-teal/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-teal/5 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuLWNpcmN1aXQiIHg9IjAiIHk9IjAiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgcGF0dGVyblRyYW5zZm9ybT0icm90YXRlKDMwKSI+PGxpbmUgeDE9IjAiIHkxPSIwIiB4Mj0iNTAiIHkyPSI1MCIgc3Ryb2tlPSIjNjRGRkRBIiBzdHJva2Utb3BhY2l0eT0iMC4wMiIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjcGF0dGVybi1jaXJjdWl0KSIvPjwvc3ZnPg==')]"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="text-left">
            <div className="inline-block bg-teal/10 px-4 py-2 rounded-full mb-4">
              <p className="text-teal font-mono text-sm">Student-Friendly Academic Solutions</p>
            </div>
            <h1 className="mb-6 font-mono">
              <TypingAnimation 
                texts={typingTexts} 
                className="text-white" 
                typingSpeed={70}
              />
            </h1>
            <p className="text-gray-400 text-lg mb-8 max-w-lg">
              Project Wala specializes in delivering high-quality, ready-to-submit academic projects for students. 
              From IT software and mobile apps to full-stack web development and more.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="btn-primary">
                Explore Projects 
                <ArrowRight className="ml-2" size={18} />
              </a>
              <a href="#contact" className="btn-outline">
                Get in Touch
              </a>
            </div>
            
            <div className="mt-12 flex flex-wrap items-center gap-6">
              <p className="text-gray-500 font-mono">Trusted by students from:</p>
              <div className="flex flex-wrap gap-6">
                {['IIT', 'NIT', 'VIT', 'BITS', 'Amity'].map(university => (
                  <div key={university} className="text-gray-400 font-mono font-bold">
                    {university}
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="hidden lg:block relative">
            <div className="relative rounded-lg bg-techblue-light border border-teal/20 p-5 shadow-[0_0_25px_rgba(100,255,218,0.1)] hover-glow overflow-hidden">
              <div className="text-left text-sm whitespace-pre-wrap rounded-md p-4 bg-techblue-dark font-mono">
                <div className="text-gray-500 mb-3">// Project Wala - Final Year Project Generator</div>
                
                <div>
                  <span className="text-blue-400">import</span>{' '}
                  <span className="text-teal">{'{ ProjectBuilder }'}</span>{' '}
                  <span className="text-blue-400">from</span>{' '}
                  <span className="text-orange-300">'projectwala/core'</span>;
                </div>
                
                <div className="mt-1">
                  <span className="text-blue-400">import</span>{' '}
                  <span className="text-teal">{'{ TechStack, Documentation }'}</span>{' '}
                  <span className="text-blue-400">from</span>{' '}
                  <span className="text-orange-300">'projectwala/services'</span>;
                </div>
                
                <div className="mt-3">
                  <span className="text-purple-400">async function</span>{' '}
                  <span className="text-yellow-300">createYourProject</span>() {'{'}
                </div>
                
                <div className="ml-4 mt-1">
                  const project = <span className="text-yellow-300">new</span>{' '}
                  <span className="text-teal">ProjectBuilder</span>({'{'})
                </div>
                
                <div className="ml-8 mt-1">
                  name: <span className="text-orange-300">"Your Amazing Project"</span>,
                </div>
                
                <div className="ml-8">
                  type: <span className="text-teal">ProjectType</span>.FULL_STACK,
                </div>
                
                <div className="ml-8">
                  technologies: [<span className="text-orange-300">"React"</span>, <span className="text-orange-300">"Node.js"</span>],
                </div>
                
                <div className="ml-4 mt-1">{'});'}</div>
                
                <div className="ml-4 mt-2">
                  <span className="text-blue-400">await</span> project.addFeatures([
                </div>
                
                <div className="ml-8">
                  <span className="text-orange-300">"User Authentication"</span>,
                </div>
                
                <div className="ml-8">
                  <span className="text-orange-300">"Payment Gateway"</span>
                </div>
                
                <div className="ml-4">]);</div>
                
                <div className="ml-4 mt-2">
                  <span className="text-blue-400">return</span>{' '}
                  <span className="text-teal">Documentation</span>.generate(project);
                </div>
                
                <div className="mt-2">{'}'}</div>
                
                <div className="mt-3 text-teal">
                  // ✨ Your project will be ready for submission!
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-techblue-light to-transparent"></div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-teal/20 w-20 h-20 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

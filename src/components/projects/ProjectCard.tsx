
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  title: string;
  category: string;
  tech: string;
  image: string;
};

const ProjectCard = ({ title, category, tech, image }: ProjectCardProps) => {
  return (
    <div className="card overflow-hidden hover-glow group">
      <div className="h-48 overflow-hidden">
        <img 
          src={`${image}?auto=format&fit=crop&w=500&q=80`} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-teal font-mono text-sm">{category}</span>
        </div>
        <h3 className="text-white text-xl mb-2 font-mono">{title}</h3>
        <p className="text-gray-400 mb-4">Technologies: {tech}</p>
        <a href="#contact" className="text-teal font-mono hover:text-teal-light transition-colors duration-300 flex items-center">
          Request This Project
          <span className="ml-1">&rarr;</span>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;

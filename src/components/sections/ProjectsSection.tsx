
import ProjectCard from "../projects/ProjectCard";

const projects = [
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
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding bg-techblue-light">
      <div className="container-custom">
        <div className="text-center mb-16">
          <p className="text-teal font-mono mb-2">PROJECTS</p>
          <h2 className="text-white mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-teal/30 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

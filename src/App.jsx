import React, { useState, useEffect } from 'react';
import { Mail, Github, Linkedin, Code, Database, Brain, ChevronDown, ExternalLink } from 'lucide-react';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = [
    { name: 'Python', level: 95, color: 'from-blue-500 to-blue-700' },
    { name: 'Machine Learning', level: 90, color: 'from-purple-500 to-purple-700' },
    { name: 'Data Science', level: 88, color: 'from-green-500 to-green-700' },
    { name: 'JavaScript', level: 85, color: 'from-yellow-500 to-yellow-700' },
    { name: 'SQL', level: 80, color: 'from-indigo-500 to-indigo-700' },
  ];

  const projects = [
    {
      title: 'Car Acceptability Prediction',
      description: 'Built Random Forest and MLP models achieving 96.5% and 98.8% accuracy respectively using the UCI Car Evaluation dataset.',
      tech: ['Python', 'SMOTE', 'Optuna'],
      gradient: 'from-blue-600 via-purple-600 to-indigo-800',
      icon: '🚗',
      metrics: ['96.5% RF Accuracy', '98.8% MLP Accuracy']
    },
    {
      title: 'Pulsar Star Classification',
      description: 'Engineered Decision Tree classifier achieving 96.7% accuracy and 0.89 AUC on the HTRU2 dataset for pulsar identification.',
      tech: ['Python', 'Scikit-learn', 'ROC Analysis'],
      gradient: 'from-emerald-600 via-teal-600 to-cyan-800',
      icon: '⭐',
      metrics: ['96.7% Accuracy', '0.89 AUC Score']
    },
    {
      title: 'Fraud Detection System',
      description: 'Engineered fraud detection system achieving 95% precision rate, significantly reducing financial losses.',
      tech: ['Python', 'Machine Learning', 'Classification'],
      gradient: 'from-pink-600 via-rose-600 to-red-800',
      icon: '🛡️',
      metrics: ['95% Precision', '40% Loss Reduction']
    }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      {/* Fixed Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-xl border-b border-gray-800' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-cyan-400">
              Yonis Hassan
            </h1>
            <nav className="hidden md:flex space-x-8">
              <button 
                onClick={() => scrollToSection('about')} 
                className="text-gray-300 hover:text-cyan-400 transition-colors font-medium"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('projects')} 
                className="text-gray-300 hover:text-cyan-400 transition-colors font-medium"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="text-gray-300 hover:text-cyan-400 transition-colors font-medium"
              >
                Contact
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-1/4 left-1/2 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-4xl shadow-2xl transform hover:scale-110 transition-transform duration-300">
              🔬
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent leading-tight">
            Yonis Hassan
          </h1>
          
          <p className="text-xl md:text-2xl lg:text-3xl text-blue-200 mb-4 font-light">
            Data Scientist & AI Engineer
          </p>
          
          <p className="text-base md:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
            BSc Physics with Data Science at Queen Mary University of London. 
            Transforming complex data into intelligent solutions through cutting-edge machine learning and AI.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => scrollToSection('projects')}
              className="group px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full font-semibold text-white hover:from-cyan-500 hover:to-blue-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
            >
              View My Work
              <ChevronDown className="inline ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 border-2 border-cyan-500 rounded-full font-semibold text-cyan-500 hover:bg-cyan-500 hover:text-gray-900 transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-32 bg-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6">
              <div className="p-6 md:p-8 bg-gray-900 rounded-2xl border border-gray-700 hover:border-cyan-500 transition-all duration-300 transform hover:scale-105">
                <div className="flex items-center mb-4">
                  <Brain className="w-6 h-6 md:w-8 md:h-8 text-cyan-400 mr-3" />
                  <h3 className="text-xl md:text-2xl font-bold text-cyan-400">AI & Machine Learning</h3>
                </div>
                <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                  Passionate about leveraging cutting-edge AI and machine learning techniques to solve real-world problems. 
                  Experience with neural networks, deep learning, and predictive modeling.
                </p>
              </div>

              <div className="p-6 md:p-8 bg-gray-900 rounded-2xl border border-gray-700 hover:border-purple-500 transition-all duration-300 transform hover:scale-105">
                <div className="flex items-center mb-4">
                  <Database className="w-6 h-6 md:w-8 md:h-8 text-purple-400 mr-3" />
                  <h3 className="text-xl md:text-2xl font-bold text-purple-400">Data Science</h3>
                </div>
                <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                  Expert in extracting insights from complex datasets, statistical analysis, and data visualization. 
                  Specialized in building scalable data pipelines and predictive models.
                </p>
              </div>

              <div className="p-6 md:p-8 bg-gray-900 rounded-2xl border border-gray-700 hover:border-green-500 transition-all duration-300 transform hover:scale-105">
                <div className="flex items-center mb-4">
                  <Code className="w-6 h-6 md:w-8 md:h-8 text-green-400 mr-3" />
                  <h3 className="text-xl md:text-2xl font-bold text-green-400">Software Development</h3>
                </div>
                <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                  Full-stack development experience with modern frameworks and technologies. 
                  Building robust applications that bridge the gap between data science and user experience.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="text-center lg:text-left">
                <h3 className="text-2xl md:text-3xl font-bold mb-6 text-cyan-400">Skills & Expertise</h3>
                <p className="text-gray-300 mb-8 leading-relaxed text-sm md:text-base">
                  Data Science Intern at Infosys and AI Trainer at Outlier with proven track record in 
                  building high-performance machine learning models and delivering actionable insights.
                </p>
              </div>

              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={index} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium text-sm md:text-base">{skill.name}</span>
                      <span className="text-cyan-400 font-bold text-sm md:text-base">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 md:py-32 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mb-6"></div>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
              Discover my latest work in machine learning, data science, and AI applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-gray-800 border border-gray-700 hover:border-cyan-500 transition-all duration-500 transform hover:scale-105"
              >
                {/* Project Header */}
                <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center text-4xl md:text-6xl relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                  <div className="relative z-10 transform group-hover:scale-110 transition-transform duration-300">
                    {project.icon}
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex gap-2 flex-wrap">
                      {project.metrics.map((metric, i) => (
                        <span key={i} className="px-2 py-1 bg-black bg-opacity-30 rounded-full text-xs font-medium text-white">
                          {metric}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 md:p-8">
                  <h3 className="text-xl md:text-2xl font-bold mb-4 text-cyan-400 group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed text-sm md:text-base">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm border border-gray-600">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
                    <span className="font-medium text-sm md:text-base">View Project</span>
                    <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-5xl mx-auto text-center px-6">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              Ready to collaborate on exciting data science and AI projects? Let's build something amazing together.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <a
              href="mailto:yonishassan267@gmail.com"
              className="group p-6 md:p-8 bg-gray-800 rounded-2xl border border-gray-700 hover:border-cyan-500 transition-all duration-300 transform hover:scale-105"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-cyan-400 mb-2">Email</h3>
              <p className="text-gray-300 text-sm md:text-base">yonishassan267@gmail.com</p>
            </a>

            <a
              href="https://linkedin.com/in/yonishassan267"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 md:p-8 bg-gray-800 rounded-2xl border border-gray-700 hover:border-blue-500 transition-all duration-300 transform hover:scale-105"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Linkedin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-blue-400 mb-2">LinkedIn</h3>
              <p className="text-gray-300 text-sm md:text-base">Professional Network</p>
            </a>

            <a
              href="https://github.com/YonisHassan"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 md:p-8 bg-gray-800 rounded-2xl border border-gray-700 hover:border-purple-500 transition-all duration-300 transform hover:scale-105"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-700 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Github className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-purple-400 mb-2">GitHub</h3>
              <p className="text-gray-300 text-sm md:text-base">Code Repository</p>
            </a>
          </div>

          <div className="text-center">
            <p className="text-gray-400 mb-8 text-sm md:text-base">
              Currently open to new opportunities in data science, machine learning, and AI development.
            </p>
            <div className="flex justify-center">
              <div className="w-32 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
import React from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 p-1">
            <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center text-4xl font-bold text-gray-600">
              SB
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4 animate-fade-in">
            Sujit <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Baral</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-6 font-light">
            Computer Science Student & Full-Stack Developer
          </p>
          
          <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto leading-relaxed">
            Passionate about creating innovative solutions and building exceptional user experiences. 
            Currently pursuing my degree while working on exciting projects.
          </p>
          
          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://github.com/sujit-baral"
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
            >
              <Github className="w-6 h-6 text-gray-700 group-hover:text-blue-600 transition-colors" />
            </a>
            <a
              href="https://www.linkedin.com/in/contactsujitbaral"
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
            >
              <Linkedin className="w-6 h-6 text-gray-700 group-hover:text-blue-600 transition-colors" />
            </a>
            <a
              href="sujit124baral@gmail.com"
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
            >
              <Mail className="w-6 h-6 text-gray-700 group-hover:text-blue-600 transition-colors" />
            </a>
          </div>
          
          <button
            onClick={scrollToAbout}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Explore My Work
          </button>
        </div>
      </div>
      
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ChevronDown className="w-8 h-8 text-gray-400" />
      </button>
    </section>
  );
};

export default Hero;

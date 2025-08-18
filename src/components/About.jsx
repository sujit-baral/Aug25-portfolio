import React from 'react';
import { Code, Palette, Brain } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Clean Code",
      description: "Writing maintainable and scalable code following best practices"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Design Focused",
      description: "Creating beautiful interfaces that provide excellent user experiences"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Problem Solver",
      description: "Analytical thinking to solve complex challenges with innovative solutions"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            I'm a dedicated Computer Science student with a passion for technology and innovation. 
            My journey in programming started three years ago, and I've been constantly learning and growing ever since.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">My Story</h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Currently in my forth year of Computer Science at Gandhi Engineering College, I've developed a strong foundation 
              in website development, algorithms, and UI/UX design. My curiosity drives me to explore new 
              technologies and push the boundaries of what's possible.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              I believe in the power of technology to solve real-world problems and improve people's lives. 
              Whether it's building a web application, designing a mobile app, or working with data, 
              I approach every project with enthusiasm and attention to detail.
            </p>
            <p className="text-gray-600 leading-relaxed">
              When I'm not coding, you can find me reading tech blogs, contributing to open source projects, 
              or working on personal projects that challenge me to learn something new.
            </p>
          </div>
          
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center">
              <div className="w-64 h-64 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center text-white text-6xl font-bold">
                👨‍💻
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-2xl hover:bg-gradient-to-br hover:from-blue-50 hover:to-purple-50 transition-all duration-300 group"
            >
              <div className="text-blue-600 group-hover:text-purple-600 transition-colors duration-300 mb-4">
                {highlight.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{highlight.title}</h3>
              <p className="text-gray-600 leading-relaxed">{highlight.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

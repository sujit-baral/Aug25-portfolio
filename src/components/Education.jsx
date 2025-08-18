import React from 'react';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "Gandhi Engineering College",
      period: "2022 - 2026 (Expected)",
      description: "Focusing on software engineering, data structures, algorithms, and machine learning. Currently maintaining a 8.3 GPA.",
      achievements: ["Hackathon winner", "Programming Competition Winner", "Cricket Association Captain"]
    },
    {
      degree: "Higher Secondary Education",
      school: "Shakti Higher Secondary School",
      period: "2020 - 2022",
      description: "Graduated SJC with a focus on mathematics and computer science courses.",
      achievements: ["Valedictorian", "National Honor Society", "Computer Science Award"]
    }
  ];

  const certifications = [
    "AWS Cloud Practitioner",
    "Google Analytics Certified",
    "FreeCodeCamp Full Stack Developer",
    "MongoDB University Certification"
  ];

  return (
    <section id="education" className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Education & Achievements
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            My academic journey and continuous learning path in computer science and technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Academic Background */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <GraduationCap className="w-8 h-8 text-blue-600 mr-3" />
              Academic Background
            </h3>
            
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    {edu.degree}
                  </h4>
                  <p className="text-blue-600 font-medium mb-2">{edu.school}</p>
                  <p className="text-gray-500 text-sm mb-4">{edu.period}</p>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {edu.description}
                  </p>
                  
                  <div className="space-y-2">
                    {edu.achievements.map((achievement, achIndex) => (
                      <div
                        key={achIndex}
                        className="flex items-center text-sm text-gray-600"
                      >
                        <Award className="w-4 h-4 text-yellow-500 mr-2 flex-shrink-0" />
                        {achievement}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Learning */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <BookOpen className="w-8 h-8 text-purple-600 mr-3" />
              Certifications & Learning
            </h3>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg mb-8">
              <h4 className="text-xl font-bold text-gray-900 mb-6">
                Professional Certifications
              </h4>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="flex items-center bg-gray-50 rounded-lg p-3 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-300"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mr-3"></div>
                    <span className="text-gray-700 font-medium">{cert}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h4 className="text-xl font-bold text-gray-900 mb-6">
                Current Coursework
              </h4>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Data Structures",
                  "Web Development",
                  "Database Systems",
                  "Software Engineering",
                  "Machine Learning",
                  "Computer Networks"
                ].map((course, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg p-3 text-center text-gray-800 font-medium text-sm hover:from-blue-200 hover:to-purple-200 transition-all duration-300"
                  >
                    {course}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

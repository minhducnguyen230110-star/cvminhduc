import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Award, User, BookOpen, Code, Trophy, ChevronRight, Github, Linkedin } from 'lucide-react';

const CVWebsite = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50 transition-all duration-300">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold text-gray-800">Nguyen Minh Duc</div>
            <div className="hidden md:flex space-x-8">
              {['about', 'education', 'achievements', 'interests', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors duration-200 ${
                    activeSection === section ? 'text-blue-600 font-medium' : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Profile Picture - Centered at top */}
          <div className="flex justify-center mb-12">
            <div className="relative">
              <div className="w-40 h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden shadow-2xl border-4 border-white bg-gradient-to-br from-blue-100 to-indigo-200">
                <img 
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cdefs%3E%3ClinearGradient id='grad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%234F46E5;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%236366F1;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='200' height='200' fill='url(%23grad)' /%3E%3Ccircle cx='100' cy='85' r='25' fill='white' opacity='0.8' /%3E%3Cpath d='M75 130 L125 130 L115 150 L85 150 Z' fill='white' opacity='0.8' /%3E%3Ctext x='100' y='175' text-anchor='middle' fill='white' font-family='Arial, sans-serif' font-size='12' font-weight='bold'%3EAchievement Winner%3C/text%3E%3C/svg%3E"
                  alt="Nguyen Minh Duc - Profile Picture"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Achievement badge overlay */}
              <div className="absolute -bottom-2 -right-2 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                🏆 Winner
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-2 text-center lg:text-left">
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  Hi, I'm <span className="text-blue-600">Nguyen Minh Duc</span>
                </h1>
                <p className="text-xl text-gray-600">
                  Grade 10 Student at Le Khiet High School for the Gifted
                </p>
              </div>
              
              <p className="text-lg text-gray-700 leading-relaxed text-center lg:text-left">
                A passionate student with a strong foundation in academics and technology. 
                I excel in competitive programming, mathematics, and English competitions while 
                pursuing my interests in IT development and sports.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                >
                  Get In Touch <ChevronRight className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => scrollToSection('achievements')}
                  className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-all duration-200 flex items-center justify-center gap-2"
                >
                  View Achievements <Trophy className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-indigo-200 rounded-2xl p-8 shadow-xl">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-center space-x-3 mb-4">
                    <User className="w-5 h-5 text-blue-600" />
                    <span className="font-semibold text-gray-800">Quick Info</span>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-3">
                      <Phone className="w-4 h-4 text-gray-500" />
                      <span className="text-gray-700">0339910089</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="w-4 h-4 text-gray-500" />
                      <span className="text-gray-700">Da Nang, Vietnam</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <BookOpen className="w-4 h-4 text-gray-500" />
                      <span className="text-gray-700">Grade 10 Student</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className={`py-16 px-6 bg-white transition-all duration-700 ${isVisible.education ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Education</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-px bg-blue-200"></div>
              <div className="relative bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 ml-10 shadow-lg">
                <div className="absolute -left-6 top-8 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <BookOpen className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Le Khiet High School for the Gifted
                  </h3>
                  <p className="text-blue-600 font-medium mb-3">Grade 10 • Current</p>
                  <p className="text-gray-700 leading-relaxed">
                    Specialized high school education focusing on advanced academics and competitive learning. 
                    Developed strong analytical thinking, problem-solving skills, and academic excellence 
                    in a challenging environment designed for gifted students.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className={`py-16 px-6 transition-all duration-700 ${isVisible.achievements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Achievements</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                  <Award className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">IOE Competition</h3>
                  <p className="text-gray-600">International Olympiad of English</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Demonstrated exceptional English language proficiency and competed successfully 
                in this prestigious international competition, showcasing strong communication 
                and analytical skills.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                  <Trophy className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Kangaroo Mathematics</h3>
                  <p className="text-gray-600">Mathematical Competition</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Achieved recognition in the Kangaroo Mathematics Competition, demonstrating 
                strong mathematical reasoning, problem-solving abilities, and logical thinking 
                skills in a competitive environment.
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
              <Trophy className="w-4 h-4" />
              Multiple Competition Winner
            </div>
          </div>
        </div>
      </section>

      {/* Interests Section */}
      <section id="interests" className={`py-16 px-6 bg-white transition-all duration-700 ${isVisible.interests ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Interests & Skills</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-8 border border-green-100">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                    <div className="w-6 h-6 bg-green-600 rounded-full"></div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Football</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Passionate about football, developing teamwork, leadership, and physical fitness. 
                  Sports help me maintain a healthy work-life balance and teach valuable lessons 
                  about perseverance and strategic thinking.
                </p>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-100">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <Code className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">IT Development</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Actively developing IT applications and exploring various programming technologies. 
                  Passionate about creating innovative solutions and staying current with the latest 
                  developments in software development.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8 border border-purple-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Technical Skills</h3>
              <div className="space-y-4">
                {[
                  { skill: 'Problem Solving', level: 90 },
                  { skill: 'English Proficiency', level: 85 },
                  { skill: 'Mathematics', level: 88 },
                  { skill: 'IT Development', level: 75 },
                  { skill: 'Academic Research', level: 80 }
                ].map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium text-gray-700">{item.skill}</span>
                      <span className="text-sm text-gray-600">{item.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${item.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-16 px-6 bg-gradient-to-br from-blue-600 to-indigo-700 text-white transition-all duration-700 ${isVisible.contact ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
            <div className="w-20 h-1 bg-white mx-auto rounded-full"></div>
            <p className="mt-4 text-blue-100 max-w-2xl mx-auto">
              I'm always interested in new opportunities, collaborations, and conversations 
              about technology, academics, or sports. Feel free to reach out!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-center space-x-4 p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                <Phone className="w-6 h-6 text-blue-200" />
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-blue-100">0339910089</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                <MapPin className="w-6 h-6 text-blue-200" />
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-blue-100">Da Nang, Vietnam</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                <BookOpen className="w-6 h-6 text-blue-200" />
                <div>
                  <p className="font-medium">School</p>
                  <p className="text-blue-100">Le Khiet High School for the Gifted</p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 rounded-xl p-8 backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-4">Let's Connect</h3>
              <p className="text-blue-100 mb-6 leading-relaxed">
                Whether you want to discuss academic projects, IT development, 
                or just have a friendly chat about football, I'd love to hear from you.
              </p>
              <div className="flex space-x-4">
                <button className="flex items-center justify-center w-12 h-12 bg-white/20 rounded-lg hover:bg-white/30 transition-all duration-200">
                  <Github className="w-5 h-5" />
                </button>
                <button className="flex items-center justify-center w-12 h-12 bg-white/20 rounded-lg hover:bg-white/30 transition-all duration-200">
                  <Linkedin className="w-5 h-5" />
                </button>
                <button className="flex items-center justify-center w-12 h-12 bg-white/20 rounded-lg hover:bg-white/30 transition-all duration-200">
                  <Mail className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p>&copy; 2025 Nguyen Minh Duc. Built with React and passion for technology.</p>
        </div>
      </footer>
    </div>
  );
};

export default CVWebsite;

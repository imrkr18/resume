
import React from 'react';
import { Code2, Award, Globe, User } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="section-title text-center">About Me</h2>
        
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div className="md:w-1/2">
            <div className="prose max-w-none">
              <p className="text-lg mb-4">
                Hey there! I'm Kuldeep Gohel, a passionate Computer Science and Engineering graduate from Ahmedabad University
                with a keen interest in Full Stack Web Development and Competitive Programming.
              </p>
              
              <p className="text-lg mb-4">
                Currently, I'm thriving as a Software Developer at Injala, where I'm deeply involved in JavaScript, ReactJS, JQuery, and
                .NET Core 6 technologies. Collaborating across cross-functional teams, I've spearheaded the development of pioneering
                products, orchestrating their successful launch from ideation to implementation.
              </p>
              
              <p className="text-lg mb-4">
                With a solid foundation in software languages like C/C++, Python, and JavaScript, coupled with frameworks like
                ReactJS and tools like Git, I'm committed to pushing the boundaries of technology to craft innovative solutions.
              </p>
              
              <p className="text-lg mb-4">
                Beyond my professional endeavors, I've achieved notable milestones, including securing the 8th rank in All Gujarat
                with a 99.92 percentile in SSC and the 1st rank in the district in 12th-Science with a 99.60 percentile. Additionally, I've been
                recognized as a Merit Scholar and received the High Achiever Award at Injala for my exceptional dedication and
                outstanding results.
              </p>
              
              <p className="text-lg">
                Outside of work and academics, I'm deeply engaged in giving back to the community through volunteering.
                Previously, I've volunteered at the High On Life Foundation, dedicating my time to educate people about critical issues
                related to drugs and mental health, conducting surveys, data analysis, and presentations to raise awareness.
              </p>
            </div>
          </div>
          
          <div className="md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-100">
              <Code2 className="h-10 w-10 text-tech-blue mb-4" />
              <h3 className="text-xl font-bold mb-2">Software Development</h3>
              <p className="text-gray-600">
                Experienced in frontend and backend technologies, building scalable web applications.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-100">
              <Award className="h-10 w-10 text-tech-blue mb-4" />
              <h3 className="text-xl font-bold mb-2">Academic Excellence</h3>
              <p className="text-gray-600">
                Achieved top ranks in academics with strong percentiles in SSC and HSC.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-100">
              <User className="h-10 w-10 text-tech-blue mb-4" />
              <h3 className="text-xl font-bold mb-2">Problem Solver</h3>
              <p className="text-gray-600">
                Solved 550+ problems across different competitive programming platforms.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-100">
              <Globe className="h-10 w-10 text-tech-blue mb-4" />
              <h3 className="text-xl font-bold mb-2">Community Service</h3>
              <p className="text-gray-600">
                Volunteered to educate people about mental health and conducted research.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

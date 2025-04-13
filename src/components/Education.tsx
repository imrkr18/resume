
import React from 'react';
import { Calendar, Award } from 'lucide-react';

const Education: React.FC = () => {
  const education = [
    {
      institution: 'Ahmedabad University',
      degree: 'Bachelor of Technology - BTech, Computer Science',
      period: 'Jul 2019 - May 2023',
      location: 'Ahmedabad, IN'
    },
    {
      institution: 'Gangotri Schools',
      degree: 'HSC-Science (12th)',
      period: 'Mar 2018 - Mar 2019',
      location: 'Rajkot, IN',
      grade: '99.60 PR'
    },
    {
      institution: 'Gangotri Schools',
      degree: 'SSC (10th)',
      period: 'Mar 2016 - Mar 2017',
      location: 'Rajkot, IN',
      grade: '99.92 PR'
    }
  ];

  const certifications = [
    {
      title: 'ASP.NET Core MVC',
      issuer: 'TestDome',
      issued: 'Nov 2024',
      credential: 'a907efb34b834aa09a08f4003b46b6bd'
    },
    {
      title: 'Version Control by Meta',
      issuer: 'Meta',
      issued: 'Oct 2022',
      credential: '3J35KXV32VRL',
      skills: ['GitHub']
    },
    {
      title: 'Programming with JavaScript',
      issuer: 'Meta',
      issued: 'Sep 2022',
      credential: 'JILP63MGFWL4',
      skills: ['JavaScript']
    },
    {
      title: 'Introduction to Front-End Development by Meta',
      issuer: 'Meta',
      issued: 'Aug 2022',
      credential: 'H2RDPXD8JG8G',
      skills: ['React.js']
    },
    {
      title: 'Foundations for Big Data Analysis with SQL (with Honors)',
      issuer: 'Coursera',
      issued: 'May 2022',
      credential: 'SNAP8GJPC7QA'
    }
  ];

  const achievements = [
    {
      title: 'Academic Excellence',
      items: [
        'SSC (Gujarat Topper): Achieved an exceptional feat by securing the 8th Rank across All Gujarat with a 99.92 PR, demonstrating a strong academic foundation and consistent performance.',
        '12th-Science (District Topper): Secured the 1st Rank in the district during 12th Science with an impressive 99.60 PR.'
      ]
    },
    {
      title: 'Professional Recognition',
      items: [
        'High Achiever Award, Q3 2023 (Injala): Received the prestigious High Achiever Award for the third quarter of 2023 at Injala highlighting my ability to consistently deliver high-quality work, contributing significantly to the success of your team and organization'
      ]
    },
    {
      title: 'Competitive Programming',
      items: [
        'Solved more than 550+ Problems across different platform (Leetcode, GFG, Code Chef, Hacker Rank)'
      ]
    }
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="section-title text-center">Education & Achievements</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-10">
          <div>
            <h3 className="text-2xl font-bold text-tech-blue mb-6">Education</h3>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-100">
                  <h4 className="text-lg font-bold">{edu.institution}</h4>
                  <p className="text-gray-700 font-medium">{edu.degree}</p>
                  
                  <div className="mt-2 flex items-center text-gray-600">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{edu.period}</span>
                  </div>
                  
                  <p className="mt-1 text-gray-600">{edu.location}</p>
                  
                  {edu.grade && (
                    <div className="mt-2 flex items-center">
                      <Award className="h-4 w-4 mr-2 text-tech-purple" />
                      <span className="font-medium text-tech-purple">Grade: {edu.grade}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-bold text-tech-blue mb-6 mt-12">Achievements</h3>
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-100">
                  <h4 className="text-lg font-bold mb-3">{achievement.title}</h4>
                  <ul className="list-disc list-inside space-y-2">
                    {achievement.items.map((item, i) => (
                      <li key={i} className="text-gray-700">{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-tech-blue mb-6">Certifications & Licenses</h3>
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-100">
                  <h4 className="text-lg font-bold">{cert.title}</h4>
                  <p className="text-gray-700">{cert.issuer}</p>
                  
                  <div className="mt-2 flex items-center text-gray-600">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>Issued {cert.issued}</span>
                  </div>
                  
                  <p className="mt-1 text-sm text-gray-500">Credential ID {cert.credential}</p>
                  
                  {cert.skills && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {cert.skills.map((skill, i) => (
                        <span key={i} className="tech-badge">{skill}</span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

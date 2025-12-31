
import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Software Engineer',
      company: 'Positiwise Infotech Pvt Ltd',
      location: 'Ahmedabad, Gujarat, India',
      period: 'Sep 2025 - Present',
      description: [
        "Migrated company's central REST API from .NET Framework to .NET Core within 2 weeks, serving as the backbone for all product lines across the organization.",
        "Optimized API performance to handle 12,000+ requests/minute through architectural improvements, efficient data access patterns, and robust memory management.",
        "Reduced memory consumption by 85% during peak loads through comprehensive code refactoring and proper resource disposal mechanisms ensuring 99.9% uptime and reliability for all dependent products.",
        "Improved API response time by 60% by restructuring data access layers, optimizing database queries, and implementing caching strategies."
      ],
      technologies: ['.NET Core', '.NET Framework', 'C#', 'SQL', 'Dapper', 'Dependency Injection', 'RESTful API', 'Performance Optimization']
    },
    {
      title: 'Software Developer I',
      company: 'Injala',
      location: 'Ahmedabad, Gujarat, India',
      period: 'August 2023 - Present',
      description: [
        'Backend Development: Engineered scalable and secure backend architectures for critical modules, including Document Storage and Sharing, optimizing data management and collaboration across the organization.',
        'Audit Management: Implemented comprehensive audit management systems to track and log all user CRUD activities, significantly improving transparency, compliance, and accountability within the application.',
        'Data Security & Segmentation: Developed dynamic modules to display user-specific data tailored to departmental affiliations, while enhancing security by managing user access rights through customizable security groups.',
        'Mobile API Integration: Delivered robust Mobile API support, facilitating seamless and efficient integration between mobile applications and backend systems, ensuring consistent user experiences across platforms.',
        'Played a pivotal role in guiding the successful launch of a pioneering product.'
      ],
      technologies: ['.NET Core 6/8', 'ASP.NET Web API', 'ASP.NET MVC', 'JavaScript', 'MSSQL', 'Entity Framework', 'jQuery', 'HTML5']
    },
    {
      title: 'Software Developer - Intern',
      company: 'Injala',
      location: 'Ahmedabad, Gujarat, India',
      period: 'Jan 2023 - July 2023',
      description: [
        'Undertook training in various technologies, including .NET Core 6, ASP.NET MVC, ASP.NET Web API, and SQL, gaining a solid foundation in backend development.',
        'Worked on minor projects under the guidance of senior developers, gaining hands-on experience with real-world applications.',
        'Contributed to the Wrap Portal 6 by enhancing the Action Item Module, collaborating effectively with the team to meet deliverables.',
        'Worked across two products, Wrap Portal and Anzenn, acquiring insights into product development and lifecycle management.'
      ],
      technologies: ['JavaScript', 'ASP.NET MVC', 'jQuery', 'SQL', '.NET Core 6', 'ASP.NET Web API', 'Angular', 'TypeScript']
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="section-title text-center">Work Experience</h2>

        <div className="mt-10 space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-tech-blue">{exp.title}</h3>
                  <h4 className="text-lg font-medium">{exp.company}</h4>
                </div>
                <div className="mt-2 md:mt-0 text-gray-600 flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{exp.period}</span>
                </div>
              </div>

              <div className="flex items-center text-gray-600 mb-4">
                <MapPin className="h-4 w-4 mr-2" />
                <span>{exp.location}</span>
              </div>

              <div className="mt-4">
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {exp.technologies.map((tech, i) => (
                  <span key={i} className="tech-badge">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;


import React from 'react';

const Skills: React.FC = () => {
  const skillsCategories = [
    {
      title: 'Programming Languages',
      skills: ['C/C++', 'C#', 'JavaScript', '.Net', 'Python', 'Java', 'SQL', 'TypeScript', 'LINQ']
    },
    {
      title: 'Web Technologies',
      skills: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Tailwind', 'XML', 'jQuery', 'AJAX', 'JSON']
    },
    {
      title: 'Frameworks',
      skills: ['.NET', '.Net Core', 'ReactJS', 'NodeJS', 'Angular', 'Angular CLI', 'ASP.NET MVC', 'ASP.NET Web API', 'ASP.NET Core', 'Entity Framework']
    },
    {
      title: 'Databases',
      skills: ['MySQL', 'Microsoft SQL Server', 'MongoDB', 'Azure SQL', 'Data Modeling', 'Data Architecture']
    },
    {
      title: 'Version Control Tools',
      skills: ['Git', 'GitHub', 'Branching', 'Merging', 'Code Reviews', 'Version Management']
    },
    {
      title: 'Development Tools',
      skills: ['Visual Studio Code', 'Visual Studio', 'Figma', 'Adobe', 'Jupyter Notebook', 'SQL Server Management Studio']
    },
    {
      title: 'Soft Skills',
      skills: ['Problem Solving', 'Team Management', 'Communication', 'Teamwork', 'Creative Problem Solving', 'Leadership', 'Time Management', 'Adaptability', 'Critical Thinking', 'Attention to Detail']
    },
    {
      title: 'Cloud & Deployment',
      skills: ['Azure', 'Azure Blob Storage', 'CI/CD', 'RESTful APIs']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="section-title text-center">Skills</h2>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsCategories.map((category, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-tech-blue mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span 
                    key={i} 
                    className="bg-tech-light-purple/10 text-tech-purple py-1 px-3 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

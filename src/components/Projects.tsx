
import React from 'react';
import { ExternalLink, Github, Calendar } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'RiskGuru - Coverage Check and Document Storage',
      period: 'Oct 2023 - Present',
      association: 'Associated with Injala',
      description: 'RiskGuru features a powerful Coverage Check tool for Policies and Contracts, a robust Document Storage module where users can store, share, and manage access to documents.',
      modules: [
        {
          title: 'Coverage Standard Module',
          description: 'Worked in this as a major feature, allowing users to efficiently create a standard so they can perform coverage checks on policies and contracts, ensuring compliance and thoroughness in their operations.'
        },
        {
          title: 'Security Group & Department Modules',
          description: 'I designed and implemented these modules to handle system-wide access management and data organization. The Security Group module empowers admins to define and manage user permissions, while the Department module structures data department-wise, ensuring secure and efficient access.'
        },
        {
          title: 'Support Request System',
          description: 'I developed a Support Request System that integrates seamlessly with our backend, allowing users to raise and track support issues efficiently. This involved designing the frontend interface and backend logic to ensure smooth and effective issue resolution.'
        },
        {
          title: 'Document Storage System',
          description: 'Leveraging Azure Blob Storage, I implemented a robust document storage solution that allows users to securely store, manage, and share documents. I also designed a comprehensive access control system by architecting the database tables in a way that allows fine-grained security permissions.'
        },
        {
          title: 'Feed Module',
          description: 'To monitor user activities within the system, I developed a Feed module. This involved designing a normalized database schema to store activity logs and writing complex SQL stored procedures to process and retrieve data in real-time, providing crucial insights into user behavior.'
        }
      ],
      technologies: ['Back-End Web Development', 'Front-End Development', '.NET Core', 'SQL', 'C#', 'Entity Framework', 'jQuery'],
      image: null
    },
    {
      title: 'Track Crypto',
      period: 'Jul 2023',
      association: 'Associated with Ahmedabad University',
      description: 'TrackCrypto, a comprehensive platform that allows users to search for cryptocurrencies globally and access vital market data like rank, market cap, current price, charts, and 24-hour changes. TrackCrypto also keeps users informed with the latest, crucial cryptocurrency news. Perfect for anyone looking to stay on top of the crypto world!',
      github: 'https://github.com/imrkr18/trackCrypto',
      technologies: ['Front-End Development', 'JavaScript', 'ReactJS', 'REST APIs'],
      image: '/lovable-uploads/2260f139-43f7-42f1-98a8-56d3403e04aa.png'
    },
    {
      title: 'CordIT-Messenger',
      period: 'Apr 2022',
      description: 'A real-time chat application using the MERN stack (MongoDB, Express, React, Node.js) and Firebase. Users can easily sign up or sign in to start chatting instantly. Using Firebase\'s real-time database ensures seamless message delivery, providing a responsive and engaging user experience.',
      github: 'https://github.com/imrkr18/cordit-messenger',
      technologies: ['JavaScript', 'ReactJS', 'Firebase', 'HTML', 'CSS'],
      image: null
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="section-title text-center">Projects</h2>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="project-card flex flex-col h-full">
              {project.image && (
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              )}

              <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-tech-blue">{project.title}</h3>
                </div>

                <div className="flex items-center text-gray-500 mb-2">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span className="text-sm">{project.period}</span>
                </div>

                {project.association && (
                  <div className="mb-4">
                    <span className="text-sm text-gray-600">{project.association}</span>
                  </div>
                )}

                <p className="text-gray-700 mb-4 flex-1">{project.description}</p>

                {project.modules && (
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Key Features:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                      {project.modules.map((module, i) => (
                        <li key={i} className="mb-2">
                          <span className="font-medium">{module.title}</span>: {module.description}
                        </li>
                      )).slice(0, 2)}
                      {project.modules.length > 2 && (
                        <li className="text-tech-purple font-medium">+ {project.modules.length - 2} more features</li>
                      )}
                    </ul>
                  </div>
                )}

                <div className="mt-4 flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, i) => (
                    <span key={i} className="tech-badge">{tech}</span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="tech-badge">+{project.technologies.length - 3} more</span>
                  )}
                </div>

                {project.github && (
                  <div className="mt-auto pt-4 flex justify-end">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-tech-blue hover:text-tech-purple transition-colors flex items-center"
                      aria-label="View project on GitHub"
                    >
                      <Github className="h-5 w-5 mr-2" />
                      <span>View on GitHub</span>
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

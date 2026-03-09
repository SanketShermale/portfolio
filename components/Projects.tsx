import Link from 'next/link';

const Projects = () => {
  const projects = [
    {
      title: 'Smart Bus ETA Prediction System',
      description: 'An intelligent system that predicts bus arrival times using machine learning algorithms, providing interactive route visualization and passenger-friendly features without GPS dependency. Offers a cost-effective solution for improving public transport usability in tier-2 cities.',
      image: '/globe.svg',
      technologies: ['Machine Learning', 'Python', 'Data Analysis'],
      status: 'Completed',
      slug: 'smart-bus-eta-prediction-system'
    },
    {
      title: 'AI-Assisted Visual Security Intelligence System',
      description: 'A privacy-preserving security system that analyzes visual behavior and object interactions to support human decision-making in public safety environments. Uses advanced AI algorithms to enhance security monitoring while maintaining user privacy.',
      image: '/window.svg',
      technologies: ['AI/ML', 'Computer Vision', 'Python'],
      status: 'In Development',
      slug: 'ai-assisted-visual-security-intelligence-system'
    },
    {
      title: 'AI-Based Content Detection System',
      description: 'An automated content monitoring system that helps improve safety and compliance, reduces manual effort, and ensures a better and more secure user experience. Uses machine learning algorithms to detect and categorize content in real-time.',
      image: '/file.svg',
      technologies: ['Machine Learning', 'NLP', 'Python'],
      status: 'Completed'
    },
    {
      title: 'Dynamic Heat Stress Mapper System',
      description: 'A responsive system that dynamically maps heat stress by combining environmental data, physiological indicators, and location-based information. Unlike static heat maps, it continuously updates conditions based on real-time inputs, making it highly responsive to changes in weather, workload, and human activity.',
      image: '/next.svg',
      technologies: ['Data Science', 'IoT', 'Real-time Analytics'],
      status: 'Completed'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Innovative solutions built with cutting-edge technologies, focusing on real-world applications
            and user-centric design
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <img src={project.image} alt={project.title} className="w-8 h-8 filter brightness-0 invert" />
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    project.status === 'Completed'
                      ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                      : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                  }`}>
                    {project.status}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">{project.description}</p>
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                {project.slug ? (
                  <Link href={`/projects/${project.slug}`}>
                    <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                      View Details
                    </button>
                  </Link>
                ) : (
                  <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                    View Details
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-semibold mb-4">Project Statistics</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">4+</div>
                <div className="text-sm opacity-90">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">ML/AI</div>
                <div className="text-sm opacity-90">Focus Areas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">Real-world</div>
                <div className="text-sm opacity-90">Applications</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">Innovation</div>
                <div className="text-sm opacity-90">Driven Solutions</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

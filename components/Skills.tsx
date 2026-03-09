const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'C', level: 85 },
        { name: 'C++', level: 80 },
        { name: 'Java', level: 75 },
        { name: 'Python', level: 90 }
      ]
    },
    {
      title: 'Web Technologies',
      skills: [
        { name: 'HTML', level: 90 },
        { name: 'CSS', level: 85 },
        { name: 'JavaScript', level: 80 }
      ]
    },
    {
      title: 'AI & ML',
      skills: [
        { name: 'Machine Learning', level: 85 },
        { name: 'Data Science', level: 80 },
        { name: 'NumPy', level: 85 },
        { name: 'Pandas', level: 85 }
      ]
    },
    {
      title: 'Tools & Databases',
      skills: [
        { name: 'MySQL', level: 75 },
        { name: 'Git', level: 85 },
        { name: 'GitHub', level: 85 },
        { name: 'VS Code', level: 90 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Technical expertise gained through academic projects, internships, and continuous learning
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-semibold mb-4">Certifications & Achievements</h3>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="font-semibold mb-2">🏆 Achievements</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Team Hack Fusion: 7th position in competitive hackathon</li>
                  <li>• Training and Placement Coordinator at JSPM's RSCOE</li>
                  <li>• Internship at SR India Pvt. Ltd. - Python Development</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">📜 Certifications</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Software Design and Python Programming</li>
                  <li>• Data Structures and Algorithms</li>
                  <li>• 4+ real-world ML projects completed</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

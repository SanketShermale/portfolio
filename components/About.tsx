const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                I am a driven Information Technology Engineering student with a strong passion for
                software development, problem-solving, and emerging technologies like AI and ML. I
                combine technical skills with leadership experience to build innovative, real-world solutions
                while continuously learning and growing as a developer.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies,
                contributing to open-source projects, or enjoying outdoor activities.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Education</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    JSPM's Rajarshi Shahu College of Engineering, Pune
                  </h4>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">Information Technology Engineering</p>
                  <p className="text-gray-600 dark:text-gray-400">2023 - 2027 | CGPA: 9.52*</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Sahyadri International Junior College
                  </h4>
                  <p className="text-purple-600 dark:text-purple-400 font-medium">Higher Secondary Education</p>
                  <p className="text-gray-600 dark:text-gray-400">2021 - 2023 | Percentage: 75%</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Anand Vidyala
                  </h4>
                  <p className="text-green-600 dark:text-green-400 font-medium">Primary & Secondary Education</p>
                  <p className="text-gray-600 dark:text-gray-400">2010 - 2021 | Percentage: 88.60%</p>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center space-y-8">
            <div className="relative">
              <img
                src="/sanket.jpg"
                alt="Sanket Shermale"
                className="w-80 h-80 rounded-2xl mx-auto object-cover shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-white text-2xl font-bold">IT</span>
              </div>
            </div>
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-semibold mb-4">Quick Facts</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">4+</div>
                  <div className="text-sm opacity-90">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">7th</div>
                  <div className="text-sm opacity-90">Hackathon Position</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">AI/ML</div>
                  <div className="text-sm opacity-90">Specialization</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">Pune</div>
                  <div className="text-sm opacity-90">Location</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

import Image from 'next/image';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 text-white py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="mb-8">
          <Image
            src="/sanket.jpg"
            alt="Sanket Shermale Profile"
            width={180}
            height={180}
            className="rounded-full mx-auto mb-6 border-4 border-white shadow-2xl"
          />
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
          Hi, I'm Sanket Shermale
        </h1>
        <p className="text-xl md:text-2xl mb-6 text-blue-100">
          Software Engineering Student & AI/ML Enthusiast
        </p>
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-gray-200 leading-relaxed">
          Driven Information Technology Engineering student with a passion for software development,
          problem-solving, and emerging technologies like AI and ML.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#contact"
            className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Get In Touch
          </a>
          <a
            href="#projects"
            className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            View My Work
          </a>
        </div>
        <div className="mt-12 flex justify-center space-x-6">
          <a href="https://www.linkedin.com/in/sanket-ramdas-shermale-634678289" target="_blank" rel="noopener noreferrer"
             className="text-white hover:text-blue-300 transition duration-300 text-2xl">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a href="mailto:sanketshermale9@gmail.com"
             className="text-white hover:text-blue-300 transition duration-300 text-2xl">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
          </a>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent dark:from-gray-900"></div>
    </section>
  );
};

export default Hero;

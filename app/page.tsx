import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import MotionWrapper from '../components/MotionWrapper';

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      <MotionWrapper>
        <Hero />
      </MotionWrapper>
      <MotionWrapper delay={0.2}>
        <About />
      </MotionWrapper>
      <MotionWrapper delay={0.4}>
        <Skills />
      </MotionWrapper>
      <MotionWrapper delay={0.6}>
        <Projects />
      </MotionWrapper>
      <MotionWrapper delay={0.8}>
        <Contact />
      </MotionWrapper>
    </div>
  );
}

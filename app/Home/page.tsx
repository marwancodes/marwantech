import About from './About/About';
import Experience from './Experience/Experience';
import Hero from './Hero/Hero';
import Projects from './Projects/Projects';

const HomePage = () => {
  return (
    <div>
        <Hero />
        <About />
        <Projects />
        <Experience />
    </div>
  )
}

export default HomePage;
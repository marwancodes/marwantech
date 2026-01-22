import Hero from './Hero/Hero';
import About from './About/About';
import Experience from './Experience/Experience';
import Projects from './Projects/Projects';
import Testimonials from './Testimoniels/Testimonials';
import Contact from './Contact/Contact';

const HomePage = () => {
  return (
    <div>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Testimonials />
        <Contact />
    </div>
  )
}

export default HomePage;
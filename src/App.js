import logo from './logo.svg';
import './App.css';
import Designation from "./Components/Designation/Designation";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCat } from '@fortawesome/free-solid-svg-icons';  // For solid style icons
import { faCoffee, faTruck, faMessage, faUser, faBriefcase ,faGear, faBookOpen, faBarsProgress } from '@fortawesome/free-solid-svg-icons';  // Another example
import Projects from './Components/Projects/Projects';
import Skills from './Components/Skills/Skills';
import Education from './Components/Education/Education';
import WorkExperience from './Components/WorkExperience/WorkExperience';
import Contact from './Components/Contact/Contact';
import nuTransparent from './nuTrans.png';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <div className="Navigator">
        <Navbar />
        {/* <span className='NavBut Img'><img src={nuTransparent}></img> </span> */}
        {/* <span className='NavBut'><h2>About Me</h2> </span>
        <span className='NavBut'><h2>Projects</h2> </span>
        <span className='NavBut'><h2>Skills</h2> </span>
        <span className='NavBut'><h2>Education</h2> </span>
        <span className='NavBut'><h2>Work Experience</h2> </span>
        <span className='NavBut'><h2>Contact</h2> </span> */}
      </div>
      
      <br></br>

      <section id="designation">
        <Designation />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <br></br>

      <section id="skills">
        <Skills />
      </section>

      <br></br>
      <br></br>

      <section id="education">
        <Education />
      </section>

      <br></br>
      <br></br>

      <section id="workexperience">
        <WorkExperience />
      </section>

      <br></br>
      <br></br>

      <section id="contact">
        <Contact />
      </section>

      <br></br>

    </div>
  );
}

export default App;
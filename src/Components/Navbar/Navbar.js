import { Link } from 'react-scroll';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="designation" smooth={true} duration={500} offset={-100}>About Me</Link>
      <Link to="projects" smooth={true} duration={500} offset={-100}>Projects</Link>
      <Link to="skills" smooth={true} duration={500} offset={-100}>Skills</Link>
      <Link to="education" smooth={true} duration={500} offset={-100}>Education</Link>
      <Link to="workexperience" smooth={true} duration={500} offset={-100}>Work Experience</Link>
      <Link to="contact" smooth={true} duration={500} offset={-100}>Contact</Link>
    </nav>
  );
}


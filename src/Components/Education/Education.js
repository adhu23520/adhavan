import "./Education.css";
import nuImage from './Images/nu.png'; // Adjust the path as necessary
import psgImage from './Images/psg.png'; // Adjust the path as necessary

export default function Education() {
    return(
        <div className="Education">
            <h1 className="subHeading">Education:</h1>
            
            
            <div className="education grad">
                <img className="eduImage nu" src={nuImage} alt="Northeastern University"/>
                <div className="eduDetails grad">
                    <h1>Northeastern University</h1>
                    <h1>Khoury College of Computer Science</h1>
                    <h2>Master of Science in Computer Science</h2>
                    <h3>GPA: 3.4/4.0</h3>
                    <h3><i>Relevant Coursework:</i> Program Design Paradigm, Algorithms, DBMS, Web Development, Fundamentals of Artificial Intelligence, Mobile Application Development</h3>
                </div>
                
            </div>

            <div className="education undergrad">
                <img className="eduImage psg" src={psgImage} alt="PSG College of Technology"/>
                <div className="eduDetails undergrad">
                    <h1>PSG College of Technology</h1>
                    <h1>Department of Computer Science and Engineering</h1>
                    <h2>Bachelor of Engineering in Computer Science</h2>
                    <h3>GPA: 8.0/10.0</h3>
                    <h3><i>Relevant Coursework:</i> Design and Analysis of Algorithms, Software Engineering, Machine Learning, Artificial Intelligence</h3>
                </div>

            </div>


        </div>
    )
}
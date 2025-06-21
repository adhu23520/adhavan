import "./Skills.css";
// ----------------Languages and Frameworks:----------------
import javaImage from './Images/languagesAndFrameworks/java.webp';
import pythonImage from './Images/languagesAndFrameworks/python.png';
import cppImage from './Images/languagesAndFrameworks/cpp.png';
import cImage from './Images/languagesAndFrameworks/c.png';
import jsImage from './Images/languagesAndFrameworks/js.png';
import reactImage from './Images/languagesAndFrameworks/react.png';
import nodeImage from './Images/languagesAndFrameworks/node.png';
import springbootImage from './Images/languagesAndFrameworks/springboot.png';
import sqlImage from './Images/languagesAndFrameworks/sql.png';
// ----------------Databases and Libraries:----------------
import mongodbImage from './Images/databasesAndLibraries/mongodb.png';
import firebaseImage from './Images/databasesAndLibraries/firebase.png';
import axiosImage from './Images/databasesAndLibraries/axios.webp';
import opencvImage from './Images/databasesAndLibraries/opencv.png';
// ----------------Tools and Infrastructure:----------------
import postmanImage from './Images/toolsAndInfrastructure/postman.png';
import gitImage from './Images/toolsAndInfrastructure/git.png';
import jiraImage from './Images/toolsAndInfrastructure/jira.png';
import dockerImage from './Images/toolsAndInfrastructure/docker.png';
import androidstudioImage from './Images/toolsAndInfrastructure/androidstudio.png';
import codemagicImage from './Images/toolsAndInfrastructure/codemagic.png';
// ----------------Testing and Methodologies:----------------
import agileImage from './Images/testingAndMethodologies/agile.png';
import scrumImage from './Images/testingAndMethodologies/scrum.png';
import junitImage from './Images/testingAndMethodologies/junit.png';
import seleniumImage from './Images/testingAndMethodologies/selenium.png';


export default function Skills() {
    return(
        <div className="skills">

            <h1 className="subHeading">Skills:</h1>

{/* ----------------Languages and Frameworks:---------------- */}
            <h2>Languages and Frameworks:</h2>
            <span className="L&F java">
                <img className="skillImage" src={javaImage} alt="Java" /> 
            </span>
            <span className="L&F python">
                <img className="skillImage" src={pythonImage} alt="Python" />
            </span>
            <span className="L&F c++">
                <img className="skillImage" src={cppImage} alt="C++" />
            </span>
            <span className="L&F c">
                <img className="skillImage" src={cImage} alt="C" />
            </span>
            <span className="L&F js">
                <img className="skillImage" src={jsImage} alt="JavaScript" />
            </span>
            <span className="L&F react">
                <img className="skillImage" src={reactImage} alt="React" />
            </span>
            <span className="L&F node">
                <img className="skillImage" src={nodeImage} alt="Node.js" />
            </span>
            <span className="L&F springboot">
                <img className="skillImage" src={springbootImage} alt="Spring Boot" />
            </span>
            <span className="L&F sql">
                <img className="skillImage" src={sqlImage} alt="SQL" />
            </span>

{/* ----------------Databases and Libraries:---------------- */}
            <h2>Databases and Libraries:</h2>
            <span className="D&L mongodb">
                <img className="skillImage" src={mongodbImage} alt="Mongodb" />
            </span>
            <span className="D&L mysql">
                <img className="skillImage" src={sqlImage} alt="MySQL" />
            </span>
            <span>
                <img className="skillImage" src={firebaseImage} alt="Firebase" />
            </span>
            <span>
                <img className="skillImage" src={axiosImage} alt="Axios" />
            </span>
            <span>
                <img className="skillImage" src={opencvImage} alt="OpenCV" />
            </span>

{/* ----------------Tools and Infrastructure:---------------- */}
            <h2>Tools and Infrastructure:</h2>
            <span>
                <img className="skillImage" src={postmanImage} alt="Postman" />
            </span>
            <span>
                <img className="skillImage" src={gitImage} alt="Git" />
            </span>
            <span>
                <img className="skillImage" src={jiraImage} alt="Jira" />
            </span>
            <span>
                <img className="skillImage" src={dockerImage} alt="Docker" />
            </span>
            <span>
                <img className="skillImage" src={androidstudioImage} alt="Android Studio" />
            </span>
            <span>
                <img className="skillImage" src={codemagicImage} alt="Codemagic" />
            </span>

{/* ----------------Testing and Methodologies:---------------- */}
            <h2>Testing and Methodologies:</h2>
            <span>
                <img className="skillImage" src={agileImage} alt="Agile" />
            </span>
            <span>
                <img className="skillImage" src={scrumImage} alt="Scrum" />
            </span>
            <span>
                <img className="skillImage" src={junitImage} alt="JUnit" />
            </span>
            <span>
                <img className="skillImage" src={seleniumImage} alt="Selenium" />
            </span>
            
        </div>
    )
}
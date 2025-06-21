import "./Contact.css";
import githubImage from "./Images/github.png";
import linkedinImage from "./Images/linkedin.png";
import handshakeImage from "./Images/handshake.jpg";
import resumeImage from "./Images/resume.png";
import { FaPhone, FaEnvelope } from "react-icons/fa";

export default function () {
    return(
        <div className="Contact">
            <h1 className="contactCatchLine">Lets Work Together!</h1>
            <h4>You can reach out to me at:</h4>
            <span className="contect email"><FaEnvelope/>    alexander.ad@northeastern.edu</span>
            <br></br>
            <br></br>
            <span className="contect phone"><FaPhone />    +1 (617) 238-4611</span>
            <h4>More Links:</h4>
            <a href="https://github.com/adhu23520"><img className="ContactImage" src={githubImage} /></a>
            <a href="https://www.linkedin.com/in/adhavanalexander/"><img className="ContactImage" src={linkedinImage} /></a>
            <a href="https://app.joinhandshake.com/profiles/cs64xq"><img className="ContactImage" src={handshakeImage} /></a>
            {/* <a href=""><img className="ContactImage" src={resumeImage} /></a> */}
            

        </div>
    )
}
import "./Designation.css"
import { FaHandPeace } from "react-icons/fa";
import myImage from './Cropped_LinkedIn_Photo_copy.jpg';
import { FaEnvelope, FaPhone } from "react-icons/fa";

export default function Designation() {
    return (
      <div 
      className="designation"
        style={{
        fontFamily: 'NType82-Headline',
        marginRight: '100px',
        }}>
        <div className="faceCard">
        <img src={myImage}
        style={{ width: '400px', height: '400px', borderRadius: '50%' }}
        />
        <p>
          <h1 className="summ">
          Adhavan Alexander
          </h1>
          <h3 className="designations"> Software Developer <br></br> Full-Stack Developer <br></br> UI/UX Designer </h3>
        </p>
        <h3><span className="contect email"><FaEnvelope/>    alexander.ad@northeastern.edu</span></h3>
            <h3><span className="contect phone"><FaPhone />    +1 (617) 238-4611</span></h3>
        </div>
        
        <div>
          <p className="catchline">
          <h1>Clean Code. Complex Problems Solved.</h1>
          </p>
        <p>
          <h3 className="summary">
          👋Hello everyone! I’m a Master’s graduate in Computer Science from Northeastern University and I am a highly motivated and dependable professional with a diverse background in Software Development. I bring a strong work ethic, adaptability, and a commitment to excellence. With a proven track record of reliability and a dedication to continuous learning, I am now seeking a position that offers growth opportunities and the potential for career advancement within a forward-thinking organization. I am enthusiastic about contributing my skills to ensure the highest standards in the Software Development domain.
          </h3>
        </p>
        </div>
      </div>
    );
}
import "./WorkExperience.css";
import o9Image from "./Images/o9.png"; 

export default function WorkExperience(){
    return(
        <div className="Experience">
            <h1 className="subHeading">Work Experience:</h1>
            <div className="workExperience">
                <img className="workImage o9" src={o9Image} alt="o9 Solutions Inc."/>
                <div className="workDetails">
                <h1>Business Operations Specialist at o9 Solutions Inc.</h1>
                <h2>Aug 2022 - Jul 2023</h2>
                <ul>
                    <li><h3>Maintained and standardized diverse raw data files into structured formats, implementing data normalization techniques to ensure consistency, integrity, and seamless integration into downstream processes.</h3></li>
                    <li><h3>Enhanced data analysis workflows and interactive dashboards in the O9 platform using Visual Studio and SQL, implementing advanced data modeling and visualization techniques to streamline operations.</h3></li>
                    <li><h3>Orchestrated configuration and monitoring of batch runs on the production run, ensuring seamless end-to-end execution, timely processing, and data integrity for business-critical operations.</h3></li>
                    <li><h3>Led the development of SSIS automation solutions that streamlined data transformation processes, cutting manual effort by 90% while maintaining flawless handling of complex, multi-source client datasets.</h3></li>
                </ul>
                </div>
            </div>
        </div>
    )
}
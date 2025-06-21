import "./Projects.css";
import React, { useState } from 'react';
import lmsImage from './images/ProjectImages/kanbas.jpg';


export default function Projects() {

    const [activeTab, setActiveTab] = useState('Kanbas');

  const tabData = [
    {
      id: 'Kanbas',
      title: '1. Kanbas Learning Management System',
      content: [
        'Built an innovative online platform facilitating user authentication; created customized experiences for each of the 200 enrolled students through engaging course materials, resulting in enhancement of overall teaching effectiveness.',
        'Developed front-end with Express.js (hosted on Netlify) and back-end with Node.js and MongoDB ensuring high availability for hundreds of concurrent users with zero crashes during peak traffic.',
        'Featured over ten modules, robust course management tools, and real-time analytics to enhance user engagement for individual learners in diverse educational settings.'
      ]
    },
    {
      id: 'Linkup',
      title: '2. Linkup Social Media Platform',
      content: [
        'Constructed an intuitive social media project featuring robust search capabilities alongside detailed content views, optimized navigation resulting in improved overall usability.',
        'Configured and deployed a full-stack application with Express.js and ReactJS (front-end on Netlify) and Node.js and MongoDB (back-end).',
        'Configured version control with Git, ensuring streamlined collaboration across the team; implemented unit testing protocols that enhanced reliability assurance and boosted deployment efficiency by 30% using CI practices.'
      ]
    },
    {
      id: 'Image',
      title: '3. Image Manipulation Software',
      content: [
        'Coded using Java an advanced photo editing tool capable of performing color correction, histogram generation, and applying filters like greyscale and sepia; received positive feedback from over 95% of initial testers for usability.',
        'Developed a sophisticated image filtering system using customized kernels that transformed pixel values into numeric sequences, achieving sharp enhancements and garnering remarkable recognition for usability from 95% of user testers.',
        'Created a responsive Swing interface, enabling seamless application of over 12 distinct image transformations in real-time, enhancing user engagement and streamlining the editing process for uploaded images.'
      ]
    },
    {
      id: 'Pool',
      title: '4. Pool Simulator Software',
      content: [
        'Produced a software application to create a functional simulation that replicates specified behaviors and conditions, including the movement of a ball on a rectangular pool table, utilizing two distinct physics models in Java.',
        'Emphasized discrete step simulation and handling collisions for constant speed and simplistic physics using kinematics equations, also providing a graphical interface to observe the ball’s movement and interactions in real-time using Swing.',
        'Formulated comprehensive test scenarios for each condition including edge cases; findings led to fixing three major causes of discrepancies between expected outcomes and actual results during simulations.'
      ]
    },
    {
      id: 'Maze',
      title: '5. Maze Navigation Using Q-Learning in Custom Environments',
      content: [
        'Developed a reinforcement learning-based maze navigation system using Q-learning and Dueling DQN, achieving success rates of 60-80% in dynamic environments with obstacles and moving goals. Implemented experience replay and epsilon-greedy exploration for optimized agent performance.',
        'Built custom maze environments from scratch using PyGame and OpenAI Gym, integrating dynamic elements like shifting walls and hazards. Designed modular architectures for both frameworks, enabling flexible reward shaping and state representation.',
        'Demonstrated Dueling DQN superiority over tabular Q-learning, leveraging convolutional layers and parallel value/advantage streams for spatial feature extraction. Achieved 80% success rates in complex mazes, highlighting scalability for real-world navigation tasks.'
      ]
    },
    {
      id: 'Home2Home',
      title: '6. Home2Home Food Delivery Application',
      content: [
        'Developed a full-featured food delivery app in Java using Android Studio, with separate apps for customers and drivers.',
        'Integrated Google Maps API for real-time tracking and Firebase for authentication, database, and cloud messaging, supporting concurrent sessions.',
        'Implemented auto-assignment of orders and route optimization, improving delivery efficiency by 40% and reducing average delivery time by 30%.'
      ]
    },
    {
      id: 'LetsGetSettled',
      title: '7. LetsGetSettled Home Rental Application',
      content: [
        'Designed a user-friendly rental platform in Figma to simplify roommate searches, integrating preference-based filters (e.g., pets, smoking) and optimizing navigation based on paper prototyping and heuristic evaluations.',
        'Collaborated in a 4-person team to standardize UI components (colors, fonts) and conduct user testing, resolving 60% of usability issues (e.g., unclear CTAs, inconsistent imagery) in high-fidelity prototypes.',
        'Developed creative workarounds for prototyping constraints, such as price sliders and pre-filled text fields, to enhance usability and mimic interactive features.'
      ]
    }
    
  ];


    return(
        <div className="projects"
        style={{
            fontFamily: 'NType82-Headline',
            marginLeft: '100px',
            }}
            >
            <p>
                <h1 className="projectsTitle">Projects:</h1>
            </p>
            
            <div className="NamesAndDescription">
            <div className="ProjectNames">
            <h2>
            {tabData.map(tab => (
              <p 
                key={tab.id}
                className={`title ${activeTab === tab.id ? 'active-link' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.title}
              </p>
            ))}
          </h2>
            </div>    


            <div className="ProjectDescriptions">
          {tabData.map(tab => (
            <div 
              key={tab.id}
              className={`ProjectDesc ${activeTab === tab.id ? 'active-tab' : ''}`}
            >
              <ul style={{ lineHeight: '1.6' }}>
                <h3>{tab.content.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}</h3>
              </ul>
            </div>
          ))}
        </div>
            
            </div> 
        </div>
    )
}
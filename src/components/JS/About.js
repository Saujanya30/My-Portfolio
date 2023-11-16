import React from 'react';
import '../CSS/About.css';
import {
  linkedin,
  github,
  leetcode,
  resume,
  instagram,
  reactLogo,
  nodeLogo,
  javascriptLogo,
  cplusplusLogo,
  cLogo,
  htmlLogo,
  cssLogo,
  sqlLogo,
  pythonLogo,
  gitLogo,
  mysqlLogo,
  mongoLogo,
} from './images.js';

import { GiSoccerBall, GiBookCover, GiBarbedStar, GiSpy } from 'react-icons/gi';

export default function HomeContent() {
  return (
    <>
      <div className="AboutBG">
        <div className="leftAbout">
          <h2>
            <GiBarbedStar /> I am Saujanya Solanki, a final year college student, Computer Science and Engineering (8.2 CGPA, Bachelor of Technology) currently attending the Institute of Engineering and Technology, Lucknow. I am looking for Full-Time roles! ( Hit me up at <a href="mailto:solankisaujanya@gmail.com">solankisaujanya@gmail.com </a> ).
            {/* <br /> */}
            <br />
            <GiBookCover /> I enjoy building awesome softwares that solves practical problems.
            {/* <br /> */}
            <br />
            <GiSoccerBall /> When I am not coding my next project, I like to play Football, video games or watching movies( <GiSpy /> Mission Impossible is my favourite).
          </h2>
        </div>
        <div className="rightAbout">
          <h1> MY SKILLSET </h1>
          <div className="skillset">
            <img src={reactLogo} alt="" />
            <img src={nodeLogo} alt="" style={{ color: "black" }} />
            <img src={javascriptLogo} alt="" />
            <img src={cplusplusLogo} alt="" />
            <img src={cLogo} alt="" />
            <img src={pythonLogo} alt="" />
            <img src={htmlLogo} alt="" />
            <img src={cssLogo} alt="" />
            <img src={mongoLogo} alt="" />
            <img src={sqlLogo} alt="" />
            <img src={mysqlLogo} alt="" />
            <img src={gitLogo} alt="" />
          </div>
        </div>
      </div>
      <div className="profiles">
        <h3>Check my Profiles: </h3>
        <a href="https://www.linkedin.com/in/saujanya-solanki-b90325287/" target='_blank' rel="noreferrer"> <img src={linkedin} alt="" /> </a>
        <a href="https://github.com/Saujanya30" target='_blank' rel="noreferrer"> <img src={github} alt="" style={{ backgroundColor: "white" }} /> </a>
        <a href="https://leetcode.com/saujanya_30/" target='_blank' rel="noreferrer"> <img src={leetcode} alt="" /> </a>
        <a href="https://rb.gy/jkvks" target='_blank' rel="noreferrer"> <img src={resume} alt="" style={{ backgroundColor: "white" }} /> </a>
        <a href="https://www.instagram.com/saujanya_30/" target='_blank' rel="noreferrer"> <img src={instagram} alt="" /> </a>
      </div>
    </>
  )
}

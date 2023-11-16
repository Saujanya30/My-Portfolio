import React from 'react'
import '../CSS/Home.css'
import myimg from '../Files/myimg.png'
export default function About() {
  return (
    <>
        <div className="AboutBackGround">
        <div className="left_part">
            <div className="wrapper">
                <div className="static-txt">I'm a</div>
                <ul className="dynamic-txts">
                    <li><span>Developer</span></li>
                    <li><span>Coder</span></li>
                    <li><span>Football enthusiast</span></li>
                    <li><span>Video Gamer</span></li>
                </ul>
            </div>
        </div>
        <div className="right_part">
            <img src={myimg} alt="oops" className='myimage'/>
        </div>
        </div>
    </>
  )
}

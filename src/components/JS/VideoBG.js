import React from 'react'
import '../CSS/VideoBG.css'
import videobg from '../Files/portfolio_video.mp4'

export default function VideoBG() {
  return (
    <>
        {/* <div className="videoBG"> */}
            <video src={videobg} autoPlay loop muted className="back-video"/>
            {/* <div className="HomeContent">
                <h1> Welcome to my Portfolio</h1>
            </div> */}
        {/* </div> */}
    </>
  )
}

import React from 'react'
import '../CSS/Project.css'
import img1 from '../Files/EComHub.jpg';
import img2 from '../Files/NewsHub2.png';
import img3 from '../Files/MovieRecommenderSystem.png';

export default function Project() {
    return (
        <>
            <div className="ProjectBG">
                <div className="ProjectCard">
                    <div className="ProjectImage">
                        <img src={img1} alt="" />
                    </div>
                    <h2>E-ComHub</h2>
                    <div className="ProjectDescription">
                        <p>
                            Created a responsive E-commerce website using ReactJS, Bootstrap, HTML, CSS, and JavaScript, featuring interfaces for Home, Products, About, Login, Register, Contact Us, Add to Cart, and Payment Forms.
                        </p>
                    </div>
                    <div className="ProjectButton">
                        <a href="https://github.com/Saujanya30/E-ComHub" target='_blank' rel="noreferrer">
                            <button> Check it out </button>
                        </a>
                    </div>
                </div>
                <div className="ProjectCard">
                    <div className="ProjectImage">
                        <img src={img2} alt="" />
                    </div>
                    <h2>DailyHub</h2>
                    <div className="ProjectDescription">
                        <p>
                            Developed a responsive web app that displays daily news across different categories, keeping users informed. Used NewsAPI to access real-time news data, guaranteeing the presence of the most recent and pertinent news articles.
                        </p>
                    </div>
                    <div className="ProjectButton">
                        <a href="https://github.com/Saujanya30/DailyHub" target='_blank' rel="noreferrer">
                            <button> Check it out </button>
                        </a>
                    </div>
                </div>
                <div className="ProjectCard">
                    <div className="ProjectImage">
                        <img src={img3} alt="" />
                    </div>
                    <h2>Movie Recommendation System</h2>
                    <div className="ProjectDescription">
                        <p>
                            Developed a content-based movie recommendation engine using cosine similarity, providing personalized movie recommendations based on user preferences.
                        </p>
                    </div>
                    <div className="ProjectButton">
                        <a href="https://github.com/Saujanya30/Movie_recommendation_engine_for_Microsoft" target='_blank' rel="noreferrer">
                            <button> Check it out </button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

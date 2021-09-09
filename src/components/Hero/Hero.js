import React from 'react';
import './hero.scss';

let languages = ["JavaScript", "Python", "HTML/CSS", "DrRacket"]
let tech = ["React", "Node", "Express", "MongoDB", "MySQL", "DOM APIs", "Heroku"]

const Hero = () => {
    return (
        <>
            <div className="hero">
                <div className="hero-top"></div>
                <div className="hero-mid"></div>
                <div className="hero-bot">
                    <h1 className="hero-bot__message">Hello!</h1>
                    <h2 className="hero-bot__description">My name is Vinco and Welcome to my website! I am a Front End Web Developer that likes creating websites and applications on my free time! </h2>
                </div>
            </div>
            <div className="skills">
                <div className="skills-top">
                    <h1 className="skills-header">My Skills</h1>
                    <p className="skills-background">
                        Through some computer science classes I took through my undergrad as well as a 12 week Full Stack web development bootcamp I took at BrainStation, I was able to pick up and learn lots of relevant technical skills. My goal is to learn something new every day and since I started this programming journey, I have come to really enjoy learning new technologies. Below are a list of things I have learned so far!
                    </p>
                </div>
                <div className="skills-bot">
                    <ul className="skills-list">
                        <h2 className="skills-list__type">Languages</h2>
                        {languages.map((language) => {
                            return <li className="skills-list__item">{language}</li>
                        })}
                    </ul>
                    <ul className="skills-list">
                        <h2 className="skills-list__type">Technology</h2>
                        {tech.map((thing) => {
                            return <li className="skills-list__item">{thing}</li>
                        })}
                    </ul>
                </div>
            </div>

        </>
    )
}

export default Hero

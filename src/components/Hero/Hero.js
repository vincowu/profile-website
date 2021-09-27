import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './hero.scss';
import Aos from 'aos';
import "aos/dist/aos.css";

let languages = ["JavaScript", "Python", "HTML/CSS", "DrRacket"]
let tech = ["React", "Node", "Express", "MongoDB", "MySQL", "DOM APIs", "Heroku"]

const Hero = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);
    return (
        <>
            <div className="hero">
                {/* <div className="hero-top"></div> */}
                <div data-aos="flip-right" className="hero-mid"></div>
                <div data-aos="flip-right" className="hero-bot">
                    <h1 className="hero-bot__message">Hello!</h1>
                    <h2 className="hero-bot__description">My name is Vinco and welcome to my website! I'm a Front End Web Developer that likes creating websites and applications during my free time! You can learn more about me and my journey <Link className="link" to="/about">here</Link> </h2>
                </div>
                <div data-aos="fade-right" className="skills">
                    <div className="skills-top">
                        <h1 className="skills-header">My Skills</h1>
                        <p className="skills-background">
                            Through some computer science classes I took during my undergrad, as well as a 12 week Full Stack Web Development bootcamp I completed at BrainStation, I was able to learn new frameworks, languages and technologies. As a junior developer, my goal is to learn something new everyday. Below are some technologies that I've learned so far!
                        </p>
                    </div>
                    <div data-aos="fade-right" className="skills-bot">
                        <ul className="skills-list">
                            <h2 className="skills-list__type">Languages</h2>
                            {languages.map((language, index) => {
                                return <li className="skills-list__item" key={'mykey' + index}>{language}</li>
                            })}
                        </ul>
                        <ul className="skills-list">
                            <h2 className="skills-list__type">Technology</h2>
                            {tech.map((thing, index) => {
                                return <li className="skills-list__item" key={'mykey' + index}>{thing}</li>
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero

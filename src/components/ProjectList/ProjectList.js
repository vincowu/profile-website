import React from 'react';
import './projectList.scss'
import translyric from '../../assets/images/translyric/CARD.png';
import marketstats from '../../assets/images/marketstats/card.png'
import { Link } from 'react-router-dom';

const ProjectList = () => {
    return (
        <div className="projects">
            <h1 className="projects-header">My Projects</h1>
            <p className="projects-introduction">In my free time, I like to work on different projects and applications that interest me. These are some of the projects I have worked on in the past!</p>
            <Link to="/projects/market-stats" className="project-link" >
                <div className="project-card project-card--left">
                    <img src={marketstats} className="project-card__image" />
                    <h2 className="project-card__title">MarketStats</h2>
                    <p className="project-card__description">A finance app that allows users to search for their favorite stocks. Users can also log in and create personalized watchlists.</p>
                </div>
            </Link>
            <Link to="/projects/translyric" className="project-link" >
                <div className="project-card project-card--right">
                    <img src={translyric} className="project-card__image" />
                    <h2 className="project-card__title">Translyric</h2>
                    <p className="project-card__description">A music guessing game based on lyrics of popular songs that have been translated back and forth between English and other languages.</p>
                </div>
            </Link>
            <div className="project-card--noImage">
                <h2 className="project-card--noImage__site">Portfolio</h2>
                <p className="project-card--noImage__site-description">This website was also created and designed by me! React and Sass was the tech stack used to bring this to life. This website was deployed using Github Pages.</p>
            </div>
        </div >
    )
}

export default ProjectList

import React from 'react';
import './aboutMe.scss';
import add from '../../assets/icons/add_black_24dp.svg';


class AboutMe extends React.Component {
    state = {
        background: false,
        journey: false,
        future: false,
    }
    background = () => {
        this.setState({
            background: !this.state.background
        })
    }
    journey = () => {
        this.setState({
            journey: !this.state.journey
        })
    }
    future = () => {
        this.setState({
            future: !this.state.future
        })
    }
    render() {
        return (
            <div className="about">
                <h1 className="about-header">About Me</h1>
                <div className={this.state.background ? "background active" : "background"}>
                    <h2 className="background__title">My Background</h2>
                    <img className="background__add" onClick={this.background} src={add} alt="adding icon" />
                    {this.state.background && (
                        <div className="accordion">
                            <p className="accordion__text">
                                I recently graduated from the University of Waterloo, majoring in Biomedical Sciences and minoring in Biochemistry. Due to the COVID-19 pandemic, my final three study terms before graduation ended up being completely virtual. It was during this time where I contemplated life after university and also, whether I truly enjoyed life sciences as much as I thought I once did. After careful consideration, I decided against pursuing further education in bioinformatics and instead, attempt to switch into the technology field, particularly programming and development.
                            </p>
                        </div>)}
                </div>
                <div className="background">
                    <h2 className="background__title">My Coding Journey</h2>
                    <img className="background__add" onClick={this.journey} src={add} alt="adding icon" />
                    {this.state.journey && (
                        <div className="background-accordion">
                            <p className="background-accordion__text">
                                During my undergrad, I took several computer science classes which introduced me to programming. It was here where I first learned about imperative and functional programming through the use of different coding languages (Dr. Racket and Python). After graduating from UW, I completed a 12-week Full Stack Web Development bootcamp at BrainStation. Instead of pursuing an additional degree in computer science, I decided to attend this programming bootcamp as I wanted to learn relevant industry technologies in an immersive environment.
                            </p>
                            <p className="background__text">
                                After graduating from UW, I completed a 12-week Full Stack Web Development bootcamp at BrainStation. Instead of pursuing an additional degree in computer science, I decided to attend this programming bootcamp as I wanted to learn relevant industry technologies in an immersive environment.
                            </p>
                        </div>)}
                </div>
                <div className="background">
                    <h2 className="background__title">What's to come?</h2>
                    <img className="background__add" onClick={this.future} src={add} alt="adding icon" />
                    {this.state.future && (
                        <div className="background-accordion">
                            <p className="background-accordion__text">
                                Looking back at the beginning of my journey to where I am today, I can say with certainty that I truly enjoy programming. My passion for programming has made me very eager to learn and I am so excited to see where this path takes me. Feel free to connect with me on LinkedIn or check out my Github! Thanks for reading!
                            </p>
                        </div>)}
                </div>
            </div>
        )
    }
}

export default AboutMe
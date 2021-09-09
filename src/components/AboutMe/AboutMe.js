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
                                I recently graduated from the University of Waterloo majoring in Biomedical Sciences and minoring in Biochemistry. Due to the COVID-19 pandemic, my last 3 terms ended up all being virtual and it was during this time with lots of self reflection on life after university where I decided against pursuing further education in life sciences and instead pursue a career in tech, particularly programming!
                            </p>
                        </div>)}
                </div>
                <div className="background">
                    <h2 className="background__title">My Coding Journey</h2>
                    <img className="background__add" onClick={this.journey} src={add} alt="adding icon" />
                    {this.state.journey && (
                        <div className="background-accordion">
                            <p className="background-accordion__text">
                                During my undergrad, I took several computer science classes which was how I was introduced to programming. It was here I first learned about imperative programming and functional programming using Dr Racket and Python.
                            </p>
                            <p className="background__text">
                                After graduating from UW, I decided I wanted to fast track my learning and attend a fully immersive 12 week full stack web development bootcamp at BrainStation. During this 12 week bootcamp, I learned alot of different technologies and have continued to hone the things I learned through my side projects.
                            </p>
                        </div>)}
                </div>
                <div className="background">
                    <h2 className="background__title">What's to come?</h2>
                    <img className="background__add" onClick={this.future} src={add} alt="adding icon" />
                    {this.state.future && (
                        <div className="background-accordion">
                            <p className="background-accordion__text">
                                I am very eager to learn all that I can about developing and programming. I really enjoy creating applications and websites in my spare time so if you have time, please checkout my github or connect with me on LinkedIn!
                            </p>
                        </div>)}
                </div>
            </div>
        )
    }
}

export default AboutMe


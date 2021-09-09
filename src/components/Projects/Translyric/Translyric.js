import React from 'react';
import './translyric.scss';
import hero from '../../../assets/images/translyric/translyric-ipad-pic.png';
import home from '../../../assets/images/translyric/CARD.png';
import roundDemo from '../../../assets/videos/translyric/round-demo.mp4';
import correct from '../../../assets/images/translyric/correct-guess.png';
import gameOver from '../../../assets/images/translyric/game-over.png'

const stack = ["React", "SASS", "Libretext(Translation API)", "Vagalume(Lyric API)"]

const Translyric = () => {
    return (
        <div className="project">
            <div className="project-top">
                <h1 className="project-header">Translyric</h1>
                <p className="project-description">
                    Translyric is a web based game that was created by me and <span className="links"><a className="links-tag" href="https://github.com/mhollingshead">Michael Hollingshead</a></span> during a 24 hour pair programming project. We got this idea to create this application because of both our interest in music.
                </p>
                <p className="project-description">
                    Translyric is a react app game that lets players guess the name of a song as well as the artist of that song based on translated versions of the original lyrics! The lyrics are translated 3 times, from english to a foreign language then from that foreign language to another foreign language and finally back to english. Due to the complexity of some languages, some information is left out of the translations causing there to be hilarious translations!
                </p>
                <p className="project-description">
                    There is a point system in the game that is linked to local session storage, which will record your high scores as long as the app is open! Currently we have 4 music generes: Pop, Classic Rock, Rap and Hits of 2010
                </p>
                <ul className="tech-stack">
                    <h2 className="tech-stack__header">STACK</h2>
                    {stack.map((tech) => {
                        return <li className="tech-stack__item">{tech}</li>
                    })}
                </ul>
            </div>
            <div className="project-mid">
                <img className="project-mid__image" src={hero} alt="translyric images" />
            </div>
            <div className="project-bot">
                <h2 className="demo-header">HOW IT WORKS</h2>
                <div className="demo">
                    <img className="demo__visuals" src={home} alt="translyric home page" />
                    <p className="demo__visual-description">Home Page where users pick a category</p>
                    <p className="demo__description">
                        Here is the home page of Translyric. Players can choose the category of music they want to play by pressing Play Now. As you can see, currently there are 4 categories, but perhaps in the future we can add more and more! The design and style was based off an existing song guessing game called songtrivia.io
                    </p>
                </div>
                <div className="demo">
                    <video className="demo__visuals" loop autoPlay muted >
                        <source type="video/mp4" src={roundDemo} />
                    </video>
                    <p className="demo__visual-description">Demonstration of a round where player guesses or time runs out</p>
                    <p className="demo__description">
                        Once a category is chosen, the loading screen begins and the game will start. Between each rounds, the loading arrow will continue to spin to allow time for API calls to finish.
                    </p>
                    <p className="demo__description">
                        After getting a response from the API, the round component loads and the game starts. The translated lyrics are displayed at the centre of the screen as you can see with a timer bar slowly counting down from 30.
                    </p>
                    <img className="demo__visuals" src={correct} alt="translyric home page" />
                    <p className="demo__visual-description">Correct guess screen</p>
                    <p className="demo__description">
                        After players guess, depending on whether they guess the song and/or artist correctly or if the time runs out, points will then be tallied and added up to the total sum as seen below.
                    </p>
                    <img className="demo__visuals" src={gameOver} alt="translyric home page" />
                    <p className="demo__visual-description">Game over screen</p>
                    <p className="demo__description">
                        Once the player loses all 4 lives, the total points of this current game is calculated and summed. The final score is displayed on the screen as well as all your other High Scores from other games. If the player wants to play again, by pressing the Play Again button, the page will reload and redirect you back to the Home Page (First Image). This application was very fun to make and we had blast. The code can be found on
                        <span className="links">
                            <a className="links-tag" href="https://github.com/vincowu/translyric-game"> Github</a></span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Translyric

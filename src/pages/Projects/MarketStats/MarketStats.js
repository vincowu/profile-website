import React from 'react';
import './marketStats.scss';
import watchlist from '../../../assets/videos/marketstats/watchlist.mp4';
import ticker from '../../../assets/videos/marketstats/ticker-page.mp4';
import user from '../../../assets/videos/marketstats/signup-login.mp4';
import home from '../../../assets/images/marketstats/home.png';


const stack = ["React", "Sass", "Express", "MongoDB", "Mongoose", "JWT", "Alphavantage (Financial Data API)", "Marketstack (Trading Data API)"]


const MarketStats = () => {
    return (
        <div className="project">
            <div className="project-top">
                <h1 className="project-header">MarketStats</h1>
                <img className="project-image" src={home} alt="marketstats home page" />
                <p className="project-description">
                    MarketStats is a web application that I created as my final capstone project for my Full Stack Web Development class. I have always had an interest in finance and the stock market and constantly use websites like Yahoo Finance, MarketWatch, Nasdaq, Bloomberg, etc. This is where I got the inspiration to create this website, MarketStats!
                </p>
                <p className="project-description">
                    MarketStats recreates some of the functions that can typically be seen in finance sites. This project took me around a week and a half and in the end I was able to perform some of the basic features of similar sites. These features are highlighted below.
                </p>
                <ul className="tech-stack">
                    <h2 className="tech-stack__header">STACK</h2>
                    {stack.map((tech, index) => {
                        return <li className="tech-stack__item" key={'mykey' + index}>{tech}</li>
                    })}
                </ul>
                <h3 className="tech-stack__type">FRONT END</h3>
                <p className="tech-stack__description--small project-description">
                    This project was created with React and styled with Sass, Material UI. ChartJs was used to graph out stock prices.
                </p>
                <h3 className="tech-stack__type">BACK END</h3>
                <p className="tech-stack__description--small project-description">
                    Express was used for creating the server, with JWT authentication and MongoDB as the database to store user information.
                </p>
            </div>
            <div className="project-mid">
            </div>
            <div className="project-bot">
                <h2 className="demo-header">MarketStats Features</h2>
                <h3 className="feature-header">Stock Search</h3>
                <div className="demo">
                    <video className="demo__visuals" loop autoPlay muted >
                        <source type="video/mp4" src={ticker} />
                    </video>
                    <p className="demo__visual-description">Searching for Stock by Ticker Symbol Function</p>
                    <p className="demo__description">
                        By searching for stocks in the search bar in the home page, MarketStats will redirect you to a page about that stock. At the top of the page, the stock price of that stock over the past 2 weeks are graphed out and below, various financial metrics are displayed such as Earnings Per Shaer (EPS), Market Cap, etc.
                    </p>
                </div>
                <div className="demo">
                    <h3 className="feature-header">User Authentication</h3>
                    <video className="demo__visuals" loop autoPlay muted >
                        <source type="video/mp4" src={user} />
                    </video>
                    <p className="demo__visual-description">User login feature as well as user signup feature</p>
                    <p className="demo__description">
                        When the profile tab is clicked, a login modal will pop up at the center of the screen. If user attempts to log in with login credentials that do not exist or is wrong, an error message will appear.
                    </p>
                    <p className="demo__description">
                        If the user does not have an account, they can then press the sign up button which will redirect them to another modal. In the sign up modal, users can now sign up with a email and password. After signing up, they will be redirected back to the login page to login. If login is successful, the watchlist page will appear. This authentication was done using JSON Web tokens and is in session storage.
                    </p>
                    <h3 className="feature-header">Watchlist Performance</h3>
                    <video className="demo__visuals" loop autoPlay muted >
                        <source type="video/mp4" src={watchlist} />
                    </video>
                    <p className="demo__visual-description">Adding and removing stocks from the Watchlist result in % changes in returns</p>
                    <p className="demo__description">
                        This page is a personalized watchlist that basically allows for users to calculate their weekly and daily returns based on the stocks in their portfolio.The searchbar allows for users to add stocks.

                        As stocks are added to the watchlist, the overall performance percentage at the top will change.This data is calculated from the MarketStack API based on EOD stock prices.
                    </p>
                    <p className="demo__description">
                        Users can also remove stocks from their watchlist by pressing the edit button in the top right corner.This will cause another column in the watchlist to appear containing a delete button.When users press this button, stocks will be deleted.
                    </p>
                    <h3 className="feature-header feature-header--last">Closing Thoughts</h3>
                    <p className="demo__description">
                        Due to the deadline I had, some features I originally wanted to included could not be included. This project allowed me to familiarize and become more comfortable with React as well as Express and MongoDB. A couple things I learned the hard way was to ensure that your APIs and npm libraries actually did what you thought it did before diving head first into a rabbit hole because this would have saved me alot of time!
                    </p>
                    <p className="demo__description">
                        Some future features I would like to include would be to create an autofill function to make sure that the user would not be able to input stocks that don't exist. I would also have liked to add a feature where users could change the timeline of the graph to see performance over 1 month, 1 year, 5 years, etc. If you want to check out my code, it can be found on
                        <span className="links">
                            <a className="links-tag" href="https://github.com/vincowu/translyric-game"> Github</a></span>
                    </p>
                </div>
            </div>
        </div>
    )
}


{/* <span className="links">
<a className="links-tag" href="https://github.com/vincowu/translyric-game"> Github</a></span> */}
export default MarketStats

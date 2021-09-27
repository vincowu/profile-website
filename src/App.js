import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation.js';
import Footer from './components/Footer/Footer.js';
import Home from './pages/Home.js';
import About from './pages/About.js';
import Translyric from './pages/Projects/Translyric/Translyric.js';
import MarketStats from './pages/Projects/MarketStats/MarketStats.js';
import { BrowserRouter, Link, Route, Switch } from "react-router-dom"
import ScrollToTop from './components/ReactRouterScroll/ScrollToTop.js';
import ProjectList from './components/ProjectList/ProjectList.js';

class App extends Component {
  state = {
    nav: false,
  }
  navClick = () => {
    this.setState({
      nav: true
    })
  }
  navClose = () => {
    this.setState({
      nav: false
    })
  }

  render() {
    return (
      <BrowserRouter basename="/profile-website">
        <ScrollToTop />
        <Navigation navOpen={this.navClick} navClose={this.navClose} stateNav={this.state.nav} />
        <Switch>
          <Route path="/" exact>
            <Home />
            <Footer />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/projects" exact>
            <ProjectList />
            <Footer />
          </Route>
          <Route path="/projects/translyric">
            <Translyric />
            <Footer />
          </Route>
          <Route path="/projects/market-stats">
            <MarketStats />
            <Footer />
          </Route>
        </Switch>
      </BrowserRouter >
    )
  }
}

export default App;


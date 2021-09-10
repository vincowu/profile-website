import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation.js';
import Footer from './components/Footer/Footer.js';
import Home from './pages/Home.js';
import About from './pages/About.js';
import Projects from './pages/Projects';
import { BrowserRouter, Link, Route, Switch } from "react-router-dom"
import ScrollToTop from './components/ReactRouterScroll/ScrollToTop.js';

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
  componentDidMount() {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }
  render() {
    return (
      <BrowserRouter basename="/profile-website">
        <ScrollToTop />
        <Navigation navOpen={this.navClick} navClose={this.navClose} stateNav={this.state.nav} />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about" exact>
            <About />
          </Route>
          <Route path="/projects" exact>
            <Projects />
          </Route>
          <Route path="/projects/:name" exact>
            <Projects />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    )
  }
}

export default App;

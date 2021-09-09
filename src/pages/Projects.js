import React from 'react';
import ProjectList from '../components/ProjectList/ProjectList';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Translyric from '../components/Projects/Translyric/Translyric';
import MarketStats from '../components/Projects/MarketStats/MarketStats';

const Projects = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/projects" exact>
                    <ProjectList />
                </Route>
                <Route path="/projects/translyric" exact>
                    <Translyric />
                </Route>
                <Route path="/projects/market-stats" exact>
                    <MarketStats />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Projects

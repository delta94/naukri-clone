import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Navbar } from "./Navbar"
import { SearchResultPage } from './SearchResultPage';
import Home from './Home';
import { JobDescription } from '../JobDescription/JobDescription';

export const Routes = () => {
    return (
        <div>
            <Navbar />
            <Switch>
                <Route exact path='/'>
                    <Home />
                </Route>
                <Route exact path='/search/:job'>
                    <SearchResultPage />
                </Route>
                <Route path='/search/:job/:id'>
                     <JobDescription/>
                </Route>
            </Switch>
        </div>
    )
}


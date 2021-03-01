import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home } from './Components/Home';
import Maps from './Components/Maps/Maps';
import { NotFound } from './Components/NotFound';
import { Resume } from './Components/Resume/Resume';

export function Routes() {
    return (
        <Switch>
            <Route exact path ="/" >
                <Home />
            </Route>
            <Route exact path ="/Home" >
                <Home />
            </Route>
            <Route exact path ="/Resume" >
                <Resume />
            </Route>
            <Route exact path = "/Travels" >
                <Maps />
            </Route>
            <Route>
                <NotFound />
            </Route>
        </Switch>
    )
}
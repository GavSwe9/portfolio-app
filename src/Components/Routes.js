import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home } from './Home';
import Maps from './Maps/Maps';
import { NotFound } from './NotFound';
import { Resume } from './Resume/Resume';
import { ZedMarket } from './Zed/ZedMarket';

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
            <Route exact path = "/Horses" >
                <ZedMarket />
            </Route>
            
            <Route>
                <NotFound />
            </Route>
        </Switch>
    )
}
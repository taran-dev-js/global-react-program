import React from "react";
import PageNotFound from "../../pages/404";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Home from "../../pages/Home";
import Movie from "../../pages/Movie";
import EmptyPage from "../../pages/Empty";
export const App = () => {

    return (
        <Router>
            <Switch>
                <Route exact path='/'>
                    <EmptyPage/>
                </Route>
                <Route path='/search'>
                    <Home />
                </Route>
                <Route path='/film/:id'>
                    <Movie/>
                </Route>
                <Route path='*'>
                    <PageNotFound/>
                </Route>
            </Switch>
        </Router>
    );
};
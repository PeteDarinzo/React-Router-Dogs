import React from "react";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
import DogList from './DogList';
import DogDetails from './DogDetails';

/**
 * inside a browser router, make a switch containing two routes
 * the DogList route renders a list of all dogs
 * DogDetails shows one dog, the dog is take from the "name" parameter
 * if neither route is hit, redirect to the DogList
 */
const Routes = ({ dogs }) => {
  return (
      <Switch>
        <Route exact path="/dogs">
          <DogList dogs={dogs} />
        </Route>
        <Route path="/dogs/:name">
          <DogDetails dogs={dogs} />
        </Route>
        <Redirect to="/dogs" />
      </Switch>
  );
}

export default Routes
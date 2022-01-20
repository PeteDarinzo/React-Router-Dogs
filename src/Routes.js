import React from "react";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
import DogList from './DogList';
import DogDetails from './DogDetails';
// import { dogs } from './App';

const Routes = ({ dogs }) => {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/dogs">
          <DogList dogs={dogs} />
        </Route>
        <Route path="/dogs/:name">
          <DogDetails dogs={dogs} />
        </Route>
        <Redirect to="/dogs" />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes
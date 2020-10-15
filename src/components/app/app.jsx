import React from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import MainPage from "../main-page/main-page";
import Login from "../login/login";
import Favorites from "../favorites/favorites";
import Room from "../room/room";
import Proptypes from "prop-types";

const App = (props) => {
  const {rentCount, offers} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainPage
            rentCount={rentCount}
            offers={offers}
          />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/favorites">
          <Favorites
            offer={offers[0]}
          />
        </Route>
        <Route exact path="/offer/:id">
          <Room
            offer={offers[1]}
          />
        </Route>
      </Switch>
    </BrowserRouter>

  );
};

App.propTypes = {
  rentCount: Proptypes.number.isRequired,
  offers: Proptypes.array.isRequired,
};

export default App;

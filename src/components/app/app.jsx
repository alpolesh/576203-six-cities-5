import React from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import MainPage from "../main-page/main-page";
import Login from "../login/login";
import Favorites from "../favorites/favorites";
import Room from "../room/room";
import Proptypes from "prop-types";

const App = (props) => {
  const {rentCount, offers, reviews, cities} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact
          path="/"
          render={() => (
            <MainPage
              rentCount={rentCount}
              offers={offers}
              cities={cities}
            />
          )}
        >
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/favorites">
          <Favorites
            offer={offers[0]}
          />
        </Route>
        <Route exact
          path="/offer/:id"
          render={(prop) => (
            <Room
              offer={offers[prop.match.params.id]}
              reviews={reviews}
            />
          )}
        >
        </Route>
      </Switch>
    </BrowserRouter>

  );
};

App.propTypes = {
  rentCount: Proptypes.number.isRequired,
  offers: Proptypes.array.isRequired,
  reviews: Proptypes.array.isRequired,
  cities: Proptypes.arrayOf(Proptypes.string).isRequired,
};

export default App;

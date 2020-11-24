import React from "react";
import {Switch, Route, Router as BrowserRouter} from "react-router-dom";
import {connect} from "react-redux";
import MainPage from "../main-page/main-page";
import Login from "../login/login";
import Favorites from "../favorites/favorites";
import Room from "../room/room";
import PrivateRoute from "../private-route/private-route";
import Proptypes from "prop-types";
import {getOffersFromHotels} from "../../selectors";
import browserHistory from "../../browser-history";

const App = (props) => {
  const {offers, reviews, cities} = props;

  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact
          path="/"
          render={() => (
            <MainPage
              cities={cities}
            />
          )}
        >
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <PrivateRoute
          exact
          path={`/favorites`}
          render={() => {
            return (
              <Favorites
                offer={offers[0]}
              />
            );
          }}
        />
        <Route exact
          path="/offer/:id"
          render={(prop) => {
            return (
              <Room
                paramsId={prop.match.params.id}
                reviews={reviews}
              />
            );
          }}
        >
        </Route>
      </Switch>
    </BrowserRouter>

  );
};

App.propTypes = {
  offers: Proptypes.array.isRequired,
  reviews: Proptypes.array.isRequired,
  cities: Proptypes.arrayOf(Proptypes.string).isRequired,
};

const mapStateToProps = (state) => {
  return {
    offers: getOffersFromHotels(state),
  };
};

export {App};
export default connect(mapStateToProps)(App);


import React from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";
import MainPage from "../main-page/main-page";
import Login from "../login/login";
import Favorites from "../favorites/favorites";
import Room from "../room/room";
import Proptypes from "prop-types";

const App = (props) => {
  const {offers, getOffers, reviews, cities, city, hotels} = props;
  getOffers(city, hotels);

  return (
    <BrowserRouter>
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
        <Route exact path="/favorites">
          <Favorites
            offer={offers[0]}
          />
        </Route>
        <Route exact
          path="/offer/:id"
          render={(prop) => (
            <Room
              offer={hotels[prop.match.params.id - 1]}
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
  offers: Proptypes.array.isRequired,
  reviews: Proptypes.array.isRequired,
  cities: Proptypes.arrayOf(Proptypes.string).isRequired,
  getOffers: Proptypes.func.isRequired,
  city: Proptypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  city: state.city,
  hotels: state.hotels,
});

const mapDispatchToProps = (dispatch) => ({

  getOffers(city, hotels) {
    dispatch(ActionCreator.getOffers(city, hotels));
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);


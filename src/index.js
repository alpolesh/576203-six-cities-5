import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";
import App from "./components/app/app";
import offers from "./mocks/offers";
import reviews from "./mocks/reviews";
import cities from "./mocks/cities";
import {reducer} from "./store/reducer";

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f);

const Settings = {
  RENT_COUNT: 312
};

ReactDOM.render(
    <Provider store={store}>
      <App
        rentCount={Settings.RENT_COUNT}
        offers={offers}
        reviews={reviews}
        cities={cities}
      />,
    </Provider>,
    document.querySelector(`#root`)
);

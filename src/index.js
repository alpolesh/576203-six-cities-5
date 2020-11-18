import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import {createAPI} from "./services/api";
import App from "./components/app/app";
import reviews from "./mocks/reviews";
import cities from "./mocks/cities";
import rootReducer from "./store/reducers/root-reducer";
import {ActionCreator} from "./store/action";
import {fetchHotelsList} from "./store/api-actions";
import {AuthorizationStatus} from "./const";

const api = createAPI(
    () => store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH))
);

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

new Promise((resolve) => {
  resolve(store.dispatch(fetchHotelsList()));
})
.then(() => {
  ReactDOM.render(
      <Provider store={store}>
        <App
          reviews={reviews}
          cities={cities}
        />,
      </Provider>,
      document.querySelector(`#root`)
  );
});



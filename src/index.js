import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import offers from "./mocks/offers";
import reviews from "./mocks/reviews";

const Settings = {
  RENT_COUNT: 312
};

ReactDOM.render(
    <App
      rentCount={Settings.RENT_COUNT}
      offers={offers}
      reviews={reviews}
    />,
    document.querySelector(`#root`)
);

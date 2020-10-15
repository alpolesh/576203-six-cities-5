import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import offers from "./mocks/offers";

const Settings = {
  RENT_COUNT: 312
};

ReactDOM.render(
    <App
      rentCount={Settings.RENT_COUNT}
      offers={offers}
    />,
    document.querySelector(`#root`)
);

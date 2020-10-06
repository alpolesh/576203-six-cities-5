import React from "react";
import MainPage from "../main-page/main-page";
import Proptypes from "prop-types";

const App = (props) => {
  const {rentCount} = props;

  return (
    <MainPage rentCount={rentCount}/>
  );
};

App.proptypes = {
  rentCount: Proptypes.number.isRequired
};

export default App;

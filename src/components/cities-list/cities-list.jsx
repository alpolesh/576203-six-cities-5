import React from "react";
import Proptypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";

const CitiesList = (props) => {
  const {city, changeCity} = props;

  const onCityClick = (value) => {
    changeCity(value);
  };

  return (
    <li
      className="locations__item"
      onClick={() => onCityClick(city)}
    >
      <a className="locations__item-link tabs__item tabs__item--active" href="#">
        <span>{city}</span>
      </a>
    </li>
  );
};

CitiesList.propTypes = {
  city: Proptypes.string.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  changeCity(value) {
    dispatch(ActionCreator.changeCity(value));
  }
});

export {CitiesList};
export default connect(mapDispatchToProps)(CitiesList);

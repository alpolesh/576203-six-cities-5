import React from "react";
import Proptypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";

const CitiesList = (props) => {
  const {city, changeCity, getOffers, currentCity} = props;

  const onCityClick = (value) => {
    changeCity(value);
    getOffers(value);
  };

  return (
    <li
      className="locations__item"
      onClick={() => onCityClick(city)}
    >
      {currentCity === city ?
        <a className="locations__item-link tabs__item tabs__item--active" href="#">
          <span>{city}</span>
        </a> :
        <a className="locations__item-link tabs__item" href="#">
          <span>{city}</span>
        </a>
      }
    </li>
  );
};

CitiesList.propTypes = {
  city: Proptypes.string.isRequired,
  changeCity: Proptypes.func.isRequired,
  getOffers: Proptypes.func.isRequired,
  currentCity: Proptypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  currentCity: state.city,
});

const mapDispatchToProps = (dispatch) => ({
  changeCity(value) {
    dispatch(ActionCreator.changeCity(value));
  },
  getOffers(value) {
    dispatch(ActionCreator.getOffers(value));
  }
});

export {CitiesList};
export default connect(mapStateToProps, mapDispatchToProps)(CitiesList);

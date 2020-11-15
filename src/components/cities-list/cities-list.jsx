import React from "react";
import Proptypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";

const CitiesList = (props) => {
  const {city, changeCity, getOffers, currentCity, hotels} = props;

  const onCityClick = (town) => {
    changeCity(town);
    getOffers(town, hotels);
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

const mapStateToProps = ({DATA, PROCESS}) => ({
  currentCity: PROCESS.city,
  hotels: DATA.hotels,
});

const mapDispatchToProps = (dispatch) => ({
  changeCity(value) {
    dispatch(ActionCreator.changeCity(value));
  },
  getOffers(city, hotels) {
    dispatch(ActionCreator.getOffers(city, hotels));
  }
});

export {CitiesList};
export default connect(mapStateToProps, mapDispatchToProps)(CitiesList);

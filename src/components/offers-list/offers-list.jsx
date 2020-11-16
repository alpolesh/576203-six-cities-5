import React from "react";
import Proptypes from "prop-types";
import {connect} from "react-redux";
import OfferCard from "../offer-card/offer-card";
import {getOffersFromHotels} from "../../selectors";

const OffersList = (props) => {
  const {offers, handleMouseOver} = props;

  return (
    <div className="cities__places-list places__list tabs__content">
      {
        offers.map((offer, i) => (
          <OfferCard
            key={`${i}-${offer.title}`}
            offer={offer}
            handleMouseOver={handleMouseOver}
            id={i}
          />
        ))
      }
    </div>
  );
};


OffersList.propTypes = {
  offers: Proptypes.array.isRequired,
  handleMouseOver: Proptypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  offers: getOffersFromHotels(state),
});

export {OffersList};
export default connect(mapStateToProps)(OffersList);

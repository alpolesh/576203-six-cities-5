import React from "react";
import Proptypes from "prop-types";
import {connect} from "react-redux";
import OfferCard from "../offer-card/offer-card";

const OffersList = (props) => {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     activeOffer: {}
  //   };
  //   this.handleMouseOver = this.handleMouseOver.bind(this);
  // }

  // handleMouseOver(offerCard) {
  //   this.setState(
  //       {activeOffer: offerCard}
  //   );
  // }

  const {offers, handleMouseOver} = props;

  return (
    <div className="cities__places-list places__list tabs__content">
      {
        offers.map((offer, i) => (
          <OfferCard
            key={`${i}-${offer.titel}`}
            offer={offer}
            handleMouseOver={handleMouseOver}
            index={i}
          />
        ))
      }
    </div>
  );
};


OffersList.propTypes = {
  offers: Proptypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  offers: state.offers,
});

export {OffersList};
export default connect(mapStateToProps)(OffersList);

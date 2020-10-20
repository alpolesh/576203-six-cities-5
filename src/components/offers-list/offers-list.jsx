import React, {PureComponent} from "react";
import Proptypes from "prop-types";
import OfferCard from "../offer-card/offer-card";

class OffersList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeOffer: {}
    };
    this.handleMouseOver = this.handleMouseOver.bind(this);
  }

  handleMouseOver(offerCard) {
    this.setState(
        {activeOffer: offerCard}
    );
  }

  render() {
    const {offers} = this.props;

    return (
      <div className="cities__places-list places__list tabs__content">
        {
          offers.map((offer, i) => (
            <OfferCard
              key={`${i}-${offer.titel}`}
              offer={offer}
              handleMouseOver={this.handleMouseOver}
              index={i}
            />
          ))
        }
      </div>
    );
  }
}

OffersList.propTypes = {
  offers: Proptypes.array.isRequired,
};

export default OffersList;

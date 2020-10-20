import React from "react";
import {Link} from 'react-router-dom';
import Proptypes, {func} from "prop-types";

const OfferCard = (props) => {
  const {offer, handleMouseOver} = props;

  return (
    <article className="cities__place-card place-card" onMouseOver={() => handleMouseOver(offer)}>
      {offer.premium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${offer.index}`}>
          <img className="place-card__image" src={offer.photos[0]} width="260" height="200" alt="Place image" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: (offer.rating * 20) + `%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${offer.index}`}>
            {offer.titel}
          </Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
};

OfferCard.propTypes = {
  offer: Proptypes.shape({
    premium: Proptypes.bool.isRequired,
    photos: Proptypes.array.isRequired,
    price: Proptypes.number.isRequired,
    titel: Proptypes.string.isRequired,
    type: Proptypes.string.isRequired,
    rating: Proptypes.number.isRequired,
    index: Proptypes.number.isRequired
  }),
  handleMouseOver: func,
};

export default OfferCard;

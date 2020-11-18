import React from "react";
import PropTypes from "prop-types";
import FormComment from "../form-comment/form-comment";
import withFormComment from "../../hocs/with-form-comment/with-form-comment";

const FormCommentWrapped = withFormComment(FormComment);


const Reviews = (props) => {
  const {reviews} = props;
  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {reviews.map((review, i) => (
          <li className="reviews__item" key={`${review.user.avatar_url}-${i}`}>
            <div className="reviews__user user">
              <div className="reviews__avatar-wrapper user__avatar-wrapper">
                <img className="reviews__avatar user__avatar" src={review.user.avatar_url} width="54" height="54" alt="Reviews avatar"/>
              </div>
              <span className="reviews__user-name">
                {review.user.name}
              </span>
            </div>
            <div className="reviews__info">
              <div className="reviews__rating rating">
                <div className="reviews__stars rating__stars">
                  <span style={{width: review.rating * 20 + `%`}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
              </div>
              <p className="reviews__text">
                {review.comment}
              </p>
              <time className="reviews__time" dateTime="2019-04-24">{review.date}</time>
            </div>
          </li>
        ))}
      </ul>
      <FormCommentWrapped />
    </section>
  );
};

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.shape({
    user: PropTypes.shape({
      "avatar_url": PropTypes.string.isRequired,
      "name": PropTypes.string.isRequired,
    }),
    rating: PropTypes.number.isRequired,
    comment: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  })).isRequired
};

export default Reviews;

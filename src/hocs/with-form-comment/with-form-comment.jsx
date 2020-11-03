import React, {PureComponent} from "react";
import PropTypes from "prop-types";

const withFormComment = (Component) => {
  class WithFormComment extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        reviewText: ``,
        stars: 0,
      };

      this.handleChangeText = this.handleChangeText.bind(this);
      this.handleChangeStars = this.handleChangeStars.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeText(evt) {
      this.setState({
        reviewText: evt.target.value
      });
    }

    handleChangeStars(evt) {
      this.setState({
        stars: evt.target.value
      });
    }

    handleSubmit(evt) {
      evt.preventDefault();
      console.log(`Review text:`, this.state.reviewText, `, Stars:`, this.state.stars);
      this.setState({
        reviewText: ``,
        stars: 0,
      });
    }

    render() {
      const {reviewText, stars} = this.state;
      return (
        <Component
          {...this.props}
          reviewText={reviewText}
          stars={stars}
          handleChangeText={this.handleChangeText}
          handleChangeStars={this.handleChangeStars}
          handleSubmit={this.handleSubmit}
        />
      );
    }

  }
  return WithFormComment;
};

export default withFormComment;

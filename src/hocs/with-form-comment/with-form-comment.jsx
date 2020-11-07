import React, {PureComponent} from "react";

const withFormComment = (Component) => {
  class WithFormComment extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        comment: ``,
        rating: 0,
      };

      this.handleChangeText = this.handleChangeText.bind(this);
      this.handleChangeStars = this.handleChangeStars.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeText(evt) {
      this.setState({
        comment: evt.target.value
      });
    }

    handleChangeStars(evt) {
      this.setState({
        rating: evt.target.value
      });
    }

    handleSubmit(evt) {
      evt.preventDefault();
      console.log(`comment:`, this.state.comment, `, rating:`, this.state.rating);
      this.setState({
        reviewText: ``,
        stars: 0,
      });
    }

    render() {
      return (
        <Component
          {...this.props}
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

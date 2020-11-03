import React, {PureComponent} from "react";
import PropTypes from "prop-types";

const withActiveItem = (Component) => {
  class WithActiveItem extends PureComponent {
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
      const {activeOffer} = this.state;

      return (
        <Component
          {...this.props}
          activeOffer={activeOffer}
          handleMouseOver={this.handleMouseOver}
        />
      );
    }
  }
  return WithActiveItem;
};

export default withActiveItem;

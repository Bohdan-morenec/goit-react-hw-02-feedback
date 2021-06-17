import { Component } from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";

export class FeedbackOptions extends Component {
  render() {
    return (
      <>
        {this.props.options.map((value) => (
          <button key={uuidv4()} onClick={this.props.onLeaveFeedback(value)}>
            {value}
          </button>
        ))}
      </>
    );
  }
}

FeedbackOptions.propTypes = {
  options: PropTypes.array,
};

import { Component } from "react";
import PropTypes from "prop-types";
export class FeedbackOptions extends Component {
  render() {
    return (
      <>
        <button onClick={this.props.options("good")}>good</button>
        <button onClick={this.props.options("neutral")}>neutral</button>
        <button onClick={this.props.options("bad")}>bad</button>
      </>
    );
  }
}

FeedbackOptions.propTypes = {
  options: PropTypes.func.isRequired,
};

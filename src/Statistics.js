import { Component } from "react";
import PropTypes from "prop-types";

export class Statistics extends Component {
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;

    return (
      <div>
        <ul>
          <li>
            Good <span>{good}</span>
          </li>
          <li>
            Neutral <span>{neutral}</span>
          </li>
          <li>
            Bad <span>{bad}</span>
          </li>
          <li>
            total <span>{total}</span>
          </li>
          <li>
            Positive feedback:
            {positivePercentage}%
          </li>
        </ul>
      </div>
    );
  }
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

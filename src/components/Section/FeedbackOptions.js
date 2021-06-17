import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {options.map((value) => (
        <button key={uuidv4()} onClick={onLeaveFeedback(value)}>
          {value}
        </button>
      ))}
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};

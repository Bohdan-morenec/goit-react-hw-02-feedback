import PropTypes from "prop-types";

const a = ({ message }) => {
  return <div>{message}</div>;
};

a.propTypes = {
  message: PropTypes.string.isRequired,
};

export default a;

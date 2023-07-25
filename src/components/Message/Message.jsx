import PropTypes from 'prop-types';

export const NotifyMessage = ({ message }) => {
  return <p>{message}</p>;
};

NotifyMessage.propTypes = {
  message: PropTypes.string,
};

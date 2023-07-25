import { Message } from './Message.styled';
import PropTypes from 'prop-types';

export const Notification = ({ message }) => {
  return (
    <Message>
      <p>{message}</p>
    </Message>
  );
};

Notification.propTypes = {
  message: PropTypes.string,
};

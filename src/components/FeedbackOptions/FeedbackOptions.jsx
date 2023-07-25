import { FeedbackButtons } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FeedbackButtons>
      {options.map(el => {
        return (
          <button type="button" onClick={() => onLeaveFeedback(el)}>
            {el}
          </button>
        );
      })}
    </FeedbackButtons>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func,
};

import PropTypes from 'prop-types';
import { FeedbackButtons } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map(el => {
        return (
          <FeedbackButtons type="button" onClick={() => onLeaveFeedback(el)}>
            {el}
          </FeedbackButtons>
        );
      })}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func,
};

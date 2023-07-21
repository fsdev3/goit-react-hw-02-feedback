import PropTypes from 'prop-types';
import { StatList } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <StatList>
        <li>
          Good:<span> {good}</span>
        </li>
        <li>
          Neutral:<span> {neutral}</span>
        </li>
        <li>
          Bad:<span> {bad}</span>
        </li>
        <li>
          Total:<span> {total}</span>
        </li>
        <li>
          Positive feedback:
          <span> {0 | positivePercentage}%</span>
        </li>
      </StatList>
    </>
  );
};

Statistics.propTypes = {
  state: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
  }),
};

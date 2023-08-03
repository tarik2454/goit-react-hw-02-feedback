import PropTypes from 'prop-types';
import { StatisticsList, StatisticsItem } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positiveFeedbackPercentage,
}) => {
  return (
    <StatisticsList>
      <li>
        <StatisticsItem>
          Good: <span>{good}</span>
        </StatisticsItem>
      </li>
      <li>
        <StatisticsItem>
          Neutral: <span>{neutral}</span>
        </StatisticsItem>
      </li>
      <li>
        <StatisticsItem>
          Bad: <span>{bad}</span>
        </StatisticsItem>
      </li>
      <StatisticsItem>
        Total: <span>{total}</span>
      </StatisticsItem>
      <li>
        <StatisticsItem>
          Positive feedback: <span>{positiveFeedbackPercentage}%</span>
        </StatisticsItem>
      </li>
    </StatisticsList>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positiveFeedbackPercentage: PropTypes.string.isRequired,
};

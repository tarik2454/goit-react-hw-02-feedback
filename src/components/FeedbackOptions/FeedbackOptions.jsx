import PropTypes from 'prop-types';
import { StyledFeedbackList, StyledButton } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <StyledFeedbackList>
      {options.map((key, index) => (
        <li key={index}>
          <StyledButton onClick={() => onLeaveFeedback(key)}>
            {key}
          </StyledButton>
        </li>
      ))}
    </StyledFeedbackList>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

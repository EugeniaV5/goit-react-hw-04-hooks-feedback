import PropTypes from 'prop-types';

import { Button, ButtonWrapper } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonWrapper>
      {options.map(option => {
        return (
          <Button
            type="button"
            key={option}
            id={option}
            onClick={onLeaveFeedback}
          >
            {option}
          </Button>
        );
      })}
    </ButtonWrapper>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

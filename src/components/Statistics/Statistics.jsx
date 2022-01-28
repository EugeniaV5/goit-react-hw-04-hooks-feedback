import PropTypes from 'prop-types';

import {
  OptionsWrapper,
  TotalParagraph,
  BadOption,
  NeutralOption,
  GoodOption,
} from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <OptionsWrapper>
      <GoodOption>Good: {good}</GoodOption>
      <NeutralOption>Neutral: {neutral}</NeutralOption>
      <BadOption>Bad: {bad}</BadOption>
      <TotalParagraph>Total: {total}</TotalParagraph>
      <p>Positive feedback: {positivePercentage}%</p>
    </OptionsWrapper>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

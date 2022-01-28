import React, { Component } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFb = e => {
    const stateKey = e.target.id;
    this.setState(prevState => ({
      [stateKey]: prevState[stateKey] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const totalFeedbacks = this.countTotalFeedback();
    const PositiveFeedbackPercentage = Math.round(
      (this.state.good * 100) / totalFeedbacks,
    );
    return PositiveFeedbackPercentage ? PositiveFeedbackPercentage : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalFb = this.countTotalFeedback();
    const goodRate = this.countPositiveFeedbackPercentage();
    const options = Object.keys(this.state);
    return (
      <>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions options={options} onLeaveFeedback={this.handleFb} />
        </Section>
        <Section title={'Statistics'}>
          {totalFb === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFb}
              positivePercentage={goodRate}
            />
          )}
        </Section>
      </>
    );
  }
}

export default App;

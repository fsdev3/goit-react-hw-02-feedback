import { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = feedbackType => {
    this.setState(
      prevState => ({
        [feedbackType]: prevState[feedbackType] + 1,
      }),
      () => {
        this.countTotalFeedback();
      }
    );
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    this.setState(
      prevState => {
        return { total: (prevState.total = good + neutral + bad) };
      },
      () => {
        this.countPositiveFeedbackPercentage();
      }
    );
  };

  countPositiveFeedbackPercentage = () => {
    const { good, total } = this.state;
    this.setState(prevState => {
      return {
        positivePercentage: (prevState.positivePercentage =
          (good / total) * 100),
      };
    });
  };

  render() {
    const { good, neutral, bad, total, positivePercentage } = this.state;
    return (
      <div>
        <FeedbackOptions onLeaveFeedback={this.onLeaveFeedback} />

        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={positivePercentage}
        />
      </div>
    );
  }
}

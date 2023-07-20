import { Component } from 'react';

export const App = () => {
  return <Counter />;
};
class Counter extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleClickGood = () => {
    this.setState(
      prevState => ({ good: (prevState.good += 1) }),
      () => {
        this.countTotalFeedback();
      }
    );
  };
  handleClickNeutral = () => {
    this.setState(
      prevState => ({ neutral: (prevState.neutral += 1) }),
      () => {
        this.countTotalFeedback();
      }
    );
  };
  handleClickBad = () => {
    this.setState(
      prevState => ({ bad: (prevState.bad += 1) }),
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
        {/* <FeedbackOptions options={state} onLeaveFeedback={o}></FeedbackOptions> */}
        <h1>Please leave feedback</h1>
        <button onClick={this.handleClickGood}>Good</button>
        <button onClick={this.handleClickNeutral}>Neutral</button>
        <button onClick={this.handleClickBad}>Bad</button>
        {/* <FeedbackOptions /> */}
        {/* <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage}> */}
        <p>Statistics</p>
        <ul>
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
            Total:<span> {0 | total}</span>
          </li>
          <li>
            Positive feedback:
            <span> {0 | positivePercentage}%</span>
          </li>
        </ul>
        {/* <Statistics /> */}
      </div>
    );
  }
}

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
        this.countPositiveFeedbackPercentage();
      }
    );
  };
  handleClickNeutral = () => {
    this.setState(
      prevState => ({ neutral: (prevState.neutral += 1) }),
      () => {
        this.countTotalFeedback();
        this.countPositiveFeedbackPercentage();
      }
    );
  };
  handleClickBad = () => {
    this.setState(
      prevState => ({ bad: (prevState.bad += 1) }),
      () => {
        this.countTotalFeedback();
        this.countPositiveFeedbackPercentage();
      }
    );
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    this.setState({ total });
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    const positivePercentage = (good / (good + neutral + bad)) * 100;
    this.setState({ positivePercentage });
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
        <div>
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
        </div>
      </div>
    );
  }
}

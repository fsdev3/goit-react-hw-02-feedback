import { Component } from 'react';

export class Counter extends Component {
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
    this.setState(prevState => ({
      total: (prevState.total = good + neutral + bad),
    }));
  };

  render() {
    return (
      <div>
        <h1>Please leave feedback</h1>
        <button onClick={this.handleClickGood}>Good</button>
        <button onClick={this.handleClickNeutral}>Neutral</button>
        <button onClick={this.handleClickBad}>Bad</button>
        <p>Statistics</p>
        <ul>
          <li>
            Good: <span>{this.state.good}</span>
          </li>
          <li>
            Neutral: <span>{this.state.neutral}</span>
          </li>
          <li>
            Bad: <span>{this.state.bad}</span>
          </li>
          <li>
            Total: <span>{0 | this.state.total}</span>
          </li>
        </ul>
      </div>
    );
  }
}

// export default Counter;

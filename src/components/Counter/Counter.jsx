import { Component } from 'react';

export class Counter extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleClickGood = () => {
    this.setState(prevState => ({ good: (prevState.good += 1) }));
  };
  handleClickNeutral = () => {
    this.setState(prevState => ({ neutral: (prevState.neutral += 1) }));
  };
  handleClickBad = () => {
    this.setState(prevState => ({ bad: (prevState.bad += 1) }));
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
        </ul>
      </div>
    );
  }
}

// export default Counter;

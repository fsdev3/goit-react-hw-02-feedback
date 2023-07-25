import React, { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section.jsx';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Message/Message';
import { Container } from './App.styled';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  onLeaveFeedback = state => {
    this.setState(prevData => ({
      [state]: prevData[state] + 1,
    }));
  };
  countTotalFeedback() {
    let total = Object.values(this.state).reduce((prevData, number) => {
      return prevData + number;
    }, 0);

    return total;
  }
  countPositiveFeedbackPercentage({ good }) {
    const total = this.countTotalFeedback();
    let positivePercent = total !== 0 ? Math.round((good / total) * 100) : 0;
    return positivePercent;
  }
  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercent = this.countPositiveFeedbackPercentage(
      this.state,
      total
    );
    const options = Object.keys(this.state);
    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        {total !== 0 ? (
          <Section title="Statistics:">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercent={positivePercent}
            />
          </Section>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Container>
    );
  }
}

import React, { Component } from 'react';
import FeedbackOptions from './FeedbackOptions';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  createFeedback = option => {
    this.setState(prevState => {
      return { [option]: prevState[option] + 1 };
    });
  };

  render() {
    const {good, neutral, bad} = this.state
    return (
      <div>
        <h1>Please leave feedback</h1>
        <FeedbackOptions options={ Object.keys(this.state) } onLeaveFeedback={this.createFeedback } />
        <h1>Statistic</h1>
        <ul>
          <li>Good: {good}</li>
          <li>Neutral: {neutral} </li>
          <li>Bad: {bad}</li>
        </ul>
      </div>
    );
  }
}

export default App;

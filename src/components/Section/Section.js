import { Component } from "react";
import { Statistics } from "./Statistics";
import { FeedbackOptions } from "./FeedbackOptions";
import Notification from "./Notification";

export class Section extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  eventСatcher = (review) => () => {
    this.setState({ [review]: this.state[review] + 1 });
  };

  countPositiveFeedbackPercentage = () =>
    Math.trunc((100 * this.state.good) / this.countTotalFeedback());

  countTotalFeedback = () =>
    this.state.good + this.state.neutral + this.state.bad;

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <section>
        <h1>Please leave feedback</h1>
        <FeedbackOptions
          options={["good", "neutral", "bad"]}
          onLeaveFeedback={this.eventСatcher}
        ></FeedbackOptions>
        <h2>Statistics</h2>
        {this.countTotalFeedback() !== 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="No feedback given"></Notification>
        )}
      </section>
    );
  }
}

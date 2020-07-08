import React, { Component } from "react";
import Question from "../components/Question";

export default class Home extends Component {
  state = {
    question: {
      question: "How many numbers are between 1 to 10",
      isMultiple: false,
      options: [1, 2, 200, 250],
      answer: [1, 2],
    },
  };

  render() {
    return (
      <div>
        <Question question={this.state.question} />
      </div>
    );
  }
}

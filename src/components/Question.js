import React, { Component } from "react";
import QuestionLabel from "./QuestionLabel";
import QuestionOption from "./QuestionOption";

export default class Question extends Component {
  render() {
    const {
      question,
      isMultiple,
      options,
      answer,
      isAnswered,
    } = this.props.question;

    return (
      <div>
          <QuestionLabel text={question} />
          <QuestionOption
            options={options}
            answer={answer}
            isMultiple={isMultiple}
            onChange={this.props.onChange}
            isAnswered={isAnswered}
          />
      </div>
    );
  }
}

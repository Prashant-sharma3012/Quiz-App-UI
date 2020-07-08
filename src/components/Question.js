import React, { Component } from "react";
import QuestionLabel from "./QuestionLabel";
import QuestionOption from "./QuestionOption";

export default class Question extends Component {
  render() {
    const { question, isMultiple, options, answer } = this.props.question;
    return (
      <div>
        <QuestionLabel text={question} />
        {options.map((option) => (
          <QuestionOption isMultiple={isMultiple} label={option} />
        ))}
      </div>
    );
  }
}

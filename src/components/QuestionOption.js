import React, { Component } from "react";
import CheckBoxSelect from "./CheckBoxSelect";
import RadioSelect from "./RadioSelect";

export default class QuestionOption extends Component {
  render() {
    const { isMultiple, options, answer, onChange, isAnswered } = this.props;

    return (
      <div>
        {isMultiple ? (
          <CheckBoxSelect
            options={options}
            answer={answer}
            onChange={onChange}
            isAnswered={isAnswered}
          />
        ) : (
          <RadioSelect
            options={options}
            answer={answer}
            onChange={onChange}
            isAnswered={isAnswered}
          />
        )}
        <span>{this.props.label}</span>
      </div>
    );
  }
}

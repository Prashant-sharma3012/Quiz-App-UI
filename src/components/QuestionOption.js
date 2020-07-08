import React, { Component } from "react";
import CheckBoxSelect from "./CheckBoxSelect";
import RadioSelect from "./RadioSelect";

export default class QuestionOption extends Component {
  render() {
    const { isMultiple, options, answer, onChange } = this.props;

    return (
      <div>
        {isMultiple ? (
          <CheckBoxSelect
            options={options}
            answer={answer}
            onChange={onChange}
          />
        ) : (
          <RadioSelect
            options={options}
            answer={answer}
            onChange={onChange}
          />
        )}
        <span>{this.props.label}</span>
      </div>
    );
  }
}

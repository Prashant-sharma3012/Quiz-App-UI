import React, { Component } from "react";
import Checkbox from "@material-ui/core/Checkbox";
import Radio from "@material-ui/core/Radio";

export default class QuestionOption extends Component {
  onChange = () => {};

  render() {
    return (
      <div>
        {this.props.isMultiple ? (
          <Checkbox
            checked={this.props.isChecked}
            onChange={this.onChange}
            inputProps={{ "aria-label": "primary checkbox" }}
          />
        ) : (
          <Radio
            checked={this.props.isChecked}
            onChange={this.onChange}
            value="a"
          />
        )}
        <span>{this.props.label}</span>
      </div>
    );
  }
}

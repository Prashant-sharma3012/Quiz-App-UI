import React, { Component } from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

export default class CheckBoxSelect extends Component {
  state = {};

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.checked,
    });

    this.props.onChange(e.target.name, e.target.checked);
  };

  isSelected = (opt) => {
    return this.state.selected.includes(opt);
  };

  render() {
    const { options } = this.props;

    return (
      <div>
        {options.map((option, indx) => (
          <FormControlLabel
            key={indx}
            control={
              <Checkbox
                name={option.toString()}
                checked={this.state[option] || false}
                onChange={this.onChange}
                color="primary"
              />
            }
            label={option}
          />
        ))}
      </div>
    );
  }
}

import React, { Component } from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";

export default class RadioSelect extends Component {
  state = {
    selected: null,
  };

  onChange = (e) => {
    e.preventDefault();

    this.setState({
      selected: e.target.value
    })

    this.props.onChange(e.target.value)
  };

  render() {
    const { options } = this.props;

    return (
      <div>
        <RadioGroup
          value={this.state.selected ? this.state.selected.toString() : null}
          onChange={this.onChange}
        >
          {options.map((option, indx) => (
            <FormControlLabel
              key={indx}
              value={option.toString()}
              control={<Radio />}
              label={option.toString()}
            />
          ))}
        </RadioGroup>
      </div>
    );
  }
}

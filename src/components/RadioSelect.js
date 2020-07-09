import React, { Component } from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import { withStyles } from "@material-ui/core";

const styles = (theme) => ({
  opt: {
    "&:hover": {
      backgroundColor: theme.palette.primary.light,
      borderRadius: "4px",
    },
  },
});

class RadioSelect extends Component {
  state = {
    selected: null,
  };

  componentDidMount() {
    this.setState({ selected: null });
  }

  onChange = (e) => {
    e.preventDefault();

    this.setState({
      selected: e.target.value,
    });

    this.props.onChange(e.target.value);
  };

  render() {
    const { options, isAnswered, classes } = this.props;

    return (
      <div>
        <RadioGroup
          value={this.state.selected ? this.state.selected.toString() : null}
          onChange={this.onChange}
        >
          {options.map((option, indx) => (
            <FormControlLabel
              className={classes.opt}
              key={indx}
              value={option.toString()}
              control={<Radio />}
              label={option.toString()}
              disabled={isAnswered}
            />
          ))}
        </RadioGroup>
      </div>
    );
  }
}

export default withStyles(styles)(RadioSelect);
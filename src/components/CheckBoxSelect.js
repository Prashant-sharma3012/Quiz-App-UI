import React, { Component } from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { withStyles } from "@material-ui/core";

const styles = (theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
  },
  opt:{
    '&:hover': {
      backgroundColor: theme.palette.primary.light,
      borderRadius: '4px'
    }
  }
});

class CheckBoxSelect extends Component {
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
    const { options, isAnswered, classes } = this.props;

    return (
      <div className={classes.container}>
        {options.map((option, indx) => (
          <FormControlLabel
            className={classes.opt}
            key={indx}
            control={
              <Checkbox
                name={option.toString()}
                checked={this.state[option] || false}
                onChange={this.onChange}
                color="primary"
                disabled={isAnswered}
              />
            }
            label={option}
          />
        ))}
      </div>
    );
  }
}

export default withStyles(styles)(CheckBoxSelect);

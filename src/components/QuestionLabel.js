import React, { Component } from "react";
import { withStyles } from "@material-ui/core";

const styles = (theme) => ({
  container: {
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 500,
    fontSize: '1.4rem',
    padding: 0,
    margin: '1rem 0rem'
  },
});

class QuestionLabel extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <span>{this.props.text}</span>
      </div>
    );
  }
}

export default withStyles(styles)(QuestionLabel);

import React, { Component } from "react";
import Quiz from './Quiz';
import { withStyles } from "@material-ui/core";

const styles = (theme) => ({
  container: {
    backgroundColor: theme.palette.type === 'light' ? '#FFF' : '#000',
  }
})

class Home extends Component {
  render() {
    return (
      <div className={this.props.classes.container}>
        <Quiz />
      </div>
    );
  }
}

export default withStyles(styles)(Home);
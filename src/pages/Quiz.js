import React, { Component } from "react";
import Question from "../components/Question";
import { Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core";

//fake needto go
import fakeDate from "../fake/questions";

const styles = (theme) => ({
  container: {},
  questionContainer: {},
  buttonContainer: {},
});

class Quiz extends Component {
  state = {
    questions: [],
    answered: [],
    answeredIds: [],
    question: null,
    at: 0,
    currentAnswered: false
  };

  componentDidMount() {
    this.setState({
      questions: fakeDate,
      question: fakeDate[0],
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <div className={classes.questionContainer}>
          {this.state.question && <Question question={this.state.question} />}
        </div>
        <div className={classes.buttonContainer}>
          <Button onClick={this.previous}>Prev</Button>
          {!this.state.currentAnswered ? (
            <Button onClick={this.submit}>Submit</Button>
          ) : (
            <Button onClick={this.next}>Next</Button>
          )}
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Quiz);

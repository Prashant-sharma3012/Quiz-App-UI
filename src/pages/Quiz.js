import React, { Component } from "react";
import Question from "../components/Question";
import { Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";

//fake needto go
import fakeDate from "../fake/questions";

const styles = (theme) => ({
  container: {
    padding: "1rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  questionContainer: {},
  buttonContainer: {
    marginTop: "1rem",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  main: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: "100vh",
    padding: "0rem 5rem",
    minWidth: "50vw",
    width: "50%",
    margin: "auto",
  },
  message: {
    display: "flex",
    justifyContent: "center",
    fontSize: "1rem",
    fontFamily: "roboto, sans-serif",
    fontWeight: 500,
    padding: "1rem",
    marginTop: "1rem",
  },
  correct: {
    backgroundColor: theme.palette.success.light,
  },
  incorrect: {
    backgroundColor: theme.palette.error.light,
  },
  position:{
    display: "flex",
    justifyContent: "center",
    fontSize: "1.4rem",
    fontFamily: "roboto, sans-serif",
    fontWeight: 500,
    marginBottom: '1rem'
  }
});

class Quiz extends Component {
  state = {
    questions: [],
    answered: [],
    answeredIds: [],
    question: null,
    at: 0,
    currentAnswered: false,
    isCorrect: false,
  };

  componentDidMount() {
    this.setState({
      questions: fakeDate,
      question: fakeDate[0],
    });
  }

  previous = () => {
    if (!this.state.at) {
      return;
    }

    this.setState({
      at: this.state.at - 1,
      question: this.state.questions[this.state.at - 1],
    });
  };

  isEqual = (arr1, arr2) => {
    // stringify options before you star tcomparing them
    let arr1Stringified = arr1.map((e) => e.toString());
    let arr2Stringified = arr2.map((e) => e.toString());

    // check all elements are present and length is same
    let allAnswersPresent = false;
    let lengthMatch = false;
    arr1Stringified.map((e) => {
      if (!arr2Stringified.includes(e)) {
        allAnswersPresent = false;
      } else {
        allAnswersPresent = true;
      }
    });

    if (arr1.length === arr2.length) {
      lengthMatch = true;
    }

    return allAnswersPresent && lengthMatch;
  };

  isCorrect = () => {
    if (
      this.isEqual(
        this.state.question.answer,
        this.state.question.userSelection
      )
    ) {
      return true;
    }
    return false;
  };

  submit = () => {
    if (!this.state.question.userSelection) {
      return;
    }

    let isCorrect = false;
    // chk if answer is correct
    if (this.isCorrect()) {
      isCorrect = true;
    } else {
      isCorrect = false;
    }

    this.setState({
      answered: this.state.question,
      answeredIds: [...this.state.answeredIds, this.state.at],
      question: {
        ...this.state.question,
        isAnswered: true,
        isCorrect,
      },
      questions: this.state.questions.map((e, indx) => {
        if (this.state.at === indx) {
          e.isAnswered = true;
          e.isCorrect = isCorrect;
        }
        return e;
      }),
      isCorrect,
    });
  };

  next = () => {
    if (this.state.at === this.state.questions.length - 1) {
      return;
    }

    this.setState({
      at: this.state.at + 1,
      question: this.state.questions[this.state.at + 1],
    });
  };

  onChange = (val, isSelected) => {
    let userSelection;

    if (!this.state.question.isMultiple) {
      return this.setState({
        question: {
          ...this.state.question,
          userSelection: [val],
        },
      });
    }

    if (this.state.question.userSelection) {
      if (isSelected) {
        userSelection = [...this.state.question.userSelection, val];
      } else {
        userSelection = this.state.question.userSelection.filter(
          (e) => e !== val
        );
      }
    } else {
      userSelection = [val];
    }

    this.setState({
      question: {
        ...this.state.question,
        userSelection: userSelection,
      },
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.main}>
        <div className={classes.position}>{this.state.at + 1} of {this.state.questions.length}</div>
        <Paper elevation={3}>
          {this.state.question && (
            <div
              className={`${classes.container}
                ${
                  this.state.question.isAnswered
                    ? this.state.question.isCorrect
                      ? classes.correct
                      : classes.incorrect
                    : ""
                }`}
            >
              <div className={classes.questionContainer}>
                {this.state.question && (
                  <Question
                    onChange={this.onChange}
                    question={this.state.question}
                  />
                )}
              </div>
              {this.state.question && (
                <div className={classes.buttonContainer}>
                  <Button
                    color="primary"
                    variant="contained"
                    onClick={this.previous}
                  >
                    Prev
                  </Button>
                  {!this.state.question.isAnswered ? (
                    <Button
                      color="primary"
                      variant="contained"
                      onClick={this.submit}
                    >
                      Submit
                    </Button>
                  ) : (
                    <Button
                      color="primary"
                      variant="contained"
                      onClick={this.next}
                    >
                      Next
                    </Button>
                  )}
                </div>
              )}
              {this.state.question.isAnswered && (
                <div className={classes.message}>
                  {this.state.question.isCorrect
                    ? "Awesome"
                    : "Oops, Thats not the right Answer"}
                </div>
              )}
            </div>
          )}
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(Quiz);

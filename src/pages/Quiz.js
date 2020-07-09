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
    currentAnswered: false,
    message: "",
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

    let message = "";
    // chk if answer is correct
    if (this.isCorrect()) {
      message = "Correct";
    } else {
      message = "In Correct";
    }

    this.setState({
      answered: this.state.question,
      answeredIds: [...this.state.answeredIds, this.state.at],
      message: message,
      question: {
        ...this.state.question,
        isAnswered: true,
      },
      questions: this.state.questions.map((e, indx) => {
        if (this.state.at === indx) {
          e.isAnswered = true;
        }
        return e;
      }),
    });
  };

  next = () => {
    if (this.state.at === this.state.questions.length - 1) {
      return;
    }

    this.setState({
      at: this.state.at + 1,
      question: this.state.questions[this.state.at + 1],
      message: "",
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
      <div className={classes.container}>
        <div className={classes.questionContainer}>
          {this.state.question && (
            <Question onChange={this.onChange} question={this.state.question} />
          )}
        </div>
        {this.state.question && (
          <div className={classes.buttonContainer}>
            <Button onClick={this.previous}>Prev</Button>
            {!this.state.question.isAnswered ? (
              <Button onClick={this.submit}>Submit</Button>
            ) : (
              <Button onClick={this.next}>Next</Button>
            )}
          </div>
        )}
        <div>{this.state.message}</div>
      </div>
    );
  }
}

export default withStyles(styles)(Quiz);

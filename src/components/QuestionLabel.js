import React, { Component } from 'react'

export default class QuestionLabel extends Component {
  render() {
    return (
      <div>
        <span>{this.props.text}</span>
      </div>
    )
  }
}

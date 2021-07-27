// Complete this piece of code to actually create the comment
// when the form is submitted

import React, { Component, PropTypes } from "react";

export class CommentBox extends Component {
  constructor() {
    super();
    this._addComment = this._addComment.bind(this);
  }

  _addComment(authorName, body) {
    // We don't care about this method implementation
  }

  render() {
    // Voluntarily truncated
    return (
      <div>
        <CommentForm addComment={this._addComment()} />
      </div>
    );
  }
}

export class CommentForm extends Component {
  constructor() {
    super();
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleSubmit(e) {
    // Write the content of this method
  }

  render() {
    return (
      <form role="form" onSubmit={this._handleSubmit} className="form comment">
        <input placeholder="Name:" />
        <textarea placeholder="Comment:" />
      </form>
    );
  }
}

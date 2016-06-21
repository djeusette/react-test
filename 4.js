// How can you refactor this class to manipulate the DOM the React way?

import React, { Component, PropTypes } from 'react';

export class CommentBox extends Component {
  static propTypes = {
    comments: PropTypes.array.isRequired,
  };

  componentDidMount() {
    $('.show-btn').on('click', () => { $('.comment-list').show(); });
    $('.hide-btn').on('click', () => { $('.comment-list').hide(); });
  }

  render() {
    const { comments } = this.props;

    return (
      <div>
        <button className="show-btn">Show comments</button>
        <button className="hide-btn">Hide comments</button>
        <div className="comment-list">{comments}</div>
      </div>
    );
  }
};

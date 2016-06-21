// Component lifecycle: if we had to fetch the comments from a remote server,
// when would we perform that action?  What's the name of the lifecycle method below?

// What's the problem with the implementation below?

import React, { Component } from 'react';

export class CommentBox extends Component {
  // ...

  _fetchComments() {
    // We don't care about this method implementation
  }

  // We don't show the name of the method
  lifecycleMethod() {
    setInterval(() => this._fetchComments(), 5000);
  }

  render() {
    // ...
  }
};

// Component lifecycle: if we had to fetch the comments
// from a remote server, when would we perform that action?
// What's the name of the lifecycle method below?
// Using a functional component and React hooks,
// how would you do it?

// What's the problem with the implementation below?

import React, { Component } from "react";

export class CommentBox extends Component {
  // ...

  _fetchComments() {
    // We don't care about this method implementation
    // However it's worth noting that it updates the component's state
  }

  // Voluntarily obfuscated
  componentXXX() {
    setInterval(() => this._fetchComments(), 5000);
  }

  render() {
    // ...
  }
}
